import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Le système du Fâ — Patrimoine immatériel de l'humanité",
  description: 'Présentation complète du projet FÂ DÜ : numérisation du patrimoine Vodun du Bénin, reconnaissance UNESCO, outils pédagogiques et culturels.',
}

export default function FaPage() {
  return (
    <main className="min-h-screen bg-amber-50 text-amber-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-white/60 border-b border-amber-200 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{background:"radial-gradient(ellipse 70% 60% at 50% 80%, rgba(251,191,36,0.10) 0%, transparent 70%)"}}/>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-amber-500 text-[11px] tracking-[0.4em] uppercase font-semibold mb-4">
            Patrimoine immatériel de l&apos;humanité
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-5">Le système du Fâ</h1>
          <p className="text-amber-700 text-base max-w-xl mx-auto leading-relaxed">
            Pratique ancestrale de géomancie du golfe du Bénin, inscrite au patrimoine immatériel de l&apos;UNESCO depuis 2008.
          </p>
        </div>
      </section>

      {/* Chiffres */}
      <section className="py-14 px-4 border-b border-amber-200 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n:'2008', label:'Inscription UNESCO', sub:'Patrimoine immatériel' },
            { n:'256',  label:'Signes au total',   sub:'16 mères + 240 vikandos' },
            { n:'16',   label:'Signes-mères',       sub:'Dou-Médji' },
            { n:'5+',   label:'Pays concernés',    sub:'Golfe du Bénin' },
          ].map((item, i) => (
            <div key={i} className="group bg-amber-50 border border-amber-100 rounded-2xl p-5 hover:border-amber-300 transition-colors">
              <p className="text-3xl md:text-4xl font-black text-amber-700 mb-1">{item.n}</p>
              <p className="text-amber-900 font-semibold text-xs mb-0.5">{item.label}</p>
              <p className="text-amber-600/70 text-xs">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Citation UNESCO */}
      <section className="py-14 px-4 border-b border-amber-200 bg-amber-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-500 text-[11px] tracking-[0.35em] uppercase font-semibold mb-6">UNESCO — 2008</p>
          <blockquote className="text-lg md:text-xl font-light text-amber-900 leading-relaxed italic mb-4">
            &ldquo;Le Fâ est un système de divination qui constitue l&apos;expression d&apos;une vision
            globale du monde, basée sur des valeurs culturelles et philosophiques transmises
            oralement depuis des générations.&rdquo;
          </blockquote>
          <div className="w-10 h-px bg-amber-400 mx-auto"/>
        </div>
      </section>

      {/* Qu'est-ce que le Fâ */}
      <section className="py-14 px-4 border-b border-amber-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-500 text-[11px] tracking-[0.35em] uppercase font-semibold mb-3">Le système</p>
          <h2 className="text-2xl font-bold text-amber-900 mb-8">Qu&apos;est-ce que le Fâ ?</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-3 text-amber-700/80 text-sm leading-relaxed">
              <p>Le Fâ est un système de divination pratiqué dans le golfe du Bénin depuis des siècles. Il constitue à la fois un outil spirituel, une philosophie de vie et un cadre moral pour les communautés Fon, Yoruba et leurs voisins.</p>
              <p>Le Bokonon consulte le Fâ en manipulant des noix de palmier ou une chaîne sacrée. Le résultat produit une configuration géomantique unique parmi les 256 signes possibles, chacun portant un ensemble de significations, d&apos;interdits et de sacrifices.</p>
              <p>Transmis oralement de maître à disciple, ce savoir a longtemps été réservé aux initiés. FÂ DÜ en rend une partie accessible à tous, avec respect et rigueur.</p>
            </div>
            <div className="space-y-3">
              {[
                { titre:'Système géomantique', desc:'Basé sur des combinaisons binaires, ancêtre des systèmes de pensée complexes.' },
                { titre:'Patrimoine vivant',   desc:"Pratiqué aujourd'hui par des millions de personnes en Afrique de l'Ouest." },
                { titre:'Philosophie complète', desc:'Chaque signe porte une vision du monde, des valeurs morales et un destin.' },
                { titre:'Transmission orale',  desc:"Savoir transmis sur plusieurs générations, aujourd'hui en danger de fragmentation." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <div className="w-0.5 bg-amber-400 rounded-full flex-shrink-0"/>
                  <div>
                    <p className="text-amber-900 font-semibold text-xs mb-0.5">{item.titre}</p>
                    <p className="text-amber-700/65 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Le projet */}
      <section className="py-14 px-4 border-b border-amber-200 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-500 text-[11px] tracking-[0.35em] uppercase font-semibold mb-3">Plateforme numérique</p>
          <h2 className="text-2xl font-bold text-amber-900 mb-8">Le projet FÂ DÜ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { titre:'256 signes documentés', desc:'Interdits, sacrifices, devises, fétiches et feuilles liturgiques.', lien:'/signes', cta:'Explorer' },
              { titre:'Cartes imprimables',    desc:'Carte A5 PDF avec QR code par signe — pour expo, livret ou atelier.', lien:'/signes', cta:'Voir' },
              { titre:'Scanner & identifier', desc:"Scannez un QR ou photographiez un signe pour l'identifier.", lien:'/scan', cta:'Scanner' },
              { titre:'Carte des lieux sacrés', desc:'Temples et sanctuaires Vodun géolocalisés au Bénin.', lien:'/explorer', cta:'Carte' },
            ].map((f, i) => (
              <Link key={i} href={f.lien}
                className="group block bg-white border border-amber-200 hover:border-amber-500 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-amber-900 font-semibold text-sm mb-2 group-hover:text-amber-700 transition-colors">{f.titre}</h3>
                <p className="text-amber-600/65 text-xs leading-relaxed mb-4">{f.desc}</p>
                <span className="inline-flex items-center gap-1.5 bg-amber-700 text-white text-xs font-semibold px-4 py-2 rounded-full group-hover:bg-amber-600 transition-colors">
                  {f.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Usages */}
      <section className="py-14 px-4 border-b border-amber-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-900 mb-8">Usages culturels et touristiques</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { titre:'Expositions & musées',    desc:"Les cartes PDF avec QR code créent des panneaux d'exposition interactifs. Le visiteur scanne, l'app raconte le signe." },
              { titre:'Ateliers pédagogiques',   desc:"Livrets imprimables, interface de composition de séquence, carte des lieux — une boîte à outils pour les enseignants." },
              { titre:'Tourisme culturel',        desc:"Sur les sites sacrés du Bénin, des QR codes FÂ DÜ font le lien entre le lieu physique et la plateforme numérique." },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-amber-400 pl-5 py-1">
                <h3 className="text-amber-900 font-semibold text-sm mb-2">{item.titre}</h3>
                <p className="text-amber-700/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positionnement */}
      <section className="py-14 px-4 bg-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <svg width="100%" height="100%"><defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" fill="none" stroke="white" strokeWidth=".5"/></pattern></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-[11px] tracking-[0.35em] uppercase font-semibold mb-6">Notre positionnement</p>
          <blockquote className="text-xl font-light text-amber-50 leading-relaxed mb-6 italic">
            &ldquo;Rendre accessible, de manière claire et respectueuse, la connaissance symbolique des 256 signes du Fâ.&rdquo;
          </blockquote>
          <div className="w-10 h-px bg-amber-500 mx-auto mb-5"/>
          <p className="text-amber-300/70 text-sm">
            FÂ DÜ n&apos;est pas un outil de consultation mystique. Nous ne remplaçons pas les Bokonon. Nous documentons, éduquons, valorisons.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-amber-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-amber-900 mb-3">Commencer l&apos;exploration</h2>
          <p className="text-amber-700/60 mb-8 text-sm">Accédez aux 256 signes, à la carte et aux outils de médiation culturelle.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/signes" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-7 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
              Les 16 signes-mères →
            </Link>
            <Link href="/explorer" className="inline-flex items-center gap-2 bg-white border border-amber-300 hover:border-amber-500 text-amber-800 px-7 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5">
              Carte des lieux sacrés
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
