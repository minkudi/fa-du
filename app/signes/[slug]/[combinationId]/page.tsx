import type { Metadata } from "next";
import Link from "next/link";
import { getCombinaisonById, genererToutesCombinations } from "@/data/faSigns";
import { notFound } from "next/navigation";
import { FaSignSymbol } from "@/components/FaSymbol";
import QRDownloadButton from "@/components/QRDownloadButton";
import SigneCardPrint from "@/components/SigneCardPrint";

interface PageProps {
  params: Promise<{
    slug: string;
    combinationId: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, combinationId } = await params;
  const combinaison = getCombinaisonById(combinationId);
  if (!combinaison) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fa-du.vercel.app";
  const title = `${combinaison.nom} – Combinaison du signe ${combinaison.signePrincipal.nomPrincipal} dans le Fâ`;
  const description = combinaison.description ?? `Découvrez la combinaison ${combinaison.nom} du signe ${combinaison.signePrincipal.nomPrincipal} et sa maison d'accueil ${combinaison.signeCompagnie.nomPrincipal} dans le Fâ.`;
  const pageUrl = `${baseUrl}/signes/${slug}/${combinationId}`;
  const imageUrl = `${baseUrl}/api/carte-combinaison/${combinationId}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Fâ-Du",
      type: "article",
      images: [{ url: imageUrl, width: 1080, height: 1080, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const allCombinations = genererToutesCombinations();
  return allCombinations.map((combo) => ({
    slug: combo.signePrincipal.id,
    combinationId: combo.id,
  }));
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
              <span className="text-sm font-semibold bg-amber-800 px-3 py-1 rounded-full">Signe-Mère</span>
            )}
            {combinaison.type === "vikando" && (
              <span className="text-sm font-semibold bg-amber-700 px-3 py-1 rounded-full">Vikando</span>
            )}
            <h1 className="text-4xl font-bold">{combinaison.nom}</h1>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">

        {/* Symbole */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">Figure symbolique</h2>
          <div className="flex gap-12 justify-center py-8 bg-amber-50 rounded-lg font-mono text-4xl relative">
            <FaSignSymbol
              colonnes={combinaison.figureSymbolique.colonnes}
              size="lg"
              showElements={false}
            />
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
                <span className="font-semibold text-amber-900">{combinaison.nom}</span>
              </p>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Description</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{combinaison.description}</p>
        </div>

        {/* Mots-clés */}
        {combinaison.motsCles && combinaison.motsCles.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Mots-clés</h2>
            <div className="flex flex-wrap gap-3">
              {combinaison.motsCles.map((mot, idx) => (
                <span key={idx} className="text-base text-amber-900 bg-amber-100 px-4 py-2 rounded-full font-medium">
                  {mot}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Composition */}
        {combinaison.type === "vikando" && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Composition de cette combinaison</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-amber-600 rounded-lg p-6 bg-amber-50">
                <h3 className="font-bold text-amber-900 mb-2 text-center">Signe principal</h3>
                <p className="text-center text-lg font-bold text-amber-900 mb-4">
                  {combinaison.signePrincipal.nomPrincipal}
                </p>
                <div className="bg-white p-4 rounded relative">
                  <FaSignSymbol
                    colonnes={combinaison.signePrincipal.figureSymbolique.colonnes}
                    size="md"
                    showElements={false}
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {combinaison.signePrincipal.motsCles?.slice(0, 3).map((mot, i) => (
                    <span key={i} className="text-xs bg-amber-200 text-amber-900 px-2 py-1 rounded">{mot}</span>
                  ))}
                </div>
              </div>

              <div className="border-2 border-amber-300 rounded-lg p-6">
                <h3 className="font-bold text-amber-900 mb-2 text-center">Maison d&apos;accueil</h3>
                <p className="text-center text-lg font-bold text-amber-900 mb-4">
                  {combinaison.signeCompagnie.nomPrincipal}
                </p>
                <div className="bg-amber-50 p-4 rounded relative">
                  <FaSignSymbol
                    colonnes={combinaison.signeCompagnie.figureSymbolique.colonnes}
                    size="md"
                    showElements={false}
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {combinaison.signeCompagnie.motsCles?.slice(0, 3).map((mot, i) => (
                    <span key={i} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">{mot}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* QR + téléchargement */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Partager cette combinaison</h2>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={`/api/qr/combinaison/${combinaison.id}?signe=${slug}`}
              alt={`QR code ${combinaison.nom}`}
              width={110}
              height={110}
              className="rounded-xl border border-gray-200"
            />
            <div>
              <p className="text-xs text-gray-500 mb-1">Scannez pour partager</p>
              <p className="text-xs font-mono text-gray-400 break-all">
                fa-du.vercel.app/signes/{slug}/{combinaison.id}
              </p>
            </div>
          </div>
          <QRDownloadButton slug={combinaison.id} nom={combinaison.nom} />
        </div>

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

      {/* Carte cachée pour PDF */}
      <SigneCardPrint
        slug={combinaison.id}
        nom={combinaison.nom}
        numero={combinaison.signePrincipal.position}
        symbole={combinaison.figureSymbolique.colonnes}
        type={combinaison.signePrincipal.sexe ?? 'masculin'}
        element=""
        motsCles={combinaison.motsCles ?? []}
      />

    </main>
  );
}