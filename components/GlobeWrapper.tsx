'use client'

import dynamic from 'next/dynamic'

const GlobeExplorer = dynamic(() => import('./GlobeExplorer'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#030310] flex items-center justify-center">
      <div className="text-center">
        <div className="text-amber-400 text-2xl tracking-[0.5em] animate-pulse">FÂ DÜ</div>
        <div className="text-amber-700/40 text-[10px] tracking-widest mt-3">CHARGEMENT DU COSMOS...</div>
      </div>
    </div>
  ),
})

export default function GlobeWrapper() {
  return <GlobeExplorer />
}