'use client'

import { useState } from 'react'

type Props = {
  slug: string
  nom: string
}

export default function QRDownloadButton({ slug, nom }: Props) {
  const [loading, setLoading] = useState(false)

  async function downloadCard() {
    setLoading(true)
    try {
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import('jspdf'),
        import('html2canvas'),
      ])

      const container = document.getElementById('fadu-card-print')
      if (!container) return

const canvas = await html2canvas(container as HTMLElement, {
  background: '#ffffff',
  useCORS: true,
  logging: false,
} as Parameters<typeof html2canvas>[1])

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a5' })
      const pdfW = pdf.internal.pageSize.getWidth()
      const pdfH = pdf.internal.pageSize.getHeight()
      pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH)
      pdf.save(`${nom.replace(/[^a-zA-Z0-9\-]/g, '-')}.pdf`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={downloadCard}
      disabled={loading}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-violet-400 text-violet-700 text-sm font-medium hover:bg-violet-50 transition-colors disabled:opacity-50 cursor-pointer"
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-violet-400 border-t-transparent rounded-full animate-spin" />
      ) : (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17v2a2 2 0 002 2h16a2 2 0 002-2v-2"/>
        </svg>
      )}
      Télécharger carte {nom}
    </button>
  )
}