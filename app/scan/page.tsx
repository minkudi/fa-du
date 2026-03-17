'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { faMotherSigns, genererToutesCombinations } from '@/data/faSigns'

const SLUGS_VALIDES = faMotherSigns.map(s => s.id)

type Mark = 1 | 2 | null
type Mode = 'choose' | 'camera' | 'draw'

// Table unique : 2 colonnes -> destination (signe-mere ou combinaison)
type Destination =
  | { type: 'signe'; slug: string }
  | { type: 'combo'; signe: string; combinationId: string }

function buildLookupTable(): Record<string, Destination> {
  const table: Record<string, Destination> = {}

  // Signes-mères
  faMotherSigns.forEach(s => {
    const key = s.figureSymbolique.colonnes.map(col => col.join(',')).join('|')
    table[key] = { type: 'signe', slug: s.id }
  })

  // Toutes les combinaisons (vikandos uniquement, les signe-meres sont deja couverts)
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
        className="w-16 h-12 rounded-xl border-2 border-violet-200 hover:border-violet-500 bg-white flex items-center justify-center transition-colors"
      >
        {value === null && (
          <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-300" />
        )}
        {value === 1 && (
          <div className="w-2.5 h-8 bg-violet-700 rounded-full" />
        )}
        {value === 2 && (
          <div className="flex gap-2">
            <div className="w-2.5 h-8 bg-violet-700 rounded-full" />
            <div className="w-2.5 h-8 bg-violet-700 rounded-full" />
          </div>
        )}
      </button>
    )
  }

  return (
    <main className="min-h-screen bg-white px-4 py-10 max-w-lg mx-auto">
      <Link href="/" className="text-sm text-violet-600 hover:underline mb-6 inline-block">
        Retour
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Identifier un signe</h1>
      <p className="text-gray-500 text-sm mb-8">
        Scannez un QR FÂ DÜ ou reproduisez les 2 colonnes du signe — signe-mere ou combinaison, l&apos;app identifie automatiquement parmi les 256.
      </p>

      {mode === 'choose' && (
        <div className="flex flex-col gap-4">
          <button
            onClick={() => { setMode('camera'); startCamera() }}
            className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors text-left w-full"
          >
            <span className="text-3xl">📷</span>
            <div>
              <p className="font-medium text-gray-900">Scanner un QR FÂ DÜ</p>
              <p className="text-sm text-gray-500">Signes-meres et combinaisons</p>
            </div>
          </button>
          <button
            onClick={() => setMode('draw')}
            className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors text-left w-full"
          >
            <span className="text-3xl">✏️</span>
            <div>
              <p className="font-medium text-gray-900">Composer le signe que je vois</p>
              <p className="text-sm text-gray-500">2 colonnes — identifie les 256 signes automatiquement</p>
            </div>
          </button>
        </div>
      )}

      {mode === 'camera' && (
        <div>
          <button onClick={() => { stopCamera(); setMode('choose') }} className="text-sm text-violet-600 mb-4 hover:underline">
            Changer de mode
          </button>
          {cameraError && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg mb-4">{cameraError}</div>
          )}
          <div className="relative rounded-2xl overflow-hidden bg-black aspect-square">
            <video ref={videoRef} className="w-full h-full object-cover" muted playsInline />
            <canvas ref={canvasRef} className="hidden" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-52 h-52 border-2 border-white/70 rounded-2xl" />
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-3">
            Centrez un QR code FÂ DÜ dans le cadre
          </p>
        </div>
      )}

      {mode === 'draw' && (
        <div>
          <button onClick={() => setMode('choose')} className="text-sm text-violet-600 mb-6 hover:underline">
            Changer de mode
          </button>

          <p className="text-xs text-gray-400 mb-6">
            Appuyez sur chaque case — vide <strong>I</strong> (1 barre) <strong>II</strong> (2 barres) vide
          </p>

          {/* Grille 2 colonnes x 4 lignes */}
          <div className="flex gap-4 justify-center mb-8">
            {grid.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-3 items-center">
                <p className="text-xs text-gray-400">Col. {ci + 1}</p>
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
              Aucun signe trouve. Verifiez la sequence.
            </p>
          )}

          <div className="flex gap-3">
            <button
              onClick={identify}
              disabled={!allFilled}
              className="flex-1 py-3 rounded-xl bg-violet-700 text-white font-medium text-sm hover:bg-violet-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Identifier ce signe
            </button>
            <button
              onClick={reset}
              className="px-4 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </main>
  )
}