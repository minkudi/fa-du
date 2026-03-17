import { NextRequest, NextResponse } from 'next/server'

const PROMPT = `Tu regardes une image d'un signe du Fa (systeme de divination du Benin).

Un signe Fa est compose de 2 colonnes cote a cote. Chaque colonne a exactement 4 marques.
Chaque marque est soit :
- I : une seule barre verticale (trait simple)
- II : deux barres verticales cote a cote (double trait)

Les signes peuvent etre dessines a la main, imprimes, peints, sculptes. Les couleurs et le style varient completement.

Analyse l'image et reponds UNIQUEMENT avec un objet JSON valide, sans texte avant ni apres, sans backticks :
{"col1":[X,X,X,X],"col2":[X,X,X,X]}

Ou X est 1 (pour I, une barre) ou 2 (pour II, deux barres).
col1 = colonne gauche, col2 = colonne droite, ordre haut vers bas.

Si l'image ne contient pas de signe Fa reconnaissable, reponds : {"error":"no_sign"}`

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mediaType = 'image/jpeg' } = await req.json()

    if (!imageBase64) {
      return NextResponse.json({ error: 'imageBase64 requis' }, { status: 400 })
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              {
                inline_data: {
                  mime_type: mediaType,
                  data: imageBase64
                }
              },
              { text: PROMPT }
            ]
          }],
          generationConfig: {
            maxOutputTokens: 200,
            temperature: 0,
          }
        })
      }
    )

    const data = await response.json()

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 })
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

    if (!text) {
      return NextResponse.json({ error: 'Reponse vide de Gemini' }, { status: 500 })
    }

    const clean = text.replace(/```json|```/g, '').trim()
    const parsed = JSON.parse(clean)

    return NextResponse.json(parsed)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}