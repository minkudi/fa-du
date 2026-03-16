'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

function fixLeafletIcons() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })
}

const LIEUX = [
  { nom: 'Temple Vodun de Ouidah', lat: 6.3576, lng: 2.0903, signe: 'gbe-medji', desc: 'Centre spirituel majeur, Route des Esclaves' },
  { nom: 'Foret Sacree de Kpasse', lat: 6.3620, lng: 2.0910, signe: 'yekou-medji', desc: 'Foret protegee classee, Ouidah' },
  { nom: 'Marche Dantokpa', lat: 6.3654, lng: 2.4183, signe: 'sa-medji', desc: 'Plus grand marche de Cotonou' },
  { nom: 'Palais Royal Abomey', lat: 7.1850, lng: 1.9889, signe: 'aklan-medji', desc: 'Patrimoine UNESCO, rois Fon' },
  { nom: 'Temple Python de Ouidah', lat: 6.3593, lng: 2.0854, signe: 'fu-medji', desc: 'Temple du serpent sacre Dan' },
  { nom: 'Musee Honme Porto-Novo', lat: 6.4969, lng: 2.6289, signe: 'guda-medji', desc: 'Musee ethnographique et Vodun' },
  { nom: 'Ganvie Village lacustre', lat: 6.4667, lng: 2.4167, signe: 'woli-medji', desc: 'Village sur le lac Nokoe' },
  { nom: 'Sanctuaire Fa de Bopa', lat: 6.5800, lng: 1.9900, signe: 'tula-medji', desc: 'Lieu de pratique du Fa, Mono' },
  { nom: 'Place de Amazone', lat: 6.4500, lng: 2.3500, signe: 'lete-medji', desc: 'Memoire des guerrieres Agojie' },
  { nom: 'Cotonou Benin', lat: 6.3703, lng: 2.3912, signe: 'trukpin-medji', desc: 'Capitale economique' },
]

export default function MapVodun() {
  useEffect(() => {
    fixLeafletIcons()
  }, [])

  return (
    <MapContainer
      center={[6.8, 2.2]}
      zoom={8}
      style={{ height: '520px', width: '100%', borderRadius: '16px', border: '1px solid #e5e7eb' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution="OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {LIEUX.map((lieu) => (
        <Marker key={lieu.nom} position={[lieu.lat, lieu.lng]}>
          <Popup minWidth={200}>
            <div>
              <p style={{ fontWeight: 700, fontSize: '14px', margin: '0 0 4px' }}>
                {lieu.nom}
              </p>
              <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 10px' }}>
                {lieu.desc}
              </p>
              <a
                href={'/signes/' + lieu.signe}
                style={{ fontSize: '12px', color: '#7c3aed', fontWeight: 600, textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                Voir le signe associe
              </a>
              <img
                src={'/api/qr/' + lieu.signe}
                alt="QR"
                width={90}
                height={90}
                style={{ borderRadius: '8px', border: '1px solid #e5e7eb', display: 'block' }}
              />
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}