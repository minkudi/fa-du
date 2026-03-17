import { NextRequest, NextResponse } from 'next/server'

const PROMPT = `Analyse cette image d'un signe du Fa.

Le signe a 2 colonnes verticales. Chaque colonne a 4 positions de haut en bas.
Chaque position = soit 1 barre verticale (valeur 1) soit 2 barres paralleles (valeur 2).

FOCUS sur l'espace entre les barres :
- 1 barre seule, pas d'espace = valeur 1
- 2 barres avec un espace visible entre elles = valeur 2

Reponds avec UNIQUEMENT ce JSON, rien d'autre :
{"col1":[A,B,C,D],"col2":[E,F,G,H]}

Si pas de signe Fa visible : {"error":"no_sign"}`

async function callModel(model: string, imageBase64: string, mediaType: string, apiKey: string) {
  const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      max_tokens: 150,
      temperature: 0,
      messages: [{
        role: 'user',
        content: [
          {
            type: 'image_url',
            image_url: { url: `data:${mediaType};base64,${imageBase64}` }
          },
          { type: 'text', text: PROMPT }
        ]
      }]
    })
  })
  const data = await response.json()
  console.log(`[vision] model=${model} response:`, JSON.stringify(data).slice(0, 500))
  return data
}

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mediaType = 'image/jpeg' } = await req.json()
    if (!imageBase64) {
      return NextResponse.json({ error: 'imageBase64 requis' }, { status: 400 })
    }

    const cleanBase64 = imageBase64.includes(',') ? imageBase64.split(',')[1] : imageBase64
    const apiKey = process.env.HF_API_TOKEN!

    // Essayer Qwen2.5-VL-7B en premier, puis Qwen2.5-VL-72B en fallback
    const models = [
      'Qwen/Qwen2.5-VL-7B-Instruct',
      'Qwen/Qwen2.5-VL-72B-Instruct',
    ]

    for (const model of models) {
      const data = await callModel(model, cleanBase64, mediaType, apiKey)

      if (data.error) {
        console.log(`[vision] model=${model} error:`, data.error)
        continue
      }

      const text = data.choices?.[0]?.message?.content?.trim()
      if (!text) continue

      console.log(`[vision] model=${model} text:`, text)

      const jsonMatch = text.match(/\{[^{}]+\}/)
      if (!jsonMatch) continue

      try {
        const parsed = JSON.parse(jsonMatch[0])
        // Valider les valeurs
        if (parsed.error) return NextResponse.json(parsed)
        const all = [...(parsed.col1 ?? []), ...(parsed.col2 ?? [])]
        if (all.length === 8 && all.every((v: number) => v === 1 || v === 2)) {
          return NextResponse.json(parsed)
        }
        console.log('[vision] valeurs invalides:', parsed)
      } catch {
        console.log('[vision] JSON parse error pour:', jsonMatch[0])
      }
    }

    return NextResponse.json({ error: 'Impossible d\'analyser le signe. Reessayez avec une image plus nette.' }, { status: 500 })

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}