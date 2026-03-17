import { NextRequest, NextResponse } from 'next/server'

const PROMPT = `Tu analyses une image d'un signe du Fa, systeme de divination du Benin.

Le signe a exactement 2 colonnes verticales cote a cote. Chaque colonne a 4 positions du haut vers le bas.
Chaque position contient soit :
- I : UNE seule barre verticale
- II : DEUX barres verticales paralleles avec un espace visible entre elles

Les signes peuvent etre de toute couleur, dessines a la main, imprimes ou sculptes.

Reponds UNIQUEMENT avec ce JSON, sans texte avant ni apres, sans backticks :
{"col1":[A,B,C,D],"col2":[E,F,G,H]}

A B C D = les 4 valeurs de la colonne gauche du haut vers le bas (1 ou 2)
E F G H = les 4 valeurs de la colonne droite du haut vers le bas (1 ou 2)

Si pas de signe Fa reconnaissable : {"error":"no_sign"}`

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mediaType = 'image/jpeg' } = await req.json()
    if (!imageBase64) {
      return NextResponse.json({ error: 'imageBase64 requis' }, { status: 400 })
    }

    const cleanBase64 = imageBase64.includes(',')
      ? imageBase64.split(',')[1]
      : imageBase64

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        max_tokens: 150,
        temperature: 0,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: {
                url: `data:${mediaType};base64,${cleanBase64}`,
                detail: 'low'
              }
            },
            { type: 'text', text: PROMPT }
          ]
        }]
      })
    })

    const data = await response.json()

    if (data.error) {
      return NextResponse.json(
        { error: data.error.message ?? JSON.stringify(data.error) },
        { status: 500 }
      )
    }

    const text = data.choices?.[0]?.message?.content?.trim()
    if (!text) {
      return NextResponse.json({ error: 'Reponse vide' }, { status: 500 })
    }

    const jsonMatch = text.match(/\{[^{}]+\}/)
    if (!jsonMatch) {
      return NextResponse.json({ error: 'JSON non trouve: ' + text }, { status: 500 })
    }

    const parsed = JSON.parse(jsonMatch[0])
    return NextResponse.json(parsed)

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}