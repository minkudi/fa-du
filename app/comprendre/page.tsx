import Link from "next/link";

export default function ComprendrePage() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">

      <header className="border-b border-stone-800 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-stone-500 hover:text-amber-400 text-sm transition-colors mb-6 inline-block">
            ← Retour
          </Link>
          <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-2">Fondements</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Comprendre le Fâ</h1>
          <p className="text-stone-400 mt-3 max-w-xl">
            Le système de géomancie ancestral du golfe du Bénin — ses structures, ses éléments, sa logique.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-14 space-y-6">

        {/* Qu'est-ce que le Fâ */}
        <section className="bg-stone-900 border border-stone-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Qu&apos;est-ce que le Fâ ?</h2>
          <p className="text-stone-300 leading-relaxed mb-4">
            Le Fâ est un système de géomancie ancestral pratiqué dans la région du golfe du Bénin.
            C&apos;est une science divinatoire qui permet de comprendre les forces invisibles à l&apos;œuvre
            dans la vie des hommes et de leur environnement.
          </p>
          <p className="text-stone-400 leading-relaxed">
            Reconnu comme patrimoine immatériel de l&apos;humanité, le Fâ n&apos;est pas un outil de
            consultation mystique et ne remplace en aucun cas le travail des bokonon (devins).
            Il s&apos;agit d&apos;un système de connaissance qui aide à mieux comprendre les dynamiques de la vie.
          </p>
        </section>

        {/* Les 4 éléments */}
        <section className="bg-stone-900 border border-stone-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-amber-400 mb-6">Les 4 éléments fondamentaux</h2>
          <p className="text-stone-400 mb-8">
            Le Fâ repose sur quatre éléments impondérables qui donnent la vie sur terre.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { element: 'Feu', symbole: 'I', nature: 'Mâle — créateur', desc: "Commande les énergies de lumière. Représente l'esprit, la force vitale, le commencement.", color: 'border-orange-700/50 bg-orange-950/20' },
              { element: 'Air', symbole: 'I', nature: 'Mâle — créateur', desc: "Commande les énergies de son. Représente l'esprit, la communication, le mouvement.", color: 'border-blue-700/50 bg-blue-950/20' },
              { element: 'Eau', symbole: 'II', nature: 'Femelle — récepteur', desc: "Source de vie. Commande toutes les énergies de vie. Représente la matière, la fertilité.", color: 'border-cyan-700/50 bg-cyan-950/20' },
              { element: 'Terre', symbole: 'II', nature: 'Femelle — récepteur', desc: "Source de mort et de transformation. Commande les énergies d'absorption et de régénération.", color: 'border-amber-700/50 bg-amber-950/20' },
            ].map((el, i) => (
              <div key={i} className={`rounded-xl p-6 border ${el.color}`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-lg">{el.element}</h3>
                  <span className="font-mono text-amber-400 text-lg font-bold">{el.symbole}</span>
                </div>
                <p className="text-stone-500 text-xs mb-2 uppercase tracking-wide">{el.nature}</p>
                <p className="text-stone-400 text-sm leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-stone-800 rounded-xl p-5 text-center">
            <p className="text-stone-300 text-sm">
              <span className="text-amber-400 font-semibold">Principe fondamental :</span> Les éléments d&apos;en haut
              (feu et air = esprit) viennent féconder ceux d&apos;en bas (eau et terre = matière) pour créer la vie.
            </p>
          </div>
        </section>

        {/* Comment lire */}
        <section className="bg-stone-900 border border-stone-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-amber-400 mb-6">Comment lire les signes ?</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-3">Structure d&apos;un signe</h3>
              <p className="text-stone-400 mb-4 text-sm leading-relaxed">
                Chaque signe est composé de 4 lignes organisées en 2 colonnes.
                Les lignes représentent les 4 éléments de haut en bas.
              </p>
              <div className="bg-stone-800 rounded-xl p-6 flex gap-12 justify-center">
                {[0, 1].map(col => (
                  <div key={col} className="flex flex-col gap-2 font-mono text-amber-400 text-sm">
                    {['Feu', 'Air', 'Eau', 'Terre'].map((el, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-stone-600 text-xs w-10">{el}</span>
                        <span>{i < 2 ? 'I' : 'II'}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Règles de lecture</h3>
              <ul className="space-y-2">
                {[
                  'On lit le Fâ de droite à gauche',
                  'Le signe à droite est le plus fort (élément principal)',
                  "Le signe à gauche est la « compagnie » (maison d'accueil)",
                  'La compagnie modifie en bien ou en mal le signe principal',
                ].map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-300 text-sm">
                    <span className="text-amber-600 mt-0.5">—</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Les 16 signes-mères */}
        <section className="bg-stone-900 border border-stone-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Les 16 signes-mères (Dou-Médji)</h2>
          <p className="text-stone-400 leading-relaxed mb-4 text-sm">
            Les 16 signes principaux sont appelés <span className="text-white">signes-mères</span> ou <span className="text-white">Dou-Médji</span>
            (dieux-doubles). Ils représentent les hiérarchies supérieures où chaque type de manifestation
            atteint sa puissance maximum.
          </p>
          <div className="bg-stone-800 rounded-xl p-5 space-y-3">
            <p className="text-stone-300 text-sm">
              <span className="text-amber-400 font-semibold">Signes-mères (16) :</span> Quand un signe se double
              par lui-même, il atteint sa puissance maximum. Exemple : GBÉ-MÊDJI.
            </p>
            <p className="text-stone-300 text-sm">
              <span className="text-amber-400 font-semibold">Vikandos (240) :</span> Combinaisons de deux signes différents.
              Exemple : GBÉ-YÈKOU (GBÉ dans la maison de YÈKOU).
            </p>
          </div>
        </section>

        {/* Jour et nuit */}
        <section className="bg-stone-900 border border-stone-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-amber-400 mb-6">Signes de jour et signes de nuit</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-amber-800/40 bg-amber-950/20 rounded-xl p-6">
              <h3 className="text-amber-400 font-semibold mb-3">Signes de jour — GBÉ</h3>
              <ul className="space-y-1 text-stone-400 text-sm">
                {['GBÉ-MÊDJI', 'GUDA-MÊDJI', 'SA-MÊDJI', 'TULA-MÊDJI', 'LÈTÈ-MÊDJI', 'WOLI-MÊDJI', 'WINLIN-MÊDJI', 'LOSSO-MÊDJI'].map(s => (
                  <li key={s} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-600 flex-shrink-0" />{s}</li>
                ))}
              </ul>
            </div>
            <div className="border border-stone-700/40 bg-stone-800/40 rounded-xl p-6">
              <h3 className="text-stone-300 font-semibold mb-3">Signes de nuit — YÈKOU</h3>
              <ul className="space-y-1 text-stone-400 text-sm">
                {['YÈKOU-MÊDJI', 'ABLA-MÊDJI', 'AKLAN-MÊDJI', 'KA-MÊDJI', 'TRUKPIN-MÊDJI', 'DI-MÊDJI', 'TCHE-MÊDJI', 'FU-MÊDJI'].map(s => (
                  <li key={s} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-stone-500 flex-shrink-0" />{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Loi du triangle */}
        <section className="bg-stone-900 border border-stone-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">La loi du triangle</h2>
          <div className="bg-stone-800 rounded-xl p-5 text-center mb-4">
            <p className="text-amber-400 text-3xl font-bold font-mono mb-1">1 + 2 + 3 + 4 = 10</p>
            <p className="text-stone-500 text-sm">Les 4 éléments, par addition théosophique, donnent 10 (la totalité).</p>
          </div>
          <p className="text-stone-400 text-sm leading-relaxed mb-3">
            Le nombre 4 porté au maximum de sa puissance (4 × 4) donne <span className="text-white">16 combinaisons élémentaires</span> — les 16 signes principaux.
          </p>
          <p className="text-stone-400 text-sm leading-relaxed">
            Chaque signe, en se combinant avec les 16 signes, produit 16 variantes. Au total : <span className="text-white font-semibold">16 × 16 = 256 combinaisons possibles</span>.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center py-8">
          <Link
            href="/signes"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/50"
          >
            Découvrir les 16 signes-mères
          </Link>
        </div>

      </div>

      <footer className="border-t border-stone-800 py-8 px-4 text-center text-stone-600 text-xs">
        © 2026 FÂ DÜ — Valorisation du patrimoine immatériel du golfe du Bénin
      </footer>

    </main>
  );
}