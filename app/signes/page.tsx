import Link from "next/link";
import { faMotherSigns } from "@/data/faSigns";
import { FaSignSymbol } from "@/components/FaSymbol";


export default function SignesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-amber-900 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="text-amber-200 hover:text-white mb-2 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold">Les 16 signes-mères du Fâ</h1>
          <p className="text-amber-200 mt-2">Dougans - Signes mères</p>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          Voici les 16 signes mères du système du Fâ. Chaque signe représente une combinaison 
          unique d&apos;éléments et porte des significations symboliques profondes. Cliquez sur un signe 
          pour en savoir plus.
        </p>

        {/* Grid of signs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faMotherSigns.map((sign) => (
            <Link
              key={sign.id}
              href={`/signes/${sign.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-2 border-amber-100 hover:border-amber-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-amber-900 bg-amber-100 px-3 py-1 rounded-full">
                  {sign.position}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                {sign.nomPrincipal}
              </h3>
{/* Visual representation - FIDÈLE À L'IMAGE */}
<div className="py-4 bg-amber-50 rounded relative">
  {/* SVG visible pour l'utilisateur */}
  <FaSignSymbol colonnes={sign.figureSymbolique.colonnes} size="md" />
  
  {/* Texte caché pour reconnaissance IA/OCR */}
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
              {sign.motsCles && sign.motsCles.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {sign.motsCles.slice(0, 3).map((mot, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded"
                    >
                      {mot}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 text-sm text-amber-900 font-medium">
                En savoir plus →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
