// app/api/carte/CarteSigneFa.tsx
import { FaSign } from '@/data/faSigns'

export type CarteSignLike = FaSign & {
  elementCode?: 'feu' | 'terre' | 'eau' | 'air'
}

function getPaletteForSign(id: string, elementCode?: 'feu' | 'terre' | 'eau' | 'air') {
  const elementMap: Record<string, 'feu' | 'terre' | 'eau' | 'air'> = {
    'gbe-medji': 'feu',
    'abla-medji': 'feu',
    'aklan-medji': 'feu',
    'tula-medji': 'feu',
    'yekou-medji': 'terre',
    'di-medji': 'terre',
    'losso-medji': 'terre',
    'fu-medji': 'terre',
    'winlin-medji': 'eau',
    'trukpin-medji': 'eau',
    'lete-medji': 'eau',
    'woli-medji': 'air',
    'guda-medji': 'air',
    'sa-medji': 'air',
    'ka-medji': 'air',
    'tche-medji': 'air',
  }

  const palettes = {
    feu:   { backgroundColor: '#5c1a0a', chipColor: '#f2994a', label: '🔥 Feu' },
    terre: { backgroundColor: '#2e1a0e', chipColor: '#c9883a', label: '🌍 Terre' },
    eau:   { backgroundColor: '#0a2a3e', chipColor: '#36b8d4', label: '💧 Eau' },
    air:   { backgroundColor: '#1c1c2e', chipColor: '#9b8ec4', label: '💨 Air' },
  }

  const element = elementCode ?? elementMap[id] ?? 'air'
  return palettes[element]
}

// Une seule barre
function Barre({ marginRight }: { marginRight?: number }) {
  return (
    <div
      style={{
        display: 'flex',
        width: 18,
        height: 80,
        borderRadius: 6,
        backgroundColor: '#f5f0e8',
        marginRight: marginRight ?? 0, // ← marginRight au lieu de gap
      }}
    />
  )
}

// Une cellule = soit I (1 barre) soit II (2 barres séparées par marginRight)
function CelluleFa({ val }: { val: number }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
      }}
    >
      {val === 1 && <Barre />}
      {val === 2 && (
        <>
          <Barre marginRight={20} /> {/* ← espace forcé entre les 2 barres */}
          <Barre />
        </>
      )}
    </div>
  )
}

export function CarteSigneFa({ signe }: { signe: CarteSignLike }) {
  const estMasculin = signe.sexe === 'masculin'
  const col1 = signe.figureSymbolique.colonnes[0].slice(0, 4)
  const col2 = signe.figureSymbolique.colonnes[1].slice(0, 4)
  const motsCles = signe.motsCles ?? []
  const fetiches = signe.fetiches ?? []
  const palette = getPaletteForSign(signe.id, signe.elementCode)

  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 60,
        backgroundColor: palette.backgroundColor,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        color: '#f5f0e8',
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, opacity: 0.7, letterSpacing: 4 }}>
          FÂ DÜ
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 30,
              padding: '8px 20px',
              fontSize: 20,
              opacity: 0.9,
              marginRight: 10,
            }}
          >
            {palette.label}
          </div>
          <div
            style={{
              display: 'flex',
              backgroundColor: palette.chipColor,
              borderRadius: 30,
              padding: '8px 24px',
              fontSize: 22,
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            {estMasculin ? 'Masculin' : 'Féminin'}
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 28, opacity: 0.5 }}>
          #{signe.position}
        </div>
      </div>

      {/* FIGURE – 4 rangées × 2 colonnes */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        {col1.map((_, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: i < col1.length - 1 ? 24 : 0, // espace entre rangées
            }}
          >
            <CelluleFa val={col1[i]} />
            {/* Séparateur entre les 2 colonnes */}
            <div style={{ display: 'flex', width: 60 }} />
            <CelluleFa val={col2[i]} />
          </div>
        ))}
      </div>

      {/* NOM */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 'bold',
            letterSpacing: 4,
            textTransform: 'uppercase',
          }}
        >
          {signe.nomPrincipal}
        </div>
      </div>

      {/* MOTS CLÉS */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {motsCles.map((mot, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 20,
              padding: '6px 18px',
              fontSize: 20,
              marginRight: 10,
              marginBottom: 10,
            }}
          >
            {mot}
          </div>
        ))}
      </div>

      {/* FÉTICHES */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', fontSize: 18, opacity: 0.5, letterSpacing: 3, marginBottom: 8 }}>
          DIVINITÉS / FÉTICHES
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {fetiches.map((d, i) => (
            <div key={i} style={{ display: 'flex', fontSize: 18, opacity: 0.85, marginRight: 8 }}>
              {d}{i < fetiches.length - 1 ? ' ·' : ''}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', fontSize: 16, opacity: 0.3, letterSpacing: 4 }}>
        fa-du.vercel.app
      </div>
    </div>
  )
}
