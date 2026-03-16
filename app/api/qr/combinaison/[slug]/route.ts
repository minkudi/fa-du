import { NextRequest, NextResponse } from 'next/server'
import QRCode from 'qrcode'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  // slug = "gbe-yekou", le signe principal est dans l'URL parente
  // On pointe vers la page complète via la query string ou on reconstruit
  // L'URL cible sera passée en query param ?signe=gbe-medji
  const signe = _req.nextUrl.searchParams.get('signe') ?? ''
  const url = signe
    ? `https://fa-du.vercel.app/signes/${signe}/${slug}`
    : `https://fa-du.vercel.app`

  const buffer = await QRCode.toBuffer(url, {
    type: 'png',
    width: 400,
    margin: 2,
    color: { dark: '#1a1a2e', light: '#ffffff' },
    errorCorrectionLevel: 'H',
  })

  return new NextResponse(buffer as unknown as BodyInit, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}