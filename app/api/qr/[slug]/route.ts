import { NextRequest, NextResponse } from 'next/server'
import QRCode from 'qrcode'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const url = `https://fa-du.vercel.app/signes/${slug}`

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