import { NextRequest, NextResponse } from 'next/server'

const PROMPT = `Tu regardes une image d'un signe du Fa (systeme de divination du Benin).

Un signe Fa est compose de 2 colonnes cote a cote. Chaque colonne a exactement 4 marques.
Chaque marque est soit :
- I : une seule barre verticale (trait simple)
- II : deux barres verticales cote a cote (double trait)

Les signes peuvent etre dessines a la main, imprimes, peints, sculptes. Toutes couleurs et styles.

Reponds UNIQUEMENT avec un JSON valide, sans texte ni backticks :
{"col1":[X,X,X,X],"col2":[X,X,X,X]}

X = 1 (une barre) ou 2 (deux barres). col1 = gauche, col2 = droite, ordre haut vers bas.
Si pas de signe Fa reconnaissable : {"error":"no_sign"}`

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mediaType = 'image/jpeg' } = await req.json()
    if (!imageBase64) {
      return NextResponse.json({ error: 'imageBase64 requis' }, { status: 400 })
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://fa-du.vercel.app',
        'X-Title': 'FA DU',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.2-11b-vision-instruct:free',
        max_tokens: 200,
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

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 })
    }

    const text = data.choices?.[0]?.message?.content?.trim()
    if (!text) {
      return NextResponse.json({ error: 'Reponse vide' }, { status: 500 })
    }

    const clean = text.replace(/```json|```/g, '').trim()
    const parsed = JSON.parse(clean)
    return NextResponse.json(parsed)

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}