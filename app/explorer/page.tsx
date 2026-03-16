import dynamic from 'next/dynamic'
import Link from 'next/link'

const MapVodun = dynamic(() => import('@/components/MapVodun'), {
  ssr: false,
loading: () => <p className="text-sm text-gray-400 py-10 text-center">Chargement de la carte…</p>,
})

export default function ExplorerPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <Link href="/" className="text-sm text-violet-600 hover:underline mb-6 inline-block">
          ← Retour
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Lieux sacrés Vodun — Bénin</h1>
        <p className="text-gray-500 text-sm mb-2 max-w-2xl">
          Explorez les temples, marchés et lieux culturels liés au Fâ à travers le Bénin.
          Sur place, scannez le QR FÂ DÜ pour accéder à l&apos;histoire du signe associé.
        </p>
        <p className="text-xs text-gray-400 mb-6">Cliquez sur un marqueur pour voir le signe lié et son QR code.</p>
        <MapVodun />
      </div>
    </main>
  )
}