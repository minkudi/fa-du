'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

interface Sanctuaire {
  id: string
  name: string
  subtitle: string
  country: string
  lat: number
  lng: number
  theme: string          // signe thématique — pas un vrai lien, juste ambiance
  color: string          // couleur accent du slide
  bg: string             // couleur de fond claire du slide
  border: string         // bordure subtile
  narrative: string[]
  poetic: string
  rituals: string[]
  heritage?: string
  colonnes: number[][]   // figure symbolique thématique
}

const SANCTUAIRES: Sanctuaire[] = [
  {
    id: 'ouidah',
    name: 'Ouidah',
    subtitle: 'La Porte des Esprits',
    country: 'Bénin',
    lat: 6.35, lng: 2.09,
    theme: 'GBÉ-MÊDJI',
    color: '#92400e',
    bg: '#fffbeb',
    border: '#fde68a',
    colonnes: [[1,1,1,1],[1,1,1,1]],
    narrative: [
      'Au bord de l\'Atlantique, là où des millions d\'âmes furent emportées, Ouidah reste debout comme un témoin immuable.',
      'La Route des Esclaves serpente entre les bananiers et les temples. Le Temple des Pythons garde le seuil entre les vivants et les ancêtres.',
      'Chaque 10 janvier, des milliers de fidèles venus du monde entier convergent vers cette cité sacrée pour la fête du Vodun.',
    ],
    poetic: 'Un portail entre deux mondes. Ce que l\'océan a emporté, les esprits l\'ont gardé.',
    rituals: ['Fête du Vodun — 10 janvier', 'Offrandes à Mami Wata', 'Veillée au Temple des Pythons'],
    heritage: 'Patrimoine immatériel de l\'humanité',
  },
  {
    id: 'abomey',
    name: 'Abomey',
    subtitle: 'Le Trône des Rois',
    country: 'Bénin',
    lat: 7.18, lng: 1.99,
    theme: 'WOLI-MÊDJI',
    color: '#6b21a8',
    bg: '#faf5ff',
    border: '#e9d5ff',
    colonnes: [[2,1,2,1],[1,2,1,2]],
    narrative: [
      'Dans les plaines du Bénin, douze rois successifs ont bâti un empire sur la puissance, la guerre et le sang.',
      'Les palais royaux d\'Abomey, classés UNESCO depuis 1985, renferment les trônes construits sur des crânes d\'ennemis vaincus — une architecture de victoire absolue.',
      'Les bas-reliefs en terre cuite racontent encore les conquêtes des rois Fon dans une langue d\'argile et d\'ocre que le temps n\'efface pas.',
    ],
    poetic: 'Les murs respirent encore. Chaque pierre est un ancêtre. Chaque couloir, un récit de puissance.',
    rituals: ['Culte des ancêtres royaux Nesuhwe', 'Cérémonies Yemoja', 'Divination Fâ royale'],
    heritage: 'UNESCO 1985',
  },
  {
    id: 'ile-ife',
    name: 'Ilé-Ifè',
    subtitle: 'Le Berceau de l\'Humanité',
    country: 'Nigeria',
    lat: 7.47, lng: 4.57,
    theme: 'LETE-MÊDJI',
    color: '#065f46',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    colonnes: [[1,2,1,2],[2,1,2,1]],
    narrative: [
      'Avant que le temps commence, il y avait Ilé-Ifè. La cosmologie Yoruba enseigne qu\'ici, les dieux ont tissé la terre depuis le ciel avec une chaîne dorée.',
      'Le Grove de l\'Oshun — forêt sacrée sur les rives de la rivière — abrite des sculptures centenaires et des offrandes millénaires dans un silence de cathédrale.',
      'C\'est depuis Ilé-Ifè que le système de divination Ifá, ancêtre direct du Fâ béninois, s\'est répandu sur tout le continent.',
    ],
    poetic: 'La chaîne dorée descendue du ciel pour former la terre — elle pend encore ici, invisible, ressentie par qui sait écouter.',
    rituals: ['Festival Olojo — naissance du monde', 'Divination Ifá dans le Grove sacré', 'Bains rituels à la rivière Oshun'],
    heritage: 'UNESCO 2005',
  },
  {
    id: 'allada',
    name: 'Allada',
    subtitle: 'La Source Originelle',
    country: 'Bénin',
    lat: 6.67, lng: 2.15,
    theme: 'KA-MÊDJI',
    color: '#14532d',
    bg: '#f0fdf4',
    border: '#86efac',
    colonnes: [[2,2,1,1],[1,1,2,2]],
    narrative: [
      'D\'Allada est parti un souffle. Ce souffle a traversé l\'Atlantique dans les cales des navires négriers et a fleuri en Haïti, au Brésil, à La Nouvelle-Orléans.',
      'Allada est considérée comme le berceau originel du Vodun. Le Dangbé — le python arc-en-ciel — y règne depuis des temps immémoriaux comme gardien du monde.',
      'Aujourd\'hui encore, des descendants de la diaspora africaine reviennent en pèlerinage à Allada pour retrouver leur source spirituelle.',
    ],
    poetic: 'D\'ici, le souffle sacré a traversé l\'océan. Le Vodun est immortel — Allada en est la preuve vivante.',
    rituals: ['Cérémonies Dangbé — python sacré', 'Pèlerinage des diasporas africaines', 'Mémorial de l\'Origine'],
  },
  {
    id: 'osogbo',
    name: 'Osogbo',
    subtitle: 'Le Jardin de l\'Oshun',
    country: 'Nigeria',
    lat: 7.77, lng: 4.55,
    theme: 'YEKU-MÊDJI',
    color: '#701a75',
    bg: '#fdf4ff',
    border: '#f0abfc',
    colonnes: [[2,2,2,2],[2,2,2,2]],
    narrative: [
      'Le Grove Sacré de l\'Oshun est un jardin forestier sur les rives d\'une rivière où, dit-on, le temps se courbe.',
      'Des sculptures géantes émergent entre les lianes — Oshun, déesse de l\'eau douce, de la fertilité et de l\'amour, veille sur chaque recoin de cette forêt habitée.',
      'L\'artiste autrichienne Susanne Wenger consacra cinquante ans de sa vie à restaurer et enrichir ce sanctuaire. Son œuvre se confond désormais avec le sacré.',
    ],
    poetic: 'Ici, la rivière parle encore. Les arbres se souviennent de l\'avant-humanité.',
    rituals: ['Festival Oshun — chaque août', 'Bains rituels dans la rivière sacrée', 'Procession des prêtresses Iyalorisha'],
    heritage: 'UNESCO 2005',
  },
  {
    id: 'natitingou',
    name: 'Natitingou',
    subtitle: 'La Terre des Tata Somba',
    country: 'Bénin',
    lat: 10.32, lng: 1.37,
    theme: 'OTURA-MÊDJI',
    color: '#7c2d12',
    bg: '#fff7ed',
    border: '#fed7aa',
    colonnes: [[1,1,2,2],[2,2,1,1]],
    narrative: [
      'Dans le nord du Bénin, les peuples Bétamaribé ont bâti des forteresses vivantes — les Tata Somba — qui poussent de la terre comme des châteaux organiques.',
      'Chaque tour est une prière, chaque grenier un ancêtre gardé à l\'intérieur. Les portes basses obligent à s\'incliner — l\'architecture enseigne l\'humilité avant même d\'entrer.',
      'Ces constructions millénaires, classées au Patrimoine Mondial UNESCO, sont encore habitées aujourd\'hui par des familles qui perpétuent les rites anciens.',
    ],
    poetic: 'L\'architecture comme cosmologie. Chaque tour pointe vers un ancêtre. Chaque seuil bas enseigne l\'humilité.',
    rituals: ['Initiation Kouya', 'Fêtes de récolte Bétamaribé', 'Rites de construction et de protection'],
    heritage: 'UNESCO 2004',
  },
]

function getMiniGlobePos(lat: number, lng: number) {
  return { x: ((lng + 180) / 360) * 100, y: ((90 - lat) / 180) * 100 }
}

function FaSignSVG({ colonnes, color }: { colonnes: number[][], color: string }) {
  return (
    <svg viewBox="0 0 80 120" className="w-full h-full" fill="none">
      {colonnes.map((col, ci) =>
        col.map((val, ri) => {
          const y = 12 + ri * 28
          const x = ci === 0 ? 8 : 44
          return val === 1 ? (
            <line key={`${ci}-${ri}`} x1={x} y1={y} x2={x + 28} y2={y}
              stroke={color} strokeWidth="3.5" strokeLinecap="round" />
          ) : (
            <g key={`${ci}-${ri}`}>
              <line x1={x} y1={y} x2={x + 11} y2={y} stroke={color} strokeWidth="3.5" strokeLinecap="round" />
              <line x1={x + 17} y1={y} x2={x + 28} y2={y} stroke={color} strokeWidth="3.5" strokeLinecap="round" />
            </g>
          )
        })
      )}
    </svg>
  )
}

export default function SanctuaireScroll() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [phase, setPhase] = useState<'entering' | 'visible' | 'leaving'>('visible')
  const isTransitioning = useRef(false)
  const touchStartY = useRef(0)

  const goTo = (idx: number) => {
    if (isTransitioning.current) return
    if (idx < 0 || idx >= SANCTUAIRES.length) return
    isTransitioning.current = true
    setPhase('leaving')
    setTimeout(() => {
      setActiveIdx(idx)
      setPhase('entering')
      setTimeout(() => {
        setPhase('visible')
        isTransitioning.current = false
      }, 80)
    }, 500)
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (e.deltaY > 30) goTo(activeIdx + 1)
      else if (e.deltaY < -30) goTo(activeIdx - 1)
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(activeIdx + 1)
      if (e.key === 'ArrowUp' || e.key === 'PageUp') goTo(activeIdx - 1)
    }
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKey)
    }
  }, [activeIdx])

  const handleTouchStart = (e: React.TouchEvent) => { touchStartY.current = e.touches[0].clientY }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dy = touchStartY.current - e.changedTouches[0].clientY
    if (dy > 40) goTo(activeIdx + 1)
    else if (dy < -40) goTo(activeIdx - 1)
  }

  const s = SANCTUAIRES[activeIdx]
  const dotPos = getMiniGlobePos(s.lat, s.lng)
  const visible = phase === 'visible'
  const T = 'transition-all duration-600 ease-in-out'
  const op = visible ? 'opacity-100' : 'opacity-0'
  const ty = phase === 'entering' ? 'translate-y-6' : phase === 'leaving' ? '-translate-y-6' : 'translate-y-0'
  const isLast = activeIdx === SANCTUAIRES.length - 1

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ background: s.bg, transition: 'background 0.8s ease' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Navbar />

      {/* Fond subtil — texture légère */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 50% at 80% 30%, ${s.color}08 0%, transparent 70%)` }} />

      {/* Layout principal */}
      <div className="absolute inset-0 pt-20 flex">

        {/* ── COLONNE GAUCHE : texte ── */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-8 overflow-hidden">

          {/* Badge pays + patrimoine */}
          <div className={`${T} ${op} ${ty} flex items-center gap-3 mb-5`}>
            <span className="text-xs tracking-[0.3em] font-semibold uppercase px-3 py-1 rounded-full"
              style={{ background: `${s.color}15`, color: s.color }}>
              {s.country}
            </span>
            {s.heritage && (
              <span className="text-[10px] tracking-widest text-amber-700/50 border border-amber-200 px-2 py-1 rounded-full">
                {s.heritage}
              </span>
            )}
          </div>

          {/* Titre principal */}
          <div className={`${T} ${op} ${ty} mb-1`} style={{ transitionDelay: '50ms' }}>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-none tracking-tight"
              style={{ color: s.color, fontFamily: '"Georgia", serif' }}>
              {s.name}
            </h1>
          </div>

          {/* Sous-titre */}
          <div className={`${T} ${op} ${ty} mb-8`} style={{ transitionDelay: '90ms' }}>
            <p className="text-sm tracking-[0.3em] uppercase font-medium"
              style={{ color: `${s.color}70` }}>
              {s.subtitle}
            </p>
          </div>

          {/* Séparateur animé */}
          <div className="mb-7 h-px overflow-hidden" style={{ background: `${s.border}` }}>
            <div className={`h-full transition-all duration-700`}
              style={{ width: visible ? '30%' : '0%', background: s.color, transitionDelay: '120ms' }} />
          </div>

          {/* Paragraphes narratifs */}
          <div className="space-y-3 max-w-xl mb-7">
            {s.narrative.map((para, i) => (
              <p key={i} className={`${T} text-sm lg:text-base leading-relaxed`}
                style={{
                  color: `${s.color}b0`,
                  transitionDelay: `${150 + i * 70}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(10px)',
                }}>
                {para}
              </p>
            ))}
          </div>

          {/* Citation poétique */}
          <div className={`${T} max-w-xl mb-7 pl-4`}
            style={{
              borderLeft: `3px solid ${s.color}40`,
              transitionDelay: '380ms',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(8px)',
            }}>
            <p className="text-sm italic leading-relaxed" style={{ color: `${s.color}80` }}>
              {s.poetic}
            </p>
          </div>

          {/* Rituels pills */}
          <div className={`${T} flex flex-wrap gap-2 max-w-xl`}
            style={{ transitionDelay: '440ms', opacity: visible ? 1 : 0 }}>
            {s.rituals.map((r, i) => (
              <span key={i} className="text-[10px] tracking-wide px-3 py-1.5 rounded-full font-medium"
                style={{ background: `${s.color}10`, color: s.color, border: `1px solid ${s.color}25` }}>
                {r}
              </span>
            ))}
          </div>

          {/* Footer intégré sur le dernier slide */}
          {isLast && (
            <div className={`${T} mt-8 pt-6`}
              style={{ borderTop: `1px solid ${s.border}`, transitionDelay: '520ms', opacity: visible ? 1 : 0 }}>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/signes" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70"
                  style={{ color: s.color }}>
                  Tous les signes →
                </Link>
                <Link href="/comprendre" className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
                  style={{ color: `${s.color}70` }}>
                  Comprendre le Fâ
                </Link>
                <Link href="/scan" className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
                  style={{ color: `${s.color}70` }}>
                  Identifier un signe
                </Link>
                <span className="text-xs ml-auto" style={{ color: `${s.color}40` }}>
                  Fâ-Du · {new Date().getFullYear()}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ── COLONNE DROITE : visuel ── */}
        <div className="hidden lg:flex w-[360px] xl:w-[440px] flex-col items-center justify-center px-8 py-12 gap-8">

          {/* Figure Fâ */}
          <div className={`${T} relative`}
            style={{ transitionDelay: '180ms', opacity: visible ? 1 : 0, transform: visible ? 'scale(1)' : 'scale(0.93)' }}>
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: `radial-gradient(circle, ${s.color}15 0%, transparent 65%)`, margin: '-40%' }} />
            <div className="w-24 h-36 xl:w-28 xl:h-44 relative">
              <FaSignSVG colonnes={s.colonnes} color={s.color} />
            </div>
            <div className="text-center mt-3">
              <span className="text-[9px] tracking-[0.5em] font-mono uppercase"
                style={{ color: `${s.color}60` }}>
                {s.theme}
              </span>
            </div>
          </div>

          {/* Coordonnées */}
          <div className={`${T}`}
            style={{ transitionDelay: '280ms', opacity: visible ? 0.6 : 0 }}>
            <div className="text-center space-y-1 px-5 py-3 rounded-xl border"
              style={{ borderColor: s.border, background: `${s.color}05` }}>
              <div className="text-[9px] font-mono tracking-widest" style={{ color: s.color }}>
                {s.lat.toFixed(4)}° N · {s.lng.toFixed(4)}° E
              </div>
              <div className="text-[9px] tracking-widest uppercase font-medium" style={{ color: `${s.color}60` }}>
                {s.country}
              </div>
            </div>
          </div>

          {/* Mini globe SVG */}
          <div className={`${T}`}
            style={{ transitionDelay: '330ms', opacity: visible ? 1 : 0 }}>
            <div className="w-28 h-28 xl:w-32 xl:h-32 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="46" fill="white" stroke={s.border} strokeWidth="1.5" />
                {/* Silhouette Afrique simplifiée */}
                <path d="M44 22 L48 18 L56 20 L60 26 L62 32 L60 40 L64 46 L66 56 L62 66 L56 74 L50 78 L44 76 L38 68 L34 58 L32 50 L34 42 L36 34 L38 28 Z"
                  fill={`${s.color}20`} stroke={`${s.color}50`} strokeWidth="0.8" />
                {/* Grille */}
                <line x1="4" y1="50" x2="96" y2="50" stroke={s.border} strokeWidth="0.8" />
                <line x1="50" y1="4" x2="50" y2="96" stroke={s.border} strokeWidth="0.8" />
                <ellipse cx="50" cy="50" rx="28" ry="46" fill="none" stroke={s.border} strokeWidth="0.8" />
                {/* Point du lieu */}
                <circle cx={4 + dotPos.x * 0.92} cy={4 + dotPos.y * 0.92} r="3.5" fill={s.color} />
                <circle cx={4 + dotPos.x * 0.92} cy={4 + dotPos.y * 0.92} r="7"
                  fill="none" stroke={s.color} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
              </svg>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-medium tracking-widest whitespace-nowrap"
                style={{ color: `${s.color}60` }}>
                {s.name.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── NAVIGATION GAUCHE : flèches explicites ── */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        <button
          onClick={() => goTo(activeIdx - 1)}
          disabled={activeIdx === 0}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all border"
          style={{
            borderColor: activeIdx === 0 ? `${s.color}15` : `${s.color}40`,
            color: activeIdx === 0 ? `${s.color}20` : s.color,
            background: activeIdx === 0 ? 'transparent' : `${s.color}08`,
            cursor: activeIdx === 0 ? 'not-allowed' : 'pointer',
          }}
          title="Sanctuaire précédent"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 11 L3 7 L7 3 M3 7 L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => goTo(activeIdx + 1)}
          disabled={isLast}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all border"
          style={{
            borderColor: isLast ? `${s.color}15` : `${s.color}40`,
            color: isLast ? `${s.color}20` : s.color,
            background: isLast ? 'transparent' : `${s.color}08`,
            cursor: isLast ? 'not-allowed' : 'pointer',
          }}
          title="Sanctuaire suivant"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 3 L11 7 L7 11 M11 7 L3 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── NAVIGATION DROITE : dots + noms ── */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20">
        {SANCTUAIRES.map((site, i) => (
          <button key={site.id} onClick={() => goTo(i)}
            className="group flex items-center gap-2.5 justify-end" title={site.name}>
            <span className="text-[9px] tracking-widest font-medium transition-all duration-300 hidden xl:block"
              style={{
                color: i === activeIdx ? site.color : 'transparent',
                maxWidth: i === activeIdx ? '80px' : '0px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}>
              {site.name}
            </span>
            <div className="rounded-full transition-all duration-300 border"
              style={{
                width: i === activeIdx ? '10px' : '6px',
                height: i === activeIdx ? '10px' : '6px',
                background: i === activeIdx ? site.color : 'transparent',
                borderColor: i === activeIdx ? site.color : `${s.color}40`,
              }} />
          </button>
        ))}
      </div>

      {/* ── BAS : compteur + hint swipe mobile ── */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">

        {/* Barre de progression */}
        <div className="flex gap-1 mb-1">
          {SANCTUAIRES.map((_, i) => (
            <div key={i} className="h-0.5 rounded-full transition-all duration-500"
              style={{
                width: i === activeIdx ? '24px' : '8px',
                background: i <= activeIdx ? s.color : `${s.color}25`,
              }} />
          ))}
        </div>

        <div className="text-[9px] font-mono tracking-widest" style={{ color: `${s.color}60` }}>
          <span style={{ color: s.color, fontWeight: 700 }}>{String(activeIdx + 1).padStart(2, '0')}</span>
          <span className="mx-1" style={{ color: `${s.color}30` }}>/</span>
          {String(SANCTUAIRES.length).padStart(2, '0')} — {s.name}
        </div>

        {/* Hint swipe mobile uniquement */}
        {!isLast && (
          <div className="flex items-center gap-1.5 lg:hidden mt-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1 L6 11 M2 7 L6 11 L10 7" stroke={s.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
            </svg>
            <span className="text-[8px] tracking-widest uppercase" style={{ color: `${s.color}40` }}>Balayez pour continuer</span>
          </div>
        )}
      </div>
    </div>
  )
}