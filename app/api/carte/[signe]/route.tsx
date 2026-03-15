import { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'
import { faMotherSigns, FaSign } from '@/data/faSigns'
import { CarteSigneFa } from '../CarteSigneFa'

export const runtime = 'edge'

function getSigneById(id: string): FaSign | undefined {
  return faMotherSigns.find((s) => s.id === id)
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ signe: string }> }
) {
  const { signe } = await context.params
  const faSign = getSigneById(signe)

  if (!faSign) {
    return new Response('Signe non trouvé', { status: 404 })
  }

  return new ImageResponse(<CarteSigneFa signe={faSign} />, {
    width: 1080,
    height: 1080,
  })
}
