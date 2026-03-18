'use client'
import VisionScanner from '@/components/VisionScanner'
import { useRef, useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { faMotherSigns, genererToutesCombinations } from '@/data/faSigns'

const SLUGS_VALIDES = faMotherSigns.map(s => s.id)

type Mark = 1 | 2 | null
type Mode = 'choose' | 'camera' | 'draw'

type Destination =
  | { type: 'signe'; slug: string }
  | { type: 'combo'; signe: string; combinationId: string }

function buildLookupTable(): Record<string, Destination> {
  const table: Record<string, Destination> = {}
  faMotherSigns.forEach(s => {
    const key = s.figureSymbolique.colonnes.map(col => col.join(',')).join('|')
    table[key] = { type: 'signe', slug: s.id }
  })
  genererToutesCombinations()
    .filter(c => c.type === 'vikando')
    .forEach(c => {
      const key = c.figureSymbolique.colonnes.map(col => col.join(',')).join('|')
      table[key] = { type: 'combo', signe: c.signePrincipal.id, combinationId: c.id }
    })
  return table
}

const LOOKUP = buildLookupTable()

const EMPTY_GRID: Mark[][] = [
  [null, null, null, null],
  [null, null, null, null],
]

export default function ScanPage() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animRef = useRef<number>(0)

  const [mode, setMode] = useState<Mode>('choose')
  const [cameraError, setCameraError] = useState('')
  const [grid, setGrid] = useState<Mark[][]>(EMPTY_GRID.map(c => [...c]))
  const [noMatch, setNoMatch] = useState(false)

  useEffect(() => {
    return () => {
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop())
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  function stopCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop())
      streamRef.current = null
    }
    cancelAnimationFrame(animRef.current)
  }

  const startCamera = useCallback(async () => {
    setCameraError('')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 } }
      })
      streamRef.current = stream
      const video = videoRef.current
      if (!video) return
      video.srcObject = stream
      await video.play()
      scanLoop()
    } catch {
      setCameraError("Impossible d'acceder a la camera.")
    }
  }, [])

  function scanLoop() {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function tick() {
      if (!video || video.readyState < video.HAVE_ENOUGH_DATA) {
        animRef.current = requestAnimationFrame(tick)
        return
      }
      canvas!.width = video.videoWidth
      canvas!.height = video.videoHeight
      ctx!.drawImage(video, 0, 0)
      const imageData = ctx!.getImageData(0, 0, canvas!.width, canvas!.height)

      import('jsqr').then(({ default: jsQR }) => {
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        })
        if (code?.data) {
          const comboMatch = code.data.match(/\/signes\/([a-z-]+)\/([a-z-]+)/)
          if (comboMatch) {
            stopCamera()
            router.push('/signes/' + comboMatch[1] + '/' + comboMatch[2])
            return
          }
          const signeMatch = code.data.match(/\/signes\/([a-z-]+)$/)
          if (signeMatch && SLUGS_VALIDES.includes(signeMatch[1])) {
            stopCamera()
            router.push('/signes/' + signeMatch[1])
            return
          }
        }
        animRef.current = requestAnimationFrame(tick)
      })
    }
    animRef.current = requestAnimationFrame(tick)
  }

  function toggleMark(col: number, row: number) {
    setNoMatch(false)
    setGrid(prev => {
      const next = prev.map(c => [...c]) as Mark[][]
      const cur = next[col][row]
      next[col][row] = cur === null ? 1 : cur === 1 ? 2 : null
      return next
    })
  }

  function identify() {
    setNoMatch(false)
    const key = grid.map(col => col.join(',')).join('|')
    const dest = LOOKUP[key]
    if (!dest) { setNoMatch(true); return }
    if (dest.type === 'signe') router.push('/signes/' + dest.slug)
    else router.push('/signes/' + dest.signe + '/' + dest.combinationId)
  }

  function reset() {
    setGrid(EMPTY_GRID.map(c => [...c]))
    setNoMatch(false)
  }

  const allFilled = grid.flat().every(m => m !== null)

  function MarkButton({ value, onClick }: { value: Mark; onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className="w-16 h-12 rounded-xl border-2 border-amber-200 hover:border-amber-500 bg-white flex items-center justify-center transition-colors"
      >
        {value === null && (
          <div className="w-6 h-6 rounded-full border-2 border-dashed border-amber-200" />
        )}
        {value === 1 && (
          <div className="w-2.5 h-8 bg-amber-700 rounded-full" />
        )}
        {value === 2 && (
          <div className="flex gap-2">
            <div className="w-2.5 h-8 bg-amber-700 rounded-full" />
            <div className="w-2.5 h-8 bg-amber-700 rounded-full" />
          </div>
        )}
      </button>
    )
  }

  return (
    <main className="min-h-screen bg-amber-50 px-4 py-10 max-w-lg mx-auto">

      <Link href="/" className="text-sm text-amber-700/50 hover:text-amber-600 transition-colors mb-6 inline-block">
        ← Retour
      </Link>

      <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-2">Identification</p>
      <h1 className="text-2xl font-bold text-amber-900 mb-2">Identifier un signe</h1>
      <p className="text-amber-700/60 text-sm mb-8">
        Reproduisez les 2 colonnes du signe ou photographiez-le — l&apos;app identifie parmi les 256 signes.
      </p>

      {/* MODE CHOOSE */}
      {mode === 'choose' && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">

            {/* Titre section */}
            <div className="mb-5">
              <p className="font-semibold text-amber-900">Composer le signe que je vois</p>
              <p className="text-sm text-amber-700/60 mt-0.5">2 colonnes — identifie les 256 signes automatiquement</p>
            </div>

            <button
              onClick={() => setMode('draw')}
              className="w-full py-3 mb-5 rounded-xl bg-amber-700 text-white text-sm font-medium hover:bg-amber-600 transition-colors"
            >
              Ouvrir la grille de composition
            </button>

            <div className="h-px bg-amber-100 mb-5" />

            <VisionScanner />
          </div>
        </div>
      )}

      {/* MODE CAMERA QR */}
      {mode === 'camera' && (
        <div>
          <button
            onClick={() => { stopCamera(); setMode('choose') }}
            className="text-sm text-amber-700/60 hover:text-amber-700 mb-4 inline-block"
          >
            ← Retour
          </button>
          {cameraError && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-xl mb-4">
              {cameraError}
            </div>
          )}
          <div className="relative rounded-2xl overflow-hidden bg-amber-900 aspect-square">
            <video ref={videoRef} className="w-full h-full object-cover" muted playsInline />
            <canvas ref={canvasRef} className="hidden" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-52 h-52 border-2 border-amber-300/70 rounded-2xl" />
            </div>
          </div>
          <p className="text-center text-sm text-amber-700/50 mt-3">
            Centrez un QR code FÂ DÜ dans le cadre
          </p>
        </div>
      )}

      {/* MODE DRAW */}
      {mode === 'draw' && (
        <div className="bg-white rounded-2xl border border-amber-200 p-6 shadow-sm">
          <button
            onClick={() => setMode('choose')}
            className="text-sm text-amber-700/60 hover:text-amber-700 mb-6 inline-block"
          >
            ← Retour
          </button>

          <p className="text-xs text-amber-700/50 mb-6">
            Appuyez sur chaque case pour alterner — vide &rarr; <strong className="text-amber-800">I</strong> (1 barre) &rarr; <strong className="text-amber-800">II</strong> (2 barres) &rarr; vide
          </p>

          <div className="flex gap-4 justify-center mb-8">
            {grid.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-3 items-center">
                <p className="text-xs text-amber-700/40 font-mono">Col. {ci + 1}</p>
                {col.map((mark, ri) => (
                  <MarkButton
                    key={ri}
                    value={mark}
                    onClick={() => toggleMark(ci, ri)}
                  />
                ))}
              </div>
            ))}
          </div>

          {noMatch && (
            <p className="text-center text-sm text-red-500 mb-4">
              Aucun signe trouvé. Vérifiez la séquence.
            </p>
          )}

          <div className="flex gap-3">
            <button
              onClick={identify}
              disabled={!allFilled}
              className="flex-1 py-3 rounded-xl bg-amber-700 text-white font-medium text-sm hover:bg-amber-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Identifier ce signe
            </button>
            <button
              onClick={reset}
              className="px-4 py-3 rounded-xl border border-amber-200 text-amber-700/60 text-sm hover:bg-amber-50 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      )}

    </main>
  )
}