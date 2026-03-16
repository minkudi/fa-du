'use client'
import Link from 'next/link'
import { useRef, useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Les 16 slugs valides pour la validation
const SLUGS_VALIDES = [
  'gbe-medji','yekou-medji','woli-medji','di-medji','losso-medji','winlin-medji',
  'abla-medji','aklan-medji','guda-medji','sa-medji','ka-medji','trukpin-medji',
  'tula-medji','lete-medji','tche-medji','fu-medji',
]

// Table de correspondance séquence → slug
type Mark = 1 | 2 | null

// Séquence → slug : format "col1[0],col1[1],col1[2],col1[3]|col2[0],col2[1],col2[2],col2[3]"
const SEQUENCE_TO_SLUG: Record<string, string> = {
  '1,1,1,1|1,1,1,1':   'gbe-medji',
  '2,2,2,2|2,2,2,2':   'yekou-medji',
  '2,1,1,2|2,1,1,2':   'woli-medji',
  '1,2,2,1|1,2,2,1':   'di-medji',
  '1,1,2,2|1,1,2,2':   'losso-medji',
  '2,2,1,1|2,2,1,1':   'winlin-medji',
  '1,2,2,2|1,2,2,2':   'abla-medji',
  '2,2,2,1|2,2,2,1':   'aklan-medji',
  '1,1,1,2|1,1,1,2':   'guda-medji',
  '2,1,1,1|2,1,1,1':   'sa-medji',
  '2,1,2,2|2,1,2,2':   'ka-medji',
  '2,2,1,2|2,2,1,2':   'trukpin-medji',
  '1,2,1,1|1,2,1,1':   'tula-medji',
  '1,1,2,1|1,1,2,1':   'lete-medji',
  '1,2,1,2|1,2,1,2':   'tche-medji',
  '2,1,2,1|2,1,2,1':   'fu-medji',
}

export default function ScanPage() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animRef = useRef<number>(0)

  const [mode, setMode] = useState<'choose' | 'camera' | 'draw'>('choose')
  const [cameraError, setCameraError] = useState('')
  const [scanning, setScanning] = useState(false)
const [sequence, setSequence] = useState<Mark[][]>([[null,null,null,null],[null,null,null,null]])
  const [noMatch, setNoMatch] = useState(false)

  // Cleanup caméra au démontage
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
    setScanning(false)
  }

  const startCamera = useCallback(async () => {
    setCameraError('')
    setScanning(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } }
      })
      streamRef.current = stream
      const video = videoRef.current
      if (!video) return
      video.srcObject = stream
      await video.play()
      scanLoop()
    } catch {
      setCameraError("Impossible d'accéder à la caméra. Vérifiez les permissions.")
      setScanning(false)
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
          // Chercher un slug FÂ DÜ dans l'URL scannée
          const match = code.data.match(/\/signes\/([a-z-]+)(?:\/|$)/)
          if (match && SLUGS_VALIDES.includes(match[1])) {
            stopCamera()
            router.push(`/signes/${match[1]}`)
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
  setSequence(prev => {
    const next = prev.map(c => [...c]) as Mark[][]
    const current = next[col][row]
    next[col][row] = current === null ? 1 : current === 1 ? 2 : null
    return next
  })
}

  function identifySigne() {
    const key = sequence.map(col => col.join(',')).join('|')
    const slug = SEQUENCE_TO_SLUG[key]
    if (slug) {
      router.push(`/signes/${slug}`)
    } else {
      setNoMatch(true)
    }
  }

  function resetDraw() {
    setSequence([[null,null,null,null],[null,null,null,null]])
    setNoMatch(false)
  }

  const allFilled = sequence.flat().every(m => m !== null)

  return (
    <main className="min-h-screen bg-white px-4 py-10 max-w-lg mx-auto">
<Link href="/" className="text-sm text-violet-600 hover:underline mb-6 inline-block">
  ← Retour
</Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Identifier un signe</h1>
      <p className="text-gray-500 text-sm mb-8">
        Scannez un QR FÂ DÜ ou composez votre signe manuellement.
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
              <p className="text-sm text-gray-500">Pointez votre caméra vers un QR code d&apos;exposition ou de livret</p>
            </div>
          </button>
          <button
            onClick={() => setMode('draw')}
            className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors text-left w-full"
          >
            <span className="text-3xl">✏️</span>
            <div>
              <p className="font-medium text-gray-900">Composer mon signe</p>
              <p className="text-sm text-gray-500">Entrez la séquence de I et II pour identifier votre signe</p>
            </div>
          </button>
        </div>
      )}

      {mode === 'camera' && (
        <div>
          <button
            onClick={() => { stopCamera(); setMode('choose') }}
            className="text-sm text-violet-600 mb-4 hover:underline"
          >
            ← Changer de mode
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
          <p className="text-center text-sm text-gray-400 mt-3">Centrez un QR code FÂ DÜ dans le cadre</p>
        </div>
      )}

      {mode === 'draw' && (
        <div>
          <button onClick={() => setMode('choose')} className="text-sm text-violet-600 mb-6 hover:underline">
            ← Changer de mode
          </button>

          <p className="text-sm text-gray-500 mb-1">Composez les 2 colonnes de votre signe :</p>
          <p className="text-xs text-gray-400 mb-6">Appuyez sur chaque case — vide → <strong>I</strong> → <strong>II</strong> → vide</p>

          <div className="flex gap-10 justify-center mb-8">
            {(['Colonne 1', 'Colonne 2'] as const).map((_, ci) => (
              <div key={ci} className="flex flex-col gap-3 items-center">
                <p className="text-xs text-gray-400 mb-1">Col. {ci + 1}</p>
                {sequence[ci].map((mark, ri) => (
                  <button
                    key={ri}
                    onClick={() => toggleMark(ci, ri)}
                    className="w-20 h-14 rounded-xl border-2 border-violet-200 hover:border-violet-500 bg-white flex items-center justify-center transition-colors relative"
                  >
{mark === null && (
  <div className="w-7 h-7 rounded-full border-2 border-dashed border-gray-300" />
)}
{mark === 1 && (
  <div className="w-3 h-9 bg-violet-700 rounded-full" />
)}
{mark === 2 && (
  <div className="flex gap-2">
    <div className="w-3 h-9 bg-violet-700 rounded-full" />
    <div className="w-3 h-9 bg-violet-700 rounded-full" />
  </div>
)}
                  </button>
                ))}
              </div>
            ))}
          </div>

          {noMatch && (
            <p className="text-center text-sm text-red-500 mb-4">
              Aucun signe correspondant. Vérifiez votre séquence.
            </p>
          )}

          <div className="flex gap-3">
            <button
              onClick={identifySigne}
              disabled={!allFilled}
              className="flex-1 py-3 rounded-xl bg-violet-700 text-white font-medium text-sm hover:bg-violet-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Identifier ce signe →
            </button>
            <button
              onClick={resetDraw}
              className="px-4 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition-colors"
            >
              Réinitialiser
            </button>
          </div>
        </div>
      )}
    </main>
  )
}