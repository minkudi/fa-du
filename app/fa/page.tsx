import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Le système du Fâ — Patrimoine immatériel de l\'humanité',
  description: 'Présentation complète du projet FÂ DÜ : numérisation du patrimoine Vodun du Bénin, reconnaissance UNESCO, outils pédagogiques et culturels.',
}

export default function FaPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-amber-300 text-sm font-semibold tracking-widest uppercase mb-4">
            Patrimoine immatériel de l&apos;humanité
          </p>
          <h1 className="text-5xl font-bold mb-6">Le système du Fâ</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-4">
            Pratique ancestrale de géomancie du golfe du Bénin, inscrite au patrimoine
            immatériel de l&apos;UNESCO depuis 2008.
          </p>
          <p className="text-amber-300 text-sm">
            FÂ DÜ — Projet de numérisation et de valorisation culturelle
          </p>
        </div>
      </section>

      {/* UNESCO + Chiffres */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow text-center border-t-4 border-amber-900">
              <div className="text-5xl font-bold text-amber-900 mb-2">2008</div>
              <p className="text-sm text-gray-600 font-medium">Inscription UNESCO</p>
              <p className="text-xs text-gray-500 mt-1">Patrimoine immatériel de l&apos;humanité</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow text-center border-t-4 border-amber-700">
              <div className="text-5xl font-bold text-amber-900 mb-2">256</div>
              <p className="text-sm text-gray-600 font-medium">Signes du Fâ</p>
              <p className="text-xs text-gray-500 mt-1">Toutes les combinaisons de la vie</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow text-center border-t-4 border-amber-600">
              <div className="text-5xl font-bold text-amber-900 mb-2">16</div>
              <p className="text-sm text-gray-600 font-medium">Signes-mères</p>
              <p className="text-xs text-gray-500 mt-1">Dou-Médji, puissance maximale</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow text-center border-t-4 border-amber-500">
              <div className="text-5xl font-bold text-amber-900 mb-2">5</div>
              <p className="text-sm text-gray-600 font-medium">Pays concernés</p>
              <p className="text-xs text-gray-500 mt-1">Bénin, Togo, Nigeria, Ghana, Côte d&apos;Ivoire</p>
            </div>
          </div>

          {/* Citation UNESCO */}
          <div className="bg-amber-900 text-white rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <p className="text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">UNESCO — 2008</p>
            <p className="text-lg italic leading-relaxed text-amber-100">
              &ldquo;Le Fâ est un système de divination qui constitue l&apos;expression d&apos;une vision
              globale du monde, basée sur des valeurs culturelles et philosophiques transmises
              oralement depuis des générations.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que le Fâ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Qu&apos;est-ce que le Fâ ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Fâ est un système de divination pratiqué dans le golfe du Bénin depuis des
                siècles. Il constitue à la fois un outil spirituel, une philosophie de vie et
                un cadre moral pour les communautés Fon, Yoruba et leurs voisins.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Bokonon (devin) consulte le Fâ en manipulant des noix de palmier ou une
                chaîne sacrée (Akplê). Le résultat produit une configuration géomantique
                unique parmi les 256 signes possibles, chacun portant un ensemble de
                significations, d&apos;interdits, de sacrifices et de devises.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Transmis oralement de maître à disciple, ce savoir a longtemps été réservé
                aux initiés. FÂ DÜ en rend une partie accessible à tous, avec respect
                et rigueur.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { titre: 'Système géomantique', desc: 'Basé sur des combinaisons binaires, ancêtre des systèmes de pensée complexes' },
                { titre: 'Patrimoine vivant', desc: 'Pratiqué aujourd\'hui par des millions de personnes en Afrique de l\'Ouest' },
                { titre: 'Philosophie complète', desc: 'Chaque signe porte une vision du monde, des valeurs morales et un destin' },
                { titre: 'Transmission orale', desc: 'Savoir transmis sur plusieurs générations, aujourd\'hui en danger de fragmentation' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-amber-50 rounded-lg p-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 text-sm">{item.titre}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Le projet FÂ DÜ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 text-center">Le projet FÂ DÜ</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Une plateforme numérique au service de la valorisation du patrimoine immatériel
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '📖',
                titre: '256 signes documentés',
                desc: 'Chaque signe-mère et ses 15 combinaisons : interdits, sacrifices, devises, fétiches, feuilles liturgiques.',
                lien: '/signes',
                cta: 'Explorer les signes',
              },
              {
                icon: '🖨️',
                titre: 'Cartes imprimables',
                desc: 'Chaque signe génère une carte PDF A5 avec QR code — prête pour expo, livret pédagogique ou atelier.',
                lien: '/signes',
                cta: 'Voir un exemple',
              },
              {
                icon: '📷',
                titre: 'Scanner & identifier',
                desc: 'Sur le terrain : scannez un QR FÂ DÜ ou composez la séquence du signe pour l\'identifier instantanément.',
                lien: '/scan',
                cta: 'Essayer le scan',
              },
              {
                icon: '🗺️',
                titre: 'Carte des lieux sacrés',
                desc: 'Temples, forêts sacrées, marchés et sanctuaires Vodun géolocalisés au Bénin — chacun lié à un signe.',
                lien: '/explorer',
                cta: 'Voir la carte',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-amber-900 mb-2">{item.titre}</h3>
                <p className="text-gray-600 text-sm flex-1 mb-4">{item.desc}</p>
                <Link
                  href={item.lien}
                  className="text-sm font-semibold text-amber-700 hover:text-amber-900 transition"
                >
                  {item.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage culturel — expo, ateliers */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 text-center">
            Usages culturels et touristiques
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            FÂ DÜ est conçu pour s&apos;intégrer dans des contextes de médiation culturelle concrets
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏛️',
                titre: 'Expositions & musées',
                desc: 'Les cartes PDF avec QR code permettent de créer des panneaux d\'exposition interactifs. Le visiteur scanne, l\'app raconte le signe.',
              },
              {
                icon: '🎓',
                titre: 'Ateliers pédagogiques',
                desc: 'Livrets imprimables par signe, interface de composition de séquence, carte des lieux — une boîte à outils complète pour les enseignants.',
              },
              {
                icon: '🌍',
                titre: 'Tourisme culturel',
                desc: 'Sur les sites sacrés du Bénin, des QR codes FÂ DÜ font le lien entre le lieu physique et la plateforme numérique.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-amber-50 rounded-xl p-8 border-l-4 border-amber-600">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-amber-900 text-lg mb-3">{item.titre}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & positionnement */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Notre positionnement</h2>
          <p className="text-amber-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            FÂ DÜ n&apos;est pas un outil de consultation mystique. Nous ne remplaçons pas
            le travail des Bokonon. Nous ne faisons pas de prédictions.
          </p>
          <div className="bg-amber-800 rounded-xl p-8 max-w-2xl mx-auto">
            <p className="text-white text-lg font-medium leading-relaxed">
              Notre mission : <strong className="text-amber-300">rendre accessible, de manière claire
              et respectueuse, la connaissance symbolique des 256 signes du Fâ</strong> — pour
              les chercheurs, les diaspora, les institutions culturelles et les touristes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Commencer l&apos;exploration</h2>
          <p className="text-gray-600 mb-8">Accédez aux 256 signes, à la carte et aux outils de médiation culturelle</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signes" className="bg-amber-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition shadow-lg">
              Les 16 signes-mères
            </Link>
            <Link href="/explorer" className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg border-2 border-amber-900 hover:bg-amber-50 transition shadow-lg">
              Carte des lieux sacrés
            </Link>
            <Link href="/scan" className="bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition shadow-lg">
              Scanner un signe
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/" className="text-amber-300 hover:text-white text-sm">
            ← Retour à l&apos;accueil
          </Link>
          <p className="text-amber-200 mt-4">
            © 2026 FÂ DÜ — Valorisation du patrimoine immatériel du golfe du Bénin
          </p>
        </div>
      </footer>

    </main>
  )
}