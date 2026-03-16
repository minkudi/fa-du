'use client'

type Mark = 'I' | 'II'

type Props = {
  slug: string
  nom: string
  numero: number
  symbole: number[][]
  type: string
  element: string
  motsCles: string[]
}

const ELEMENT_COLORS: Record<string, string> = {
  Feu: '#e25822',
  Eau: '#1a6fa8',
  Air: '#4caf7d',
  Terre: '#8b6914',
}

export default function SigneCardPrint({ slug, nom, numero, symbole, type, element, motsCles }: Props) {
  const isFemelle = type === 'femelle'
  const accentColor = isFemelle ? '#7c3aed' : '#1d4ed8'
  const elemColor = ELEMENT_COLORS[element] ?? '#555'

  return (
    <div
      id="fadu-card-print"
      style={{
        position: 'fixed',
        left: '-9999px',
        top: 0,
        width: '794px',
        height: '559px',
        background: '#ffffff',
        fontFamily: 'Georgia, serif',
        display: 'flex',
        overflow: 'hidden',
        zIndex: -1,
      }}
    >
      {/* Bande couleur gauche */}
      <div style={{ width: '12px', background: accentColor, flexShrink: 0 }} />

      {/* Colonne symbole + QR */}
      <div style={{
        width: '210px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 20px',
        borderRight: '1px solid #e5e7eb',
        gap: '20px',
      }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#9ca3af', margin: 0, textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
          Signe n°{numero}
        </p>

{/* Symbole Fâ — 1 = trait plein, 2 = trait double */}
<div style={{ display: 'flex', gap: '14px' }}>
  {symbole.map((col, ci) => (
    <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {col.map((mark, mi) =>
        mark === 1 ? (
          <div key={mi} style={{ width: '9px', height: '30px', background: accentColor, borderRadius: '4px' }} />
        ) : (
          <div key={mi} style={{ display: 'flex', gap: '5px' }}>
            <div style={{ width: '9px', height: '30px', background: accentColor, borderRadius: '4px' }} />
            <div style={{ width: '9px', height: '30px', background: accentColor, borderRadius: '4px' }} />
          </div>
        )
      )}
    </div>
  ))}
</div>

        {/* QR code depuis l'API */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/api/qr/${slug}`}
          alt={`QR ${nom}`}
          width={120}
          height={120}
          style={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
          crossOrigin="anonymous"
        />
        <p style={{ fontSize: '9px', color: '#9ca3af', margin: 0, textAlign: 'center', fontFamily: 'sans-serif' }}>
          fa-du.vercel.app
        </p>
      </div>

      {/* Colonne principale */}
      <div style={{ flex: 1, padding: '44px 44px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
            <span style={{
              fontSize: '10px', fontFamily: 'sans-serif', letterSpacing: '0.1em',
              background: isFemelle ? '#ede9fe' : '#dbeafe',
              color: accentColor, padding: '3px 10px', borderRadius: '20px',
              textTransform: 'uppercase',
            }}>
              {type}
            </span>
            <span style={{
              fontSize: '10px', fontFamily: 'sans-serif', letterSpacing: '0.1em',
              background: '#f3f4f6', color: elemColor, padding: '3px 10px', borderRadius: '20px',
            }}>
              {element}
            </span>
          </div>

          <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#111827', margin: '0 0 8px', letterSpacing: '0.02em' }}>
            {nom}
          </h1>

          <div style={{ width: '52px', height: '3px', background: accentColor, borderRadius: '2px', marginBottom: '28px' }} />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
            {motsCles.map((m, i) => (
              <span key={i} style={{
                fontSize: '14px', fontFamily: 'sans-serif', fontStyle: 'italic',
                color: '#374151', background: '#f9fafb',
                padding: '6px 16px', borderRadius: '6px',
                border: '1px solid #e5e7eb',
              }}>
                {m}
              </span>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <p style={{ fontSize: '11px', fontFamily: 'sans-serif', color: '#9ca3af', margin: 0, maxWidth: '380px', lineHeight: 1.6 }}>
            FÂ DÜ · Patrimoine immatériel du golfe du Bénin<br />
            Scannez le QR pour explorer ce signe et ses combinaisons.
          </p>
          <p style={{ fontSize: '11px', fontFamily: 'sans-serif', color: '#d1d5db', margin: 0 }}>
            © 2026 FÂ DÜ
          </p>
        </div>
      </div>
    </div>
  )
}