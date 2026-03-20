'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface SacredSite {
  id: string
  name: string
  nameFa: string
  lat: number
  lng: number
  country: string
  sign: string
  signId: string
  description: string
  poetic: string
  rituals: string[]
  color: string
}

interface SitePosition {
  site: SacredSite
  sx: number
  sy: number
  visible: boolean
  depth: number
}

interface GlobeCanvas extends HTMLCanvasElement {
  _sitePositions?: SitePosition[]
}

const SACRED_SITES: SacredSite[] = [
  {
    id: 'ouidah',
    name: 'Ouidah',
    nameFa: 'Porta Degli Schiavi',
    lat: 6.3536, lng: 2.0853,
    country: 'Bénin',
    sign: 'GBÉ-MÊDJI',
    signId: 'gbe-medji',
    description: 'Capitale mondiale du Vodun, Ouidah abrite la Route des Esclaves et le Temple des Pythons. Chaque année, le 10 janvier, des milliers de fidèles convergent vers cette cité sacrée.',
    poetic: 'Là où la terre rencontre l\'océan, les esprits dansent entre deux mondes. Ouidah n\'est pas une ville — c\'est un portail.',
    rituals: ['Fête du Vodun — 10 janvier', 'Cérémonie aux pythons sacrés', 'Offrandes à Mami Wata'],
    color: '#f59e0b',
  },
  {
    id: 'abomey',
    name: 'Abomey',
    nameFa: 'Trône de Feu',
    lat: 7.1849, lng: 1.9882,
    country: 'Bénin',
    sign: 'WOLI-MÊDJI',
    signId: 'woli-medji',
    description: 'Ancienne capitale du Royaume du Dahomey. Les palais royaux, classés UNESCO, renferment les trônes des rois construits sur des crânes d\'ennemis vaincus.',
    poetic: 'Les murs de terre d\'Abomey respirent encore. Chaque pierre est un ancêtre, chaque couloir un récit de puissance et de sacrifice.',
    rituals: ['Culte des ancêtres royaux', 'Cérémonies Yemoja', 'Divination Fâ royale'],
    color: '#c084fc',
  },
  {
    id: 'ile-ife',
    name: 'Ilé-Ifè',
    nameFa: 'Berceau du Monde',
    lat: 7.4667, lng: 4.5667,
    country: 'Nigeria',
    sign: 'LETE-MÊDJI',
    signId: 'lete-medji',
    description: 'Ville sacrée des Yoruba, considérée comme le point de création de l\'humanité selon la cosmologie Ifá. Le Grove de l\'Oshun est classé UNESCO depuis 2005.',
    poetic: 'Avant que le temps commence, il y avait Ilé-Ifè. La chaîne dorée descendue du ciel pour former la terre — elle pend encore ici, invisible, ressentie.',
    rituals: ['Festival Olojo — naissance du monde', 'Divination Ifá dans le Grove sacré', 'Offrandes à Obatala'],
    color: '#34d399',
  },
  {
    id: 'lome',
    name: 'Lomé',
    nameFa: 'Marché des Esprits',
    lat: 6.1375, lng: 1.2123,
    country: 'Togo',
    sign: 'FU-MÊDJI',
    signId: 'fu-medji',
    description: 'Le Marché des Féticheurs de Lomé est le plus grand du monde. Des milliers de parties animales, plantes et symboles y sont vendus pour la pratique Vodun.',
    poetic: 'Dans les allées du Marché des Féticheurs, l\'invisible se vend au poids. Chaque crâne est une prière, chaque poudre un chemin vers les dieux.',
    rituals: ['Commerce rituel des fétiches', 'Préparation des gris-gris', 'Consultation des devins'],
    color: '#fb7185',
  },
  {
    id: 'cotonou',
    name: 'Cotonou',
    nameFa: 'Bouche de la Lagune',
    lat: 6.3703, lng: 2.3912,
    country: 'Bénin',
    sign: 'AKLAN-MÊDJI',
    signId: 'aklan-medji',
    description: 'Entre l\'Océan Atlantique et la lagune de Cotonou, la ville moderne coexiste avec des pratiques Vodun millénaires.',
    poetic: 'Cotonou est une femme qui tient à la fois le moderne et l\'ancestral dans chaque main, sans jamais lâcher l\'un pour l\'autre.',
    rituals: ['Fêtes de la lagune', 'Cérémonies Zangbeto', 'Rites de passage Egungun'],
    color: '#38bdf8',
  },
  {
    id: 'ketu',
    name: 'Kétu',
    nameFa: 'Ville Mère',
    lat: 7.3667, lng: 2.6000,
    country: 'Bénin',
    sign: 'SA-MÊDJI',
    signId: 'sa-medji',
    description: 'Kétu, ancienne cité-état Yoruba au Bénin, est une ville sacrée source des traditions Egungun et des masques vivants.',
    poetic: 'Les masques de Kétu ne sont pas portés par des hommes — ce sont les ancêtres eux-mêmes qui revêtent le tissu du monde visible pour danser parmi nous.',
    rituals: ['Festival Egungun', 'Masques sacrés des ancêtres', 'Divination Fâ Yoruba'],
    color: '#a78bfa',
  },
  {
    id: 'porto-novo',
    name: 'Porto-Novo',
    nameFa: 'Cité Royale',
    lat: 6.4969, lng: 2.6289,
    country: 'Bénin',
    sign: 'GUDA-MÊDJI',
    signId: 'guda-medji',
    description: 'Capitale officielle du Bénin et siège du royaume Gun-Gbe, Porto-Novo mêle architecture coloniale et cérémonies Vodun.',
    poetic: 'Porto-Novo garde ses secrets dans l\'ombre de ses maisons coloniales. La nuit, les tambours rappellent que les rois ne sont jamais vraiment partis.',
    rituals: ['Culte royal Gun-Gbe', 'Cérémonies Oro', 'Fêtes de la royauté'],
    color: '#fbbf24',
  },
  {
    id: 'allada',
    name: 'Allada',
    nameFa: 'Source du Vodun',
    lat: 6.6699, lng: 2.1509,
    country: 'Bénin',
    sign: 'KA-MÊDJI',
    signId: 'ka-medji',
    description: 'Allada est considérée comme le berceau du Vodun. C\'est depuis ce royaume que les dieux et pratiques se sont répandus vers Haïti, le Brésil et les Amériques.',
    poetic: 'D\'Allada est parti un souffle. Ce souffle a traversé l\'océan dans les cales des navires négriers et a fleuri en Haïti, en Bahia, à La Nouvelle-Orléans.',
    rituals: ['Mémorial de l\'Origine', 'Cérémonies Dangbé', 'Pèlerinage des diasporas'],
    color: '#4ade80',
  },
  {
    id: 'oshogbo',
    name: 'Osogbo',
    nameFa: 'Jardin de l\'Oshun',
    lat: 7.7719, lng: 4.5547,
    country: 'Nigeria',
    sign: 'YEKU-MÊDJI',
    signId: 'yeku-medji',
    description: 'Le Grove Sacré de l\'Oshun est classé Patrimoine Mondial UNESCO depuis 2005. Ce jardin forestier sur les rives de la rivière Oshun est habité par la déesse de l\'eau douce.',
    poetic: 'Le Grove de l\'Oshun est un endroit où le temps se courbe. Les arbres sont si anciens qu\'ils se souviennent de l\'avant-humanité.',
    rituals: ['Festival Oshun — chaque août', 'Bains rituels sacrés', 'Offrandes à la rivière'],
    color: '#f0abfc',
  },
  {
    id: 'natitingou',
    name: 'Natitingou',
    nameFa: 'Terre des Tata',
    lat: 10.3167, lng: 1.3667,
    country: 'Bénin',
    sign: 'OTURA-MÊDJI',
    signId: 'otura-medji',
    description: 'Dans le nord du Bénin, les Tata Somba — fortifications en banco des peuples Bétamaribé — témoignent d\'une architecture vivante millénaire classée UNESCO.',
    poetic: 'Les Tata Somba poussent de la terre comme des châteaux vivants. Chaque tour est une prière, chaque entrée basse une invitation à l\'humilité.',
    rituals: ['Initiation Kouya', 'Fêtes de récolte', 'Rites de construction sacrée'],
    color: '#fdba74',
  },
]

function latLngToVector3(lat: number, lng: number, radius: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return [
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ]
}

export default function GlobeExplorer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)
  const globeRotationRef = useRef({ y: 0, autoRotate: true, targetY: 0, isDragging: false, lastX: 0, velocity: 0 })
  const [selectedSite, setSelectedSite] = useState<SacredSite | null>(null)
  const [hoveredSite, setHoveredSite] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState<'description' | 'poetic' | 'rituals'>('poetic')
  const particlesRef = useRef<Array<{ x: number; y: number; size: number; opacity: number; speed: number; drift: number }>>([])

  useEffect(() => {
    particlesRef.current = Array.from({ length: 200 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.0001 + 0.00003,
      drift: (Math.random() - 0.5) * 0.00005,
    }))
    setTimeout(() => setIsLoaded(true), 300)
  }, [])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = canvas.width / window.devicePixelRatio
    const H = canvas.height / window.devicePixelRatio
    ctx.save()
    ctx.scale(1, 1)

    const cx = W * 0.42
    const cy = H * 0.5
    const RADIUS = Math.min(W, H) * 0.32

    ctx.clearRect(0, 0, W, H)

    const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.8)
    bg.addColorStop(0, '#0a0a1a')
    bg.addColorStop(0.5, '#06061a')
    bg.addColorStop(1, '#020208')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, W, H)

    particlesRef.current.forEach(p => {
      p.x += p.drift
      p.y += p.speed
      if (p.y > 1) p.y = 0
      if (p.x < 0) p.x = 1
      if (p.x > 1) p.x = 0
      ctx.beginPath()
      ctx.arc(p.x * W, p.y * H, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 240, 200, ${p.opacity})`
      ctx.fill()
    })

    const rot = globeRotationRef.current.y

    const atmoGrad = ctx.createRadialGradient(cx, cy, RADIUS * 0.85, cx, cy, RADIUS * 1.18)
    atmoGrad.addColorStop(0, 'rgba(251, 191, 36, 0)')
    atmoGrad.addColorStop(0.6, 'rgba(251, 191, 36, 0.04)')
    atmoGrad.addColorStop(1, 'rgba(251, 191, 36, 0.12)')
    ctx.beginPath()
    ctx.arc(cx, cy, RADIUS * 1.18, 0, Math.PI * 2)
    ctx.fillStyle = atmoGrad
    ctx.fill()

    const globeGrad = ctx.createRadialGradient(cx - RADIUS * 0.3, cy - RADIUS * 0.3, 0, cx, cy, RADIUS)
    globeGrad.addColorStop(0, '#1a2a4a')
    globeGrad.addColorStop(0.4, '#0e1a35')
    globeGrad.addColorStop(0.8, '#080e22')
    globeGrad.addColorStop(1, '#040810')
    ctx.beginPath()
    ctx.arc(cx, cy, RADIUS, 0, Math.PI * 2)
    ctx.fillStyle = globeGrad
    ctx.fill()

    ctx.save()
    ctx.beginPath()
    ctx.arc(cx, cy, RADIUS, 0, Math.PI * 2)
    ctx.clip()

    for (let lng = -180; lng < 180; lng += 30) {
      const pts: [number, number][] = []
      for (let lat = -90; lat <= 90; lat += 5) {
        const [x3, y3, z3] = latLngToVector3(lat, lng + (rot * 180 / Math.PI), 1)
        if (z3 > -0.2) pts.push([cx + x3 * RADIUS, cy - y3 * RADIUS])
      }
      if (pts.length > 1) {
        ctx.beginPath()
        ctx.moveTo(pts[0][0], pts[0][1])
        for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1])
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.06)'
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }

    for (let lat = -60; lat <= 60; lat += 30) {
      const pts: [number, number][] = []
      for (let lng2 = -180; lng2 <= 180; lng2 += 5) {
        const [x3, y3, z3] = latLngToVector3(lat, lng2 + (rot * 180 / Math.PI), 1)
        if (z3 > -0.2) pts.push([cx + x3 * RADIUS, cy - y3 * RADIUS])
      }
      if (pts.length > 1) {
        ctx.beginPath()
        ctx.moveTo(pts[0][0], pts[0][1])
        for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1])
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.05)'
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }
    ctx.restore()

    const rim = ctx.createRadialGradient(cx - RADIUS * 0.5, cy - RADIUS * 0.5, RADIUS * 0.3, cx, cy, RADIUS)
    rim.addColorStop(0, 'rgba(255, 240, 180, 0.05)')
    rim.addColorStop(0.6, 'rgba(255, 240, 180, 0)')
    rim.addColorStop(0.85, 'rgba(251, 191, 36, 0.04)')
    rim.addColorStop(1, 'rgba(251, 191, 36, 0.15)')
    ctx.beginPath()
    ctx.arc(cx, cy, RADIUS, 0, Math.PI * 2)
    ctx.fillStyle = rim
    ctx.fill()

    const sitePositions: SitePosition[] = []
    SACRED_SITES.forEach(site => {
      const [x3, y3, z3] = latLngToVector3(site.lat, site.lng + (rot * 180 / Math.PI), 1)
      const visible = z3 > 0.0
      sitePositions.push({ site, sx: cx + x3 * RADIUS, sy: cy - y3 * RADIUS, visible, depth: z3 })
    })

    for (let i = 0; i < sitePositions.length; i++) {
      for (let j = i + 1; j < sitePositions.length; j++) {
        const a = sitePositions[i]
        const b = sitePositions[j]
        if (!a.visible || !b.visible) continue
        const dist = Math.hypot(a.sx - b.sx, a.sy - b.sy)
        if (dist < RADIUS * 0.7) {
          const alpha = (1 - dist / (RADIUS * 0.7)) * 0.25 * Math.min(a.depth, b.depth)
          ctx.beginPath()
          ctx.moveTo(a.sx, a.sy)
          ctx.lineTo(b.sx, b.sy)
          const lineGrad = ctx.createLinearGradient(a.sx, a.sy, b.sx, b.sy)
          lineGrad.addColorStop(0, `rgba(251, 191, 36, ${alpha})`)
          lineGrad.addColorStop(0.5, `rgba(255, 220, 100, ${alpha * 1.5})`)
          lineGrad.addColorStop(1, `rgba(251, 191, 36, ${alpha})`)
          ctx.strokeStyle = lineGrad
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    }

    const time = Date.now() / 1000
    sitePositions.forEach(({ site, sx, sy, visible, depth }) => {
      if (!visible) return
      const isSelected = selectedSite?.id === site.id
      const isHovered = hoveredSite === site.id
      const pulse = Math.sin(time * 1.5 + site.lat) * 0.5 + 0.5
      const baseAlpha = 0.5 + depth * 0.5
      const dotR = isSelected ? 7 : isHovered ? 6 : 4

      if (isSelected || isHovered) {
        const pulseR = dotR + 8 + pulse * 6
        const glow = ctx.createRadialGradient(sx, sy, dotR, sx, sy, pulseR)
        glow.addColorStop(0, `${site.color}55`)
        glow.addColorStop(1, `${site.color}00`)
        ctx.beginPath()
        ctx.arc(sx, sy, pulseR, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()
      }

      const aura = ctx.createRadialGradient(sx, sy, 0, sx, sy, dotR + 4 + pulse * 2)
      aura.addColorStop(0, `${site.color}${Math.round(baseAlpha * 80).toString(16).padStart(2, '0')}`)
      aura.addColorStop(1, `${site.color}00`)
      ctx.beginPath()
      ctx.arc(sx, sy, dotR + 4 + pulse * 2, 0, Math.PI * 2)
      ctx.fillStyle = aura
      ctx.fill()

      ctx.beginPath()
      ctx.arc(sx, sy, dotR, 0, Math.PI * 2)
      ctx.fillStyle = isSelected || isHovered ? site.color : `${site.color}${Math.round(baseAlpha * 230).toString(16).padStart(2, '0')}`
      ctx.fill()
      ctx.strokeStyle = `rgba(255,255,255,${baseAlpha * 0.7})`
      ctx.lineWidth = 1
      ctx.stroke()

      if (depth > 0.2 || isSelected || isHovered) {
        const labelAlpha = Math.max(0, (depth - 0.2) / 0.8)
        ctx.font = isSelected ? 'bold 12px "Courier New", monospace' : '10px "Courier New", monospace'
        ctx.fillStyle = `rgba(255, 240, 200, ${isSelected || isHovered ? 0.95 : labelAlpha * 0.8})`
        ctx.fillText(site.name.toUpperCase(), sx + dotR + 5, sy + 4)
        if (isSelected || isHovered) {
          ctx.font = '8px "Courier New", monospace'
          ctx.fillStyle = `rgba(251, 191, 36, 0.7)`
          ctx.fillText(site.sign, sx + dotR + 5, sy + 15)
        }
      }
    })

    ;(canvas as GlobeCanvas)._sitePositions = sitePositions
    ctx.restore()
  }, [selectedSite, hoveredSite])

  useEffect(() => {
    const rot = globeRotationRef.current
    const animate = () => {
      if (rot.autoRotate && !rot.isDragging) {
        rot.y += 0.002
        rot.targetY = rot.y
      } else if (!rot.isDragging) {
        rot.velocity *= 0.95
        rot.y += rot.velocity
        if (Math.abs(rot.velocity) < 0.0001) rot.autoRotate = true
      }
      draw()
      animFrameRef.current = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [draw])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      const dpr = window.devicePixelRatio
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      const ctx = canvas.getContext('2d')
      if (ctx) ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  const getHitSite = (canvas: HTMLCanvasElement, clientX: number, clientY: number): SacredSite | null => {
    const rect = canvas.getBoundingClientRect()
    const mx = clientX - rect.left
    const my = clientY - rect.top
    const positions = (canvas as GlobeCanvas)._sitePositions
    if (!positions) return null
    for (const p of positions) {
      if (!p.visible) continue
      if (Math.hypot(mx - p.sx, my - p.sy) < 16) return p.site
    }
    return null
  }

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rot = globeRotationRef.current
    if (rot.isDragging) {
      const dx = e.clientX - rot.lastX
      rot.velocity = dx * 0.003
      rot.y += dx * 0.003
      rot.lastX = e.clientX
      rot.autoRotate = false
      return
    }
    const hit = getHitSite(e.currentTarget, e.clientX, e.clientY)
    setHoveredSite(hit?.id ?? null)
    e.currentTarget.style.cursor = hit ? 'pointer' : 'grab'
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    globeRotationRef.current.isDragging = true
    globeRotationRef.current.lastX = e.clientX
    globeRotationRef.current.autoRotate = false
    e.currentTarget.style.cursor = 'grabbing'
  }, [])

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rot = globeRotationRef.current
    if (!rot.isDragging) return
    rot.isDragging = false
    e.currentTarget.style.cursor = 'grab'
    if (Math.abs(rot.velocity) < 0.003) {
      const hit = getHitSite(e.currentTarget, e.clientX, e.clientY)
      if (hit) { setSelectedSite(hit); setActiveTab('poetic') }
    }
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    globeRotationRef.current.isDragging = true
    globeRotationRef.current.lastX = e.touches[0].clientX
    globeRotationRef.current.autoRotate = false
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    const rot = globeRotationRef.current
    const dx = e.touches[0].clientX - rot.lastX
    rot.velocity = dx * 0.003
    rot.y += dx * 0.003
    rot.lastX = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(() => {
    globeRotationRef.current.isDragging = false
  }, [])

  return (
    <div className="min-h-screen bg-[#030310] text-amber-100 font-mono overflow-hidden">
      <Navbar />

      <div className={`fixed inset-0 z-50 bg-[#030310] flex items-center justify-center transition-opacity duration-1000 pointer-events-none ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-center">
          <div className="text-amber-400 text-2xl tracking-[0.5em] mb-3 animate-pulse">FÂ DÜ</div>
          <div className="text-amber-600/60 text-xs tracking-widest">CHARGEMENT DU COSMOS...</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-screen pt-16">

        {/* Globe */}
        <div className="relative flex-1 min-h-[60vw] lg:min-h-0">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ cursor: 'grab' }}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <div className="text-amber-400/40 text-[10px] tracking-[0.4em] uppercase">
              {hoveredSite ? SACRED_SITES.find(s => s.id === hoveredSite)?.name ?? 'Glissez pour explorer' : 'Glissez pour explorer'}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 justify-center pointer-events-none">
            {SACRED_SITES.map(site => (
              <button
                key={site.id}
                className="pointer-events-auto text-[9px] tracking-widest px-2 py-1 rounded border transition-all duration-200"
                style={{
                  borderColor: selectedSite?.id === site.id ? site.color : 'rgba(251,191,36,0.2)',
                  color: selectedSite?.id === site.id ? site.color : 'rgba(251,191,36,0.4)',
                  background: selectedSite?.id === site.id ? `${site.color}11` : 'transparent',
                }}
                onClick={() => { setSelectedSite(site); setActiveTab('poetic') }}
              >
                {site.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <div className="w-full lg:w-[420px] flex flex-col border-l border-amber-900/30 bg-gradient-to-b from-[#080818] to-[#050510]">
          {!selectedSite ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full border border-amber-700/30 flex items-center justify-center mb-6">
                <div className="w-8 h-8 rounded-full border border-amber-500/50 animate-pulse" />
              </div>
              <h1 className="text-2xl font-bold text-amber-300 tracking-widest mb-3">EXPLORER</h1>
              <div className="w-12 h-px bg-amber-700/40 mx-auto mb-4" />
              <p className="text-amber-600/60 text-xs leading-relaxed tracking-wide max-w-xs">
                Les lieux sacrés du Fâ forment une constellation vivante sur la carte de l&apos;Afrique de l&apos;Ouest. Cliquez sur une étoile pour voyager.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-xs">
                {[{ n: '10', l: 'Sanctuaires' }, { n: '4', l: 'Pays' }, { n: '16', l: 'Signes-Mères' }, { n: '∞', l: 'Histoires' }].map(stat => (
                  <div key={stat.l} className="border border-amber-900/30 rounded p-3 text-center">
                    <div className="text-amber-400 text-xl font-bold">{stat.n}</div>
                    <div className="text-amber-700/60 text-[9px] tracking-widest mt-1">{stat.l.toUpperCase()}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="p-6 border-b border-amber-900/20" style={{ borderLeftColor: selectedSite.color, borderLeftWidth: 3 }}>
                <button onClick={() => setSelectedSite(null)} className="text-[9px] tracking-widest text-amber-700/50 hover:text-amber-400 mb-4 transition-colors flex items-center gap-2">
                  ← FERMER
                </button>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[9px] tracking-[0.4em] text-amber-700/50 mb-1">{selectedSite.country.toUpperCase()}</div>
                    <h2 className="text-2xl font-bold tracking-wider" style={{ color: selectedSite.color }}>{selectedSite.name.toUpperCase()}</h2>
                    <div className="text-amber-600/50 text-xs tracking-widest mt-0.5 italic">{selectedSite.nameFa}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[8px] tracking-widest text-amber-700/40 mb-1">SIGNE</div>
                    <div className="text-[10px] font-bold text-amber-400 tracking-wider">{selectedSite.sign}</div>
                  </div>
                </div>
              </div>
              <div className="flex border-b border-amber-900/20">
                {(['poetic', 'description', 'rituals'] as const).map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)} className="flex-1 py-3 text-[9px] tracking-widest transition-all"
                    style={{ color: activeTab === tab ? selectedSite.color : 'rgba(217,119,6,0.3)', borderBottom: activeTab === tab ? `1px solid ${selectedSite.color}` : '1px solid transparent' }}>
                    {tab === 'poetic' ? 'ÂMES' : tab === 'description' ? 'HISTOIRE' : 'RITUELS'}
                  </button>
                ))}
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                {activeTab === 'poetic' && (
                  <div className="space-y-4">
                    <div className="text-[8px] tracking-[0.5em] text-amber-700/40 mb-3">— VOIX DU LIEU —</div>
                    <blockquote className="text-amber-200/80 text-sm leading-relaxed italic border-l-2 pl-4" style={{ borderColor: selectedSite.color }}>
                      {selectedSite.poetic}
                    </blockquote>
                    <div className="mt-8 flex gap-3 items-center">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: selectedSite.color }} />
                      <span className="text-[9px] tracking-widest text-amber-700/40">{selectedSite.lat.toFixed(4)}°N — {selectedSite.lng.toFixed(4)}°E</span>
                    </div>
                  </div>
                )}
                {activeTab === 'description' && (
                  <div>
                    <div className="text-[8px] tracking-[0.5em] text-amber-700/40 mb-4">— MÉMOIRE —</div>
                    <p className="text-amber-300/70 text-sm leading-relaxed">{selectedSite.description}</p>
                  </div>
                )}
                {activeTab === 'rituals' && (
                  <div>
                    <div className="text-[8px] tracking-[0.5em] text-amber-700/40 mb-4">— PRATIQUES SACRÉES —</div>
                    <ul className="space-y-4">
                      {selectedSite.rituals.map((r, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-xs mt-0.5" style={{ color: selectedSite.color }}>◈</span>
                          <span className="text-amber-300/70 text-sm leading-relaxed">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="p-5 border-t border-amber-900/20">
                <a href={`/signes/${selectedSite.signId}`} className="block w-full py-3 text-center text-[10px] tracking-[0.4em] rounded border transition-all hover:opacity-80"
                  style={{ borderColor: selectedSite.color, color: selectedSite.color, background: `${selectedSite.color}11` }}>
                  EXPLORER {selectedSite.sign} →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}