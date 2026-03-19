'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const MapVodun = dynamic(() => import('@/components/MapVodun'), {
  ssr: false,
  loading: () => (
    <div className="h-[520px] rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
      <p className="text-amber-500/60 text-sm">Chargement de la carte...</p>
    </div>
  ),
})

export default function ExplorerPage() {
  return (
    <main className="min-h-screen bg-amber-50 text-amber-900">
      <Navbar />

      <header className="pt-32 pb-14 px-4 border-b border-amber-200 bg-white/60">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-500 text-[11px] tracking-[0.35em] uppercase font-semibold mb-3">Géographie sacrée</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900">Lieux sacrés Vodun</h1>
            <p className="text-amber-700 text-sm max-w-sm leading-relaxed">
              Temples, forêts sacrées et sanctuaires géolocalisés au Bénin — chacun lié à un signe du Fâ.
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm">
          <MapVodun />
        </div>
        <p className="text-center text-amber-600/50 text-xs mt-4">
          Cliquez sur un marqueur pour voir le signe associé et son QR code.
        </p>
      </section>

      <Footer />
    </main>
  )
}
