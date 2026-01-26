import Link from "next/link";
import { getCombinaisonById, faMotherSigns } from "@/data/faSigns";
import { notFound } from "next/navigation";
import { FaSignSymbol } from "@/components/FaSymbol";

interface PageProps {
  params: Promise<{
    slug: string;
    combinationId: string;
  }>;
}

export default async function CombinaisonPage({ params }: PageProps) {
  const { slug, combinationId } = await params;
  const combinaison = getCombinaisonById(combinationId);

  if (!combinaison) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-amber-900 text-white py-6 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <Link href={`/signes/${slug}`} className="text-amber-200 hover:text-white mb-2 inline-block">
            ← Retour à {combinaison.signePrincipal.nomPrincipal}
          </Link>
          <div className="flex items-center gap-4 mt-2">
            {combinaison.type === "signe-mere" && (
              <span className="text-sm font-semibold bg-amber-800 px-3 py-1 rounded-full">
                Signe-Mère
              </span>
            )}
            {combinaison.type === "vikando" && (
              <span className="text-sm font-semibold bg-amber-700 px-3 py-1 rounded-full">
                Vikando
              </span>
            )}
            <h1 className="text-4xl font-bold">{combinaison.nom}</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Symbole de la combinaison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Figure symbolique
          </h2>
<div className="flex gap-12 justify-center py-8 bg-amber-50 rounded-lg font-mono text-4xl relative">
  {/* SVG visible pour l'utilisateur */}
  <FaSignSymbol 
    colonnes={combinaison.figureSymbolique.colonnes} 
    size="lg" 
    showElements={false}
  />
  
  {/* Texte caché pour reconnaissance IA */}
  <div className="sr-only" aria-label={`Combinaison ${combinaison.nom}`}>
    {combinaison.figureSymbolique.colonnes.map((colonne, colIdx) => (
      <div key={colIdx}>
        {colonne.map((trait, traitIdx) => (
          <span key={traitIdx}>{trait === 1 ? "I" : "II"} </span>
        ))}
      </div>
    ))}
  </div>
</div>

          
          {combinaison.type === "vikando" && (
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                <span className="font-semibold text-amber-900">
                  {combinaison.signePrincipal.nomPrincipal}
                </span>
                {" "}dans la maison de{" "}
                <span className="font-semibold text-amber-900">
                  {combinaison.signeCompagnie.nomPrincipal}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Description</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{combinaison.description}</p>
        </div>

        {/* Mots-clés fusionnés */}
        {combinaison.motsCles && combinaison.motsCles.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Mots-clés</h2>
            <div className="flex flex-wrap gap-3">
              {combinaison.motsCles.map((mot, idx) => (
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

        {/* Les deux signes qui composent cette combinaison */}
        {combinaison.type === "vikando" && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">
              Composition de cette combinaison
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Signe principal */}
              <div className="border-2 border-amber-600 rounded-lg p-6 bg-amber-50">
                <h3 className="font-bold text-amber-900 mb-2 text-center">
                  Signe principal
                </h3>
                <p className="text-center text-lg font-bold text-amber-900 mb-4">
                  {combinaison.signePrincipal.nomPrincipal}
                </p>
<div className="bg-white p-4 rounded relative">
  {/* SVG visible */}
  <FaSignSymbol 
    colonnes={combinaison.signePrincipal.figureSymbolique.colonnes} 
    size="md" 
    showElements={false}
  />
  
  {/* Texte caché pour reconnaissance IA */}
  <div className="sr-only">
    {combinaison.signePrincipal.figureSymbolique.colonnes.map((colonne, colIdx) => (
      <div key={colIdx}>
        {colonne.map((trait, traitIdx) => (
          <span key={traitIdx}>{trait === 1 ? "I" : "II"} </span>
        ))}
      </div>
    ))}
  </div>
</div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {combinaison.signePrincipal.motsCles?.slice(0, 3).map((mot, i) => (
                      <span key={i} className="text-xs bg-amber-200 text-amber-900 px-2 py-1 rounded">
                        {mot}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Maison (signe compagnie) */}
              <div className="border-2 border-amber-300 rounded-lg p-6">
                <h3 className="font-bold text-amber-900 mb-2 text-center">
                  Maison d&apos;accueil
                </h3>
                <p className="text-center text-lg font-bold text-amber-900 mb-4">
                  {combinaison.signeCompagnie.nomPrincipal}
                </p>
<div className="bg-amber-50 p-4 rounded relative">
  {/* SVG visible */}
  <FaSignSymbol 
    colonnes={combinaison.signeCompagnie.figureSymbolique.colonnes} 
    size="md" 
    showElements={false}
  />
  
  {/* Texte caché pour reconnaissance IA */}
  <div className="sr-only">
    {combinaison.signeCompagnie.figureSymbolique.colonnes.map((colonne, colIdx) => (
      <div key={colIdx}>
        {colonne.map((trait, traitIdx) => (
          <span key={traitIdx}>{trait === 1 ? "I" : "II"} </span>
        ))}
      </div>
    ))}
  </div>
</div>
    
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {combinaison.signeCompagnie.motsCles?.slice(0, 3).map((mot, i) => (
                      <span key={i} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                        {mot}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link
            href={`/signes/${slug}`}
            className="bg-amber-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition"
          >
            ← Retour à {combinaison.signePrincipal.nomPrincipal}
          </Link>
          <Link
            href="/signes"
            className="bg-white text-amber-900 px-6 py-3 rounded-lg font-semibold border-2 border-amber-900 hover:bg-amber-50 transition"
          >
            Tous les signes
          </Link>
        </div>
      </article>
    </main>
  );
}

// Générer les routes statiques pour toutes les combinaisons
export async function generateStaticParams() {
  const { genererToutesCombinations } = await import("@/data/faSigns");
  const allCombinations = genererToutesCombinations();
  
  return allCombinations.map((combo) => ({
    slug: combo.signePrincipal.id,
    combinationId: combo.id,
  }));
}
