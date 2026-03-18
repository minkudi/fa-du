import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 text-amber-900 overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Cercles décoratifs */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div className="w-[600px] h-[600px] rounded-full border border-amber-300/40 absolute" />
          <div className="w-[400px] h-[400px] rounded-full border border-amber-400/40 absolute" />
          <div className="w-[200px] h-[200px] rounded-full border border-amber-500/40 absolute animate-float" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="animate-fade-up-delay-1 text-amber-600 text-xs tracking-[0.4em] uppercase mb-6 font-light">
            Patrimoine immatériel de l&apos;humanité — UNESCO 2008
          </p>
          <h1 className="animate-fade-up-delay-2 text-7xl md:text-9xl font-bold tracking-tight mb-6 shimmer-text">
            FÂ DÜ
          </h1>
          <p className="animate-fade-up-delay-3 text-amber-800/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto font-light">
            Le système de divination ancestral du golfe du Bénin.
            256 signes. Des millénaires de sagesse.
          </p>
          <div className="animate-fade-up-delay-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/signes"
              className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-amber-700/30"
            >
              Explorer les 16 signes
            </Link>
            <Link
              href="/scan"
              className="border border-amber-400 hover:border-amber-600 text-amber-800 hover:text-amber-900 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 bg-white/50 hover:bg-white"
            >
              Scanner un signe
            </Link>
            <Link
              href="/fa"
              className="border border-amber-400 hover:border-amber-600 text-amber-800 hover:text-amber-900 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 bg-white/50 hover:bg-white"
            >
              En savoir plus
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-5">
          <span className="text-amber-600/50 text-xs tracking-widest uppercase">Découvrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-amber-600/50 to-transparent" />
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="py-24 px-4 border-t border-amber-200">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8 text-center">
          {[
            { n: '256', label: 'Signes au total', sub: 'Toutes les manifestations de la vie' },
            { n: '16',  label: 'Signes-mères', sub: 'Dou-Médji, puissance maximale' },
          ].map((item, i) => (
            <div key={i} className={`animate-fade-up-delay-${i + 1}`}>
              <p className="text-5xl md:text-6xl font-bold text-amber-600 mb-2">{item.n}</p>
              <p className="text-amber-900 font-medium mb-1 text-sm md:text-base">{item.label}</p>
              <p className="text-amber-700/60 text-xs md:text-sm">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-600 text-xs tracking-[0.3em] uppercase mb-3 text-center">Plateforme numérique</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-amber-900">
            Une expérience culturelle complète
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titre: '256 signes documentés',
                desc: 'Interdits, sacrifices, devises, fétiches et feuilles liturgiques pour chaque signe et ses combinaisons.',
                lien: '/signes',
                cta: 'Explorer les signes',
              },
              {
                titre: 'Cartes imprimables',
                desc: 'Chaque signe génère une carte PDF A5 avec QR code — pour expositions, livrets pédagogiques et ateliers.',
                lien: '/signes',
                cta: 'Voir un exemple',
              },
              {
                titre: 'Reconnaissance visuelle',
                desc: 'Pointez votre appareil vers un signe dessiné ou sculpté. L\'IA identifie le signe instantanément.',
                lien: '/scan',
                cta: 'Scanner un signe',
              },
              {
                titre: 'Carte des lieux sacrés',
                desc: 'Temples, forêts et sanctuaires Vodun géolocalisés au Bénin. Chacun lié à un signe du Fâ.',
                lien: '/explorer',
                cta: 'Voir la carte',
              },
            ].map((f, i) => (
              <Link
                key={i}
                href={f.lien}
                className="group hover-lift block bg-white border border-amber-200 hover:border-amber-500 rounded-2xl p-8 transition-all duration-300"
              >
                <h3 className="text-amber-900 font-semibold text-lg mb-3 group-hover:text-amber-600 transition-colors">
                  {f.titre}
                </h3>
                <p className="text-amber-700/70 text-sm leading-relaxed mb-6">{f.desc}</p>
                <span className="text-amber-700 text-sm font-medium group-hover:text-amber-500 transition-colors">
                  {f.cta} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 px-4 border-t border-amber-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-600 text-xs tracking-[0.3em] uppercase mb-6">Notre positionnement</p>
          <blockquote className="text-2xl md:text-3xl font-light text-amber-900 leading-relaxed mb-8 italic">
            &ldquo;Rendre accessible, de manière claire et respectueuse, la connaissance symbolique des 256 signes du Fâ.&rdquo;
          </blockquote>
          <p className="text-amber-700/60 text-sm leading-relaxed max-w-xl mx-auto">
            FÂ DÜ n&apos;est pas un outil de consultation mystique et ne remplace pas le travail des Bokonon.
            Nous documentons, nous éduquons, nous valorisons.
          </p>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-amber-900">Pour qui ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { titre: 'La diaspora africaine', desc: 'Se reconnecter aux racines culturelles du golfe du Bénin avec clarté et profondeur.' },
              { titre: 'Les institutions', desc: 'Outils pédagogiques pour musées, universités et programmes de valorisation du patrimoine.' },
              { titre: 'Les curieux du monde', desc: 'Découvrir l\'un des systèmes de pensée africains les plus riches et les moins documentés.' },
            ].map((p, i) => (
              <div key={i} className="border-l-2 border-amber-500 pl-6 py-2">
                <h3 className="text-amber-900 font-semibold mb-2">{p.titre}</h3>
                <p className="text-amber-700/70 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4 border-t border-amber-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Commencer l&apos;exploration</h2>
          <p className="text-amber-700/70 mb-10">Accédez aux 256 signes, à la carte et aux outils de médiation culturelle.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signes" className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-amber-700/30">
              Les 16 signes-mères
            </Link>
            <Link href="/explorer" className="border border-amber-400 hover:border-amber-600 text-amber-800 hover:text-amber-900 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 bg-white/50 hover:bg-white">
              Carte des lieux sacrés
            </Link>
            <Link href="/scan" className="border border-amber-400 hover:border-amber-600 text-amber-800 hover:text-amber-900 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 bg-white/50 hover:bg-white">
              Scanner un signe
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-amber-200 py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-amber-700/50 text-xs">
          <p className="font-semibold text-amber-800/60 tracking-widest">FÂ DÜ</p>
          <p>© 2026 — Valorisation du patrimoine immatériel du golfe du Bénin</p>
          <div className="flex gap-6">
            <Link href="/fa" className="hover:text-amber-600 transition-colors">À propos</Link>
            <Link href="/signes" className="hover:text-amber-600 transition-colors">Signes</Link>
            <Link href="/scan" className="hover:text-amber-600 transition-colors">Scanner</Link>
            <Link href="/explorer" className="hover:text-amber-600 transition-colors">Carte</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}
