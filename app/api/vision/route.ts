import { NextRequest, NextResponse } from 'next/server'

const PROMPT = `Tu analyses une image contenant un signe du Fa, systeme de divination du Benin.

STRUCTURE : Le signe a exactement 2 colonnes verticales cote a cote. Chaque colonne contient exactement 4 positions (de haut en bas).

REGLES DE LECTURE - tres important :
- Chaque position contient soit UN trait vertical (= valeur 1) soit DEUX traits verticaux separes par un espace visible (= valeur 2)
- UN trait = 1 barre unique, mince, verticale
- DEUX traits = 2 barres paralleles cote a cote avec un espace clair entre elles
- Si tu vois une barre large ou epaisse, regarde si c'est en realite 2 barres tres proches = valeur 2
- Le style, la couleur, le fond, l'epaisseur des traits ne changent pas la logique

EXEMPLES :
- Position avec | = valeur 1
- Position avec || = valeur 2
- Position avec I = valeur 1
- Position avec II = valeur 2

Reponds UNIQUEMENT avec ce JSON exact, sans aucun texte avant ou apres, sans backticks, sans explication :
{"col1":[A,B,C,D],"col2":[E,F,G,H]}

Ou A B C D sont les 4 valeurs (1 ou 2) de la colonne gauche du haut vers le bas,
et E F G H sont les 4 valeurs (1 ou 2) de la colonne droite du haut vers le bas.

Si l'image ne montre pas clairement un signe Fa, reponds : {"error":"no_sign"}`

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mediaType = 'image/jpeg' } = await req.json()
    if (!imageBase64) {
      return NextResponse.json({ error: 'imageBase64 requis' }, { status: 400 })
    }

    // Nettoyer le base64 — retirer le prefixe data URI si present
    const cleanBase64 = imageBase64.includes(',')
      ? imageBase64.split(',')[1]
      : imageBase64

    const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HF_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'Qwen/Qwen2.5-VL-7B-Instruct',
        max_tokens: 200,
        temperature: 0,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: {
                url: `data:${mediaType};base64,${cleanBase64}`
              }
            },
            {
              type: 'text',
              text: PROMPT
            }
          ]
        }]
      })
    })

    const data = await response.json()

    if (data.error) {
      return NextResponse.json(
        { error: typeof data.error === 'string' ? data.error : JSON.stringify(data.error) },
        { status: 500 }
      )
    }

    const text = data.choices?.[0]?.message?.content?.trim()
    if (!text) {
      return NextResponse.json({ error: 'Reponse vide du modele' }, { status: 500 })
    }

    // Extraire le JSON de la reponse
    const jsonMatch = text.match(/\{[^{}]+\}/)
    if (!jsonMatch) {
      return NextResponse.json({ error: 'JSON non trouve dans: ' + text }, { status: 500 })
    }

    const parsed = JSON.parse(jsonMatch[0])
    return NextResponse.json(parsed)

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}