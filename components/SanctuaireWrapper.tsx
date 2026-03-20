'use client'

import dynamic from 'next/dynamic'

const SanctuaireScroll = dynamic(() => import('./SanctuaireScroll'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#08060f] flex items-center justify-center">
      <div className="text-center">
        <div className="text-amber-400 text-xl tracking-[0.5em] animate-pulse">FÂ DÜ</div>
        <div className="text-amber-700/40 text-[10px] tracking-widest mt-3">SANCTUAIRES EN COURS...</div>
      </div>
    </div>
  ),
})

export default function SanctuaireWrapper() {
  return <SanctuaireScroll />
}