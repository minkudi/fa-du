import Link from "next/link";
import { faMotherSigns } from "@/data/faSigns";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function SignePage({ params }: PageProps) {
  const sign = faMotherSigns.find((s) => s.id === params.slug);

  if (!sign) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-amber-900 text-white py-6 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/signes" className="text-amber-200 hover:text-white mb-2 inline-block">
            ← Retour aux signes
          </Link>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-sm font-semibold bg-amber-800 px-3 py-1 rounded-full">
              Position {sign.position}
            </span>
            <h1 className="text-4xl font-bold">{sign.nomPrincipal}</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
{/* Visual representation - FIDÈLE À L'IMAGE */}
<div className="flex gap-12 justify-center py-8 bg-amber-50 rounded-lg font-mono text-3xl">
  {sign.figureSymbolique.colonnes.map((colonne, colIdx) => (
    <div key={colIdx} className="flex flex-col gap-2">
      {colonne.map((trait, traitIdx) => (
        <div key={traitIdx} className="text-amber-900">
          {trait === 1 ? "I" : "II"}
        </div>
      ))}
    </div>
  ))}
</div>


        {/* Mots-clés */}
        {sign.motsCles && sign.motsCles.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Mots-clés</h2>
            <div className="flex flex-wrap gap-3">
              {sign.motsCles.map((mot, idx) => (
                <span
                  key={idx}
                  className="text-base text-amber-900 bg-amber-100 px-4 py-2 rounded-full font-medium"
                >
                  {mot}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Résumé court */}
        {sign.resumeCourt && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">En bref</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{sign.resumeCourt}</p>
          </div>
        )}

        {/* Explication "dans la rue" */}
        {sign.texteRue && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">
              Explication simple
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{sign.texteRue}</p>
          </div>
        )}

        {/* Thèmes de vie */}
        {sign.themesDeVie && sign.themesDeVie.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">
              Thèmes de vie associés
            </h2>
            <ul className="space-y-2">
              {sign.themesDeVie.map((theme, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span className="text-gray-700">{theme}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ton général */}
        {sign.tonGeneral && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">
              Ton général du signe
            </h2>
            <p className="text-gray-700">
              {sign.tonGeneral === "plutot_favorable" && "Plutôt favorable"}
              {sign.tonGeneral === "equilibre" && "Équilibre entre difficulté et renouveau"}
              {sign.tonGeneral === "plutot_difficile" && "Plutôt difficile, demande patience"}
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link
            href="/signes"
            className="bg-amber-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition"
          >
            ← Tous les signes
          </Link>
          <Link
            href="/"
            className="bg-white text-amber-900 px-6 py-3 rounded-lg font-semibold border-2 border-amber-900 hover:bg-amber-50 transition"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </article>
    </main>
  );
}

// Generate static paths for all signs
export async function generateStaticParams() {
  return faMotherSigns.map((sign) => ({
    slug: sign.id,
  }));
}
