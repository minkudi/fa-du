import { NextRequest, NextResponse } from 'next/server'

const PROMPT = `Tu regardes une image d'un signe du Fa (systeme de divination du Benin).
Un signe Fa est compose de 2 colonnes cote a cote. Chaque colonne a exactement 4 marques.
Chaque marque est soit I (une seule barre verticale) soit II (deux barres verticales).
Les signes peuvent etre dessines a la main, imprimes, peints. Toutes couleurs et styles.
Reponds UNIQUEMENT avec un JSON valide sans texte ni backticks :
{"col1":[X,X,X,X],"col2":[X,X,X,X]}
X = 1 pour I (une barre) ou 2 pour II (deux barres). col1 = gauche, col2 = droite, haut vers bas.
Si pas de signe Fa : {"error":"no_sign"}`

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mediaType = 'image/jpeg' } = await req.json()
    if (!imageBase64) {
      return NextResponse.json({ error: 'imageBase64 requis' }, { status: 400 })
    }

    const response = await fetch(
      'https://api-inference.huggingface.co/models/Qwen/Qwen2.5-VL-7B-Instruct',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.HF_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: {
            image: `data:${mediaType};base64,${imageBase64}`,
            question: PROMPT,
          },
        }),
      }
    )

    if (!response.ok) {
      const err = await response.text()
      return NextResponse.json({ error: err }, { status: 500 })
    }

    const data = await response.json()
    const text = (data[0]?.generated_text || data?.generated_text || '').trim()
    const clean = text.replace(/```json|```/g, '').trim()
    const parsed = JSON.parse(clean)
    return NextResponse.json(parsed)

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}