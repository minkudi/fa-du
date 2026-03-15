// app/api/carte-combinaison/[slug]/route.tsx
import { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'
import { CarteSigneFa, CarteSignLike } from '../../carte/CarteSigneFa'
import { getCombinaisonBySlug } from '@/data/signes-data'
import { faMotherSigns, FaSign } from '@/data/faSigns'

export const runtime = 'edge'

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params
  const combo = getCombinaisonBySlug(slug)

  if (!combo) {
    return new Response('Combinaison non trouvée', { status: 404 })
  }

  const faPrincipal = faMotherSigns.find((s) => s.id === combo.signePrincipal.slug)
  const faCompagnie = faMotherSigns.find((s) => s.id === combo.signeCompagnie.slug)

  const fetichesFusionnees = [
    ...(faPrincipal?.fetiches ?? []),
    ...(faCompagnie?.fetiches ?? []),
  ]

  const signLike: CarteSignLike = {
    position: combo.signePrincipal.position,
    id: combo.slug,
    nomPrincipal: combo.nom,
    sexe: combo.signePrincipal.type === 'mâle' ? 'masculin' : 'feminin',
    figureSymbolique: {
      colonnes: [
        // ⚠️ .slice(0, 4) : on prend seulement les 4 premières valeurs de chaque signe
        combo.symboleGauche.slice(0, 4).map((s: string) => (s === 'I' ? 1 : 2)), // maison (Ka)
        combo.symboleDroit.slice(0, 4).map((s: string) => (s === 'I' ? 1 : 2)),  // principal (Lete)
      ],
      description: combo.description,
    },
    resumeCourt: combo.description,
    motsCles: combo.motsCles,
    texteRue: combo.description,
    themesDeVie: [],
    tonGeneral: 'equilibre',
    fetiches: fetichesFusionnees,
    feuillesLiturgiques: [],
    couleursPreferes: [],
    devises: [],
    interdits: [],
    sacrifices: [],
    commentaire: '',
    elementCode: combo.signePrincipal.element as 'feu' | 'terre' | 'eau' | 'air',
  }

  return new ImageResponse(<CarteSigneFa signe={signLike} />, {
    width: 1080,
    height: 1080,
  })
}
