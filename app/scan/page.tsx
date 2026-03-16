'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { faMotherSigns, genererToutesCombinations } from '@/data/faSigns'

const SLUGS_VALIDES = faMotherSigns.map(s => s.id)

type Mark = 1 | 2 | null
type Mode = 'choose' | 'camera' | 'draw'
type DrawMode = 'signe' | 'combinaison'

// Table signe-mère : séquence -> slug
function buildSigneTable(): Record<string, string> {
  const table: Record<string, string> = {}
  faMotherSigns.forEach(s => {
    const key = s.figureSymbolique.colonnes.map(col => col.join(',')).join('|')
    table[key] = s.id
  })
  return table
}

// Table combinaisons : séquence 4 colonnes -> { signe, combinationId }
function buildComboTable(): Record<string, { signe: string; combinationId: string }> {
  const table: Record<string, { signe: string; combinationId: string }> = {}
  const combos = genererToutesCombinations()
  combos.forEach(c => {
    // colonnes[0] = signeCompagnie col0, colonnes[1] = signePrincipal col0
    // figure = [compagnie_col0, principal_col0] (voir faSigns.ts)
    const compagnie = c.signeCompagnie.figureSymbolique.colonnes
    const principal = c.signePrincipal.figureSymbolique.colonnes
    // 4 colonnes : col0_comp, col1_comp, col0_princ, col1_princ
    const key = [
      compagnie[0].join(','),
      compagnie[1].join(','),
      principal[0].join(','),
      principal[1].join(','),
    ].join('|')
    table[key] = { signe: c.signePrincipal.id, combinationId: c.id }
  })
  return table
}

const SIGNE_TABLE = buildSigneTable()
const COMBO_TABLE = buildComboTable()

export default function ScanPage() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animRef = useRef<number>(0)

  const [mode, setMode] = useState<Mode>('choose')
  const [drawMode, setDrawMode] = useState<DrawMode>('signe')
  const [cameraError, setCameraError] = useState('')
  const [scanning, setScanning] = useState(false)
  const [noMatch, setNoMatch] = useState(false)

  // Grille signe-mère : 2 colonnes x 4 lignes
  const [signSeq, setSignSeq] = useState<Mark[][]>([[null,null,null,null],[null,null,null,null]])
  // Grille combinaison : 4 colonnes x 4 lignes (col0+col1 = compagnie, col2+col3 = principal)
  const [comboSeq, setComboSeq] = useState<Mark[][]>([
    [null,null,null,null],
    [null,null,null,null],
    [null,null,null,null],
    [null,null,null,null],
  ])

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
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 } }
      })
      streamRef.current = stream
      const video = videoRef.current
      if (!video) return
      video.srcObject = stream
      await video.play()
      scanLoop()
    } catch {
      setCameraError("Impossible d'acceder a la camera. Verifiez les permissions.")
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
          // Combinaison : /signes/gbe-medji/gbe-yekou
          const comboMatch = code.data.match(/\/signes\/([a-z-]+)\/([a-z-]+)/)
          if (comboMatch) {
            stopCamera()
            router.push('/signes/' + comboMatch[1] + '/' + comboMatch[2])
            return
          }
          // Signe-mere : /signes/gbe-medji
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

  function toggleMark(grid: Mark[][], col: number, row: number): Mark[][] {
    const next = grid.map(c => [...c]) as Mark[][]
    const cur = next[col][row]
    next[col][row] = cur === null ? 1 : cur === 1 ? 2 : null
    return next
  }

  function identifySigne() {
    setNoMatch(false)
    const key = signSeq.map(col => col.join(',')).join('|')
    const slug = SIGNE_TABLE[key]
    if (slug) {
      router.push('/signes/' + slug)
    } else {
      setNoMatch(true)
    }
  }

  function identifyCombo() {
    setNoMatch(false)
    const key = comboSeq.map(col => col.join(',')).join('|')
    const result = COMBO_TABLE[key]
    if (result) {
      router.push('/signes/' + result.signe + '/' + result.combinationId)
    } else {
      setNoMatch(true)
    }
  }

  const signeFilled = signSeq.flat().every(m => m !== null)
  const comboFilled = comboSeq.flat().every(m => m !== null)

  function MarkButton({ value, onClick }: { value: Mark; onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className="w-14 h-12 rounded-lg border-2 border-violet-200 hover:border-violet-500 bg-white flex items-center justify-center transition-colors"
      >
        {value === null && <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-300" />}
        {value === 1 && <div className="w-2.5 h-9 bg-violet-700 rounded-full" />}
        {value === 2 && (
          <div className="flex gap-1.5">
            <div className="w-2.5 h-9 bg-violet-700 rounded-full" />
            <div className="w-2.5 h-9 bg-violet-700 rounded-full" />
          </div>
        )}
      </button>
    )
  }

  return (
    <main className="min-h-screen bg-white px-4 py-10 max-w-xl mx-auto">
      <a href="/" className="text-sm text-violet-600 hover:underline mb-6 inline-block">
        Retour
      </a>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Identifier un signe</h1>
      <p className="text-gray-500 text-sm mb-8">
        Scannez un QR FÂ DÜ ou composez le signe que vous voyez pour l&apos;identifier.
      </p>

      {/* CHOIX MODE */}
      {mode === 'choose' && (
        <div className="flex flex-col gap-4">
          <button
            onClick={() => { setMode('camera'); startCamera() }}
            className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors text-left w-full"
          >
            <span className="text-3xl">📷</span>
            <div>
              <p className="font-medium text-gray-900">Scanner un QR FÂ DÜ</p>
              <p className="text-sm text-gray-500">Fonctionne pour les signes-mères et les combinaisons</p>
            </div>
          </button>
          <button
            onClick={() => setMode('draw')}
            className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors text-left w-full"
          >
            <span className="text-3xl">✏️</span>
            <div>
              <p className="font-medium text-gray-900">Composer le signe que je vois</p>
              <p className="text-sm text-gray-500">Reproduisez les barres du signe — signe-mère ou combinaison</p>
            </div>
          </button>
        </div>
      )}

      {/* MODE CAMERA */}
      {mode === 'camera' && (
        <div>
          <button onClick={() => { stopCamera(); setMode('choose') }} className="text-sm text-violet-600 mb-4 hover:underline">
            Changer de mode
          </button>
          {cameraError && <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg mb-4">{cameraError}</div>}
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

      {/* MODE DESSIN */}
      {mode === 'draw' && (
        <div>
          <button onClick={() => setMode('choose')} className="text-sm text-violet-600 mb-6 hover:underline">
            Changer de mode
          </button>

          {/* Toggle signe / combinaison */}
          <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => { setDrawMode('signe'); setNoMatch(false) }}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${drawMode === 'signe' ? 'bg-violet-700 text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Signe-mère (2 col.)
            </button>
            <button
              onClick={() => { setDrawMode('combinaison'); setNoMatch(false) }}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${drawMode === 'combinaison' ? 'bg-violet-700 text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Combinaison (4 col.)
            </button>
          </div>

          <p className="text-xs text-gray-400 mb-6">
            Appuyez sur chaque case — vide → <strong>I</strong> (1 barre) → <strong>II</strong> (2 barres) → vide
          </p>

          {/* GRILLE SIGNE-MÈRE */}
          {drawMode === 'signe' && (
            <>
              <div className="flex gap-6 justify-center mb-8">
                {signSeq.map((col, ci) => (
                  <div key={ci} className="flex flex-col gap-3 items-center">
                    <p className="text-xs text-gray-400">Col. {ci + 1}</p>
                    {col.map((mark, ri) => (
                      <MarkButton
                        key={ri}
                        value={mark}
                        onClick={() => {
                          setNoMatch(false)
                          setSignSeq(prev => toggleMark(prev, ci, ri))
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
              {noMatch && <p className="text-center text-sm text-red-500 mb-4">Aucun signe trouve. Verifiez la sequence.</p>}
              <div className="flex gap-3">
                <button
                  onClick={identifySigne}
                  disabled={!signeFilled}
                  className="flex-1 py-3 rounded-xl bg-violet-700 text-white font-medium text-sm hover:bg-violet-800 transition-colors disabled:opacity-40"
                >
                  Identifier ce signe
                </button>
                <button
                  onClick={() => { setSignSeq([[null,null,null,null],[null,null,null,null]]); setNoMatch(false) }}
                  className="px-4 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50"
                >
                  Reset
                </button>
              </div>
            </>
          )}

          {/* GRILLE COMBINAISON */}
          {drawMode === 'combinaison' && (
            <>
              <div className="flex gap-2 justify-center mb-2">
                <div className="flex gap-2">
                  {[0,1].map(ci => (
                    <div key={ci} className="flex flex-col gap-3 items-center">
                      {ci === 0 && <p className="text-xs text-gray-400 whitespace-nowrap">Maison</p>}
                      {ci === 1 && <p className="text-xs text-gray-400 whitespace-nowrap"></p>}
                      {comboSeq[ci].map((mark, ri) => (
                        <MarkButton
                          key={ri}
                          value={mark}
                          onClick={() => {
                            setNoMatch(false)
                            setComboSeq(prev => toggleMark(prev, ci, ri))
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex items-center px-2 text-gray-300 text-2xl font-thin">|</div>
                <div className="flex gap-2">
                  {[2,3].map(ci => (
                    <div key={ci} className="flex flex-col gap-3 items-center">
                      {ci === 2 && <p className="text-xs text-gray-400 whitespace-nowrap">Principal</p>}
                      {ci === 3 && <p className="text-xs text-gray-400 whitespace-nowrap"></p>}
                      {comboSeq[ci].map((mark, ri) => (
                        <MarkButton
                          key={ri}
                          value={mark}
                          onClick={() => {
                            setNoMatch(false)
                            setComboSeq(prev => toggleMark(prev, ci, ri))
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-xs text-gray-400 mb-6">
                Gauche = signe de la maison · Droite = signe principal
              </p>
              {noMatch && <p className="text-center text-sm text-red-500 mb-4">Aucune combinaison trouvee. Verifiez les colonnes.</p>}
              <div className="flex gap-3">
                <button
                  onClick={identifyCombo}
                  disabled={!comboFilled}
                  className="flex-1 py-3 rounded-xl bg-violet-700 text-white font-medium text-sm hover:bg-violet-800 transition-colors disabled:opacity-40"
                >
                  Identifier cette combinaison
                </button>
                <button
                  onClick={() => { setComboSeq([[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]]); setNoMatch(false) }}
                  className="px-4 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50"
                >
                  Reset
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </main>
  )
}