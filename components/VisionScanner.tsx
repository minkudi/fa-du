'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { faMotherSigns, genererToutesCombinations } from '@/data/faSigns'

const NOMS = faMotherSigns.map(s => s.nomPrincipal.split('-')[0])

function buildLookup() {
  const table: Record<string, { nom: string; url: string }> = {}
  faMotherSigns.forEach(s => {
    const key = s.figureSymbolique.colonnes.map(c => c.join(',')).join('|')
    table[key] = { nom: s.nomPrincipal, url: `/signes/${s.id}` }
  })
  genererToutesCombinations()
    .filter(c => c.type === 'vikando')
    .forEach((c, _, arr) => {
      const key = c.figureSymbolique.colonnes.map(col => col.join(',')).join('|')
      table[key] = {
        nom: c.nom,
        url: `/signes/${c.signePrincipal.id}/${c.id}`
      }
    })
  return table
}

const LOOKUP = buildLookup()

export default function VisionScanner() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    return () => { streamRef.current?.getTracks().forEach(t => t.stop()) }
  }, [])

  async function startCamera() {
    setError('')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 } }
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }
      setActive(true)
    } catch {
      setError("Impossible d'acceder a la camera.")
    }
  }

  function stopCamera() {
    streamRef.current?.getTracks().forEach(t => t.stop())
    streamRef.current = null
    setActive(false)
  }

  function captureAndAnalyze() {
    const video = videoRef.current
    if (!video) return
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d')!.drawImage(video, 0, 0)
    const base64 = canvas.toDataURL('image/jpeg', 0.85).split(',')[1]
    setPreview(canvas.toDataURL('image/jpeg', 0.5))
    analyze(base64)
  }

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const result = ev.target?.result as string
      setPreview(result)
      const base64 = result.split(',')[1]
      analyze(base64)
    }
    reader.readAsDataURL(file)
  }

  async function analyze(base64: string) {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/vision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: base64, mediaType: 'image/jpeg' })
      })
      const data = await res.json()

      if (data.error === 'no_sign') {
        setError('Aucun signe Fa detecte. Recadrez pour que le signe soit bien visible.')
        return
      }
      if (data.error) {
        setError('Erreur: ' + data.error)
        return
      }

      const col1: number[] = data.col1
      const col2: number[] = data.col2

      if (!col1 || !col2 || col1.length !== 4 || col2.length !== 4) {
        setError('Reponse invalide. Reessayez.')
        return
      }

      const key = [col1.join(','), col2.join(',')].join('|')
      const match = LOOKUP[key]

      if (match) {
        stopCamera()
        router.push(match.url)
      } else {
        setError(`Sequence [${col1.join(',')}|${col2.join(',')}] non trouvee. Reessayez avec une image plus nette.`)
      }
    } catch (err) {
      setError('Erreur reseau. Verifiez votre connexion.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Camera */}
      {!active ? (
        <button
          onClick={startCamera}
          className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors text-left w-full"
        >
          <span className="text-3xl">📸</span>
          <div>
            <p className="font-medium text-gray-900">Scanner un signe avec la camera</p>
            <p className="text-sm text-gray-500">Fonctionne avec toutes les couleurs et styles de dessin</p>
          </div>
        </button>
      ) : (
        <div>
          <div className="relative rounded-2xl overflow-hidden bg-black aspect-square mb-3">
            <video ref={videoRef} className="w-full h-full object-cover" muted playsInline />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 border-2 border-amber-400/70 rounded-2xl" />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={captureAndAnalyze}
              disabled={loading}
              className="flex-1 py-3 rounded-xl bg-violet-700 text-white font-medium text-sm hover:bg-violet-800 transition-colors disabled:opacity-40"
            >
              {loading ? 'Analyse en cours...' : 'Analyser ce signe'}
            </button>
            <button
              onClick={stopCamera}
              className="px-4 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50"
            >
              Annuler
            </button>
          </div>
        </div>
      )}

      {/* Upload image */}
      <label className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors cursor-pointer">
        <span className="text-3xl">🖼️</span>
        <div>
          <p className="font-medium text-gray-900">Identifier depuis une photo</p>
          <p className="text-sm text-gray-500">Photo de signe sur objet, papier, mur, toile...</p>
        </div>
        <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
      </label>

      {loading && (
        <div className="flex items-center gap-2 text-sm text-violet-600 px-2">
          <span className="w-4 h-4 border-2 border-violet-600 border-t-transparent rounded-full animate-spin" />
          Claude analyse le signe...
        </div>
      )}

      {preview && !loading && (
        <div className="rounded-xl overflow-hidden border border-gray-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview} alt="preview" className="w-full object-contain max-h-48" />
        </div>
      )}

      {error && (
        <p className="text-sm text-red-500 px-2">{error}</p>
      )}
    </div>
  )
}