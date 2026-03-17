'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

const MapVodun = dynamic(() => import('@/components/MapVodun'), {
  ssr: false,
  loading: () => (
    <div className="h-[520px] rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center">
      <p className="text-stone-500 text-sm">Chargement de la carte...</p>
    </div>
  ),
})

export default function ExplorerPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <header className="border-b border-stone-800 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-stone-500 hover:text-amber-400 text-sm transition-colors mb-6 inline-block">
            ← Retour
          </Link>
          <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-2">Géographie sacrée</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Lieux sacrés Vodun</h1>
          <p className="text-stone-400 text-sm max-w-xl">
            Temples, forêts sacrées et sanctuaires géolocalisés au Bénin — chacun lié à un signe du Fâ.
            Cliquez sur un marqueur pour voir le signe associé.
          </p>
        </div>
      </header>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <MapVodun />
      </section>
      <footer className="border-t border-stone-800 py-8 px-4 text-center text-stone-600 text-xs">
        © 2026 FÂ DÜ — Valorisation du patrimoine immatériel du golfe du Bénin
      </footer>
    </main>
  )
}