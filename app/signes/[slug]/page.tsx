import type { Metadata } from "next";
import Link from "next/link";
import { faMotherSigns, getCombinaisonsParSigne, genererToutesCombinations } from "@/data/faSigns";
import { notFound, redirect } from "next/navigation";
import { FaSignSymbol } from "@/components/FaSymbol";
import QRDownloadButton from '@/components/QRDownloadButton'
import SigneCardPrint from '@/components/SigneCardPrint'

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sign = faMotherSigns.find((s) => s.id === slug);
  if (!sign) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fa-du.vercel.app";
  const title = `${sign.nomPrincipal} – Signification complète du signe du Fâ`;
  const description = sign.resumeCourt ?? sign.texteRue ?? `Découvrez ${sign.nomPrincipal}, sa signification, ses interdits, sacrifices et thèmes de vie dans le Fâ.`;
  const pageUrl = `${baseUrl}/signes/${slug}`;
  const imageUrl = `${baseUrl}/api/carte/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title, description, url: pageUrl, siteName: "Fâ-Du", type: "article",
      images: [{ url: imageUrl, width: 1080, height: 1080, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  };
}

export async function generateStaticParams() {
  // On génère les params pour les 16 signes-mères uniquement
  // Les combinaisons sont gérées par la redirection ci-dessous
  return faMotherSigns.map((sign) => ({ slug: sign.id }));
}

export default async function SignePage({ params }: PageProps) {
  const { slug } = await params;

  // Vérifier si le slug est un signe-mère
  const sign = faMotherSigns.find((s) => s.id === slug);

  if (!sign) {
    // Vérifier si c'est une combinaison (ex: lete-ka, gbe-woli...)
    // Format d'une combinaison : {principal}-{compagnie} sans -medji
    const toutes = genererToutesCombinations().filter(c => c.type === 'vikando')
    const combo = toutes.find(c => c.id === slug)

    if (combo) {
      // Rediriger vers la bonne URL : /signes/{signePrincipal.id}/{combo.id}
      redirect(`/signes/${combo.signePrincipal.id}/${combo.id}`)
    }

    notFound();
  }

  const toutesCombinaisons = getCombinaisonsParSigne(slug);
  const combinaisons = toutesCombinaisons.filter((c) => c.type === "vikando");

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

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Symbole */}
        <div className="flex justify-center py-8 bg-amber-50 rounded-lg mb-8 relative">
          <FaSignSymbol colonnes={sign.figureSymbolique.colonnes} size="lg" showElements={false} />
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
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Mots-clés</h2>
            <div className="flex flex-wrap gap-3">
              {sign.motsCles.map((mot, idx) => (
                <span key={idx} className="text-base text-amber-900 bg-amber-100 px-4 py-2 rounded-full font-medium">
                  {mot}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* QR */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Partager ce signe</h2>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={`/api/qr/${sign.id}`}
              alt={`QR code ${sign.nomPrincipal}`}
              width={110}
              height={110}
              className="rounded-xl border border-gray-200"
            />
            <div>
              <p className="text-xs text-gray-500 mb-1">Scannez pour partager</p>
              <p className="text-xs font-mono text-gray-400 break-all">
                fa-du.vercel.app/signes/{sign.id}
              </p>
            </div>
          </div>
          <QRDownloadButton slug={sign.id} nom={sign.nomPrincipal} />
        </div>

        {sign.resumeCourt && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">En bref</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{sign.resumeCourt}</p>
          </div>
        )}

        {sign.texteRue && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Explication simple</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{sign.texteRue}</p>
          </div>
        )}

        {sign.themesDeVie && sign.themesDeVie.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Thèmes de vie associés</h2>
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

        {sign.tonGeneral && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Ton général du signe</h2>
            <p className="text-gray-700">
              {sign.tonGeneral === "plutot_favorable" && "Plutôt favorable"}
              {sign.tonGeneral === "equilibre" && "Équilibre entre difficulté et renouveau"}
              {sign.tonGeneral === "plutot_difficile" && "Plutôt difficile, demande patience"}
            </p>
          </div>
        )}

        {sign.sexe && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Caractéristiques</h2>
            <p className="text-gray-700">
              <span className="font-semibold">Sexe du signe :</span>{" "}
              {sign.sexe === "masculin" ? "Masculin ♂" : "Féminin ♀"}
            </p>
          </div>
        )}

        {sign.fetiches && sign.fetiches.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Fétiches et Divinités associés</h2>
            <ul className="space-y-2">
              {sign.fetiches.map((fetiche: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span className="text-gray-700">{fetiche}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {sign.feuillesLiturgiques && sign.feuillesLiturgiques.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Feuilles liturgiques</h2>
            <ul className="space-y-2">
              {sign.feuillesLiturgiques.map((feuille: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span className="text-gray-700">{feuille}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {sign.couleursPreferes && sign.couleursPreferes.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Couleurs sacrées</h2>
            <ul className="space-y-2">
              {sign.couleursPreferes.map((couleur: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span className="text-gray-700">{couleur}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {sign.devises && sign.devises.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Devises et Proverbes</h2>
            <div className="space-y-4">
              {sign.devises.map((devise: string, i: number) => (
                <div key={i} className="pl-4 border-l-4 border-amber-300 py-2 bg-amber-50 rounded-r-lg">
                  <p className="text-gray-700 italic leading-relaxed">{devise}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {sign.interdits && sign.interdits.length > 0 && (
          <div className="bg-red-50 rounded-xl shadow-lg p-8 mb-8 border-2 border-red-200">
            <h2 className="text-2xl font-bold text-red-900 mb-4">Interdits (Tabous)</h2>
            <p className="text-sm text-red-700 mb-4 bg-red-100 p-3 rounded-lg">
              Ces interdits doivent être respectés par ceux qui sont nés sous ce signe ou qui le possèdent.
            </p>
            <ul className="space-y-2">
              {sign.interdits.map((interdit: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-red-900 mr-2">✗</span>
                  <span className="text-red-800">{interdit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {sign.sacrifices && sign.sacrifices.length > 0 && (
          <div className="bg-amber-50 rounded-xl shadow-lg p-8 mb-8 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Sacrifices et Offrandes recommandés</h2>
            <ul className="space-y-2">
              {sign.sacrifices.map((sacrifice: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span className="text-gray-700">{sacrifice}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {sign.commentaire && (
          <div className="bg-purple-50 rounded-xl shadow-lg p-8 mb-8 border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">Caractère et Destinée</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{sign.commentaire}</p>
          </div>
        )}

        {/* Les 15 combinaisons */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Les 15 combinaisons de {sign.nomPrincipal.replace("-MÊDJI", "").replace("-MEDJI", "")}
          </h2>
          <p className="text-gray-700 mb-6">
            {sign.nomPrincipal.replace("-MÊDJI", "").replace("-MEDJI", "")} peut se combiner avec les 15 autres signes pour créer des combinaisons uniques (Vikandos).
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {combinaisons.map((combo) => (
              <Link
                key={combo.id}
                href={`/signes/${slug}/${combo.id}`}
                className="rounded-lg p-4 border-2 border-amber-200 bg-white hover:border-amber-400 hover:shadow-lg transition-all cursor-pointer"
              >
                <h3 className="font-bold text-amber-900 text-sm mb-3 text-center">{combo.nom}</h3>
                <div className="bg-amber-50 p-2 rounded">
                  <FaSignSymbol colonnes={combo.figureSymbolique.colonnes} size="sm" />
                  <div className="sr-only">
                    {combo.figureSymbolique.colonnes.map((colonne, colIdx) => (
                      <div key={colIdx}>
                        {colonne.map((trait, traitIdx) => (
                          <span key={traitIdx}>{trait === 1 ? "I" : "II"} </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-12">
          <Link href="/signes" className="bg-amber-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition">
            ← Tous les signes
          </Link>
          <Link href="/" className="bg-white text-amber-900 px-6 py-3 rounded-lg font-semibold border-2 border-amber-900 hover:bg-amber-50 transition">
            Retour à l&apos;accueil
          </Link>
        </div>
      </article>

      <SigneCardPrint
        slug={sign.id}
        nom={sign.nomPrincipal}
        numero={sign.position}
        symbole={sign.figureSymbolique.colonnes}
        type={sign.sexe ?? 'masculin'}
        element=""
        motsCles={sign.motsCles ?? []}
      />
    </main>
  );
}