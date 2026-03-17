import Link from "next/link";
import { faMotherSigns } from "@/data/faSigns";
import { FaSignSymbol } from "@/components/FaSymbol";

export default function SignesPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">

      {/* Header */}
      <header className="border-b border-stone-800 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="text-stone-500 hover:text-amber-400 text-sm transition-colors mb-6 inline-block tracking-wide"
          >
            ← Retour
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-2">
                Dougans — Signes mères
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Les 16 signes-mères du Fâ
              </h1>
            </div>
            <p className="text-stone-400 text-sm max-w-xs leading-relaxed">
              Chaque signe porte des significations symboliques profondes et 15 combinaisons uniques.
            </p>
          </div>
        </div>
      </header>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {faMotherSigns.map((sign, index) => (
            <Link
              key={sign.id}
              href={`/signes/${sign.id}`}
              className="group hover-lift block bg-stone-900 border border-stone-800 hover:border-amber-700/60 rounded-2xl p-6 transition-all duration-300"
            >
              {/* Numéro */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono text-stone-600 group-hover:text-amber-600 transition-colors">
                  {String(sign.position).padStart(2, '0')}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${
                  sign.sexe === 'feminin'
                    ? 'border-violet-700/50 text-violet-400 bg-violet-900/20'
                    : 'border-amber-700/50 text-amber-400 bg-amber-900/20'
                }`}>
                  {sign.sexe === 'feminin' ? 'féminin' : 'masculin'}
                </span>
              </div>

              {/* Nom */}
              <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-4 tracking-wide">
                {sign.nomPrincipal}
              </h3>

              {/* Symbole */}
              <div className="py-5 bg-stone-950 rounded-xl mb-4 flex items-center justify-center border border-stone-800 group-hover:border-stone-700 transition-colors">
                <FaSignSymbol colonnes={sign.figureSymbolique.colonnes} size="md" />
                <div className="sr-only" aria-label={`Signe ${sign.nomPrincipal}`}>
                  {sign.figureSymbolique.colonnes.map((colonne, colIdx) => (
                    <div key={colIdx}>
                      {colonne.map((trait, traitIdx) => (
                        <span key={traitIdx}>{trait === 1 ? "I" : "II"} </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mots-clés */}
              {sign.motsCles && sign.motsCles.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {sign.motsCles.slice(0, 3).map((mot, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-stone-400 bg-stone-800 px-2 py-0.5 rounded-full"
                    >
                      {mot}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              <p className="text-xs text-stone-600 group-hover:text-amber-500 transition-colors font-medium">
                Explorer ce signe &rarr;
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-stone-800 py-8 px-4 text-center text-stone-600 text-xs">
        © 2026 FÂ DÜ — Valorisation du patrimoine immatériel du golfe du Bénin
      </footer>

    </main>
  );
}