import type { Metadata } from 'next'
import SanctuaireWrapper from '@/components/SanctuaireWrapper'

export const metadata: Metadata = {
  title: 'Sanctuaires — Voyages sacrés du Fâ | Fâ-Du',
  description: 'Traversez les lieux sacrés du Vodun en Afrique de l\'Ouest. Ouidah, Abomey, Ilé-Ifè, Osogbo — une expérience narrative immersive.',
}

export default function ExplorerPage() {
  return <SanctuaireWrapper />
}