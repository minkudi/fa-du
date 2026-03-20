import type { Metadata } from "next";
import Link from "next/link";
import { getCombinaisonById, genererToutesCombinations } from "@/data/faSigns";
import { notFound } from "next/navigation";
import { FaSignSymbol } from "@/components/FaSymbol";
import QRDownloadButton from "@/components/QRDownloadButton";
import SigneCardPrint from "@/components/SigneCardPrint";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string; combinationId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, combinationId } = await params;
  const combinaison = getCombinaisonById(combinationId);
  if (!combinaison) return {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fa-du.vercel.app";
  const title = `${combinaison.nom} – Combinaison du signe ${combinaison.signePrincipal.nomPrincipal} dans le Fâ`;
  const description = combinaison.description ?? `Découvrez la combinaison ${combinaison.nom} dans le Fâ.`;
  const pageUrl = `${baseUrl}/signes/${slug}/${combinationId}`;
  const imageUrl = `${baseUrl}/api/carte-combinaison/${combinationId}`;
  return {
    title, description,
    openGraph: { title, description, url: pageUrl, siteName: "Fâ-Du", type: "article", images: [{ url: imageUrl, width: 1080, height: 1080, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  };
}

export async function generateStaticParams() {
  return genererToutesCombinations().map((combo) => ({
    slug: combo.signePrincipal.id,
    combinationId: combo.id,
  }));
}

export default async function CombinaisonPage({ params }: PageProps) {
  const { slug, combinationId } = await params;
  const combinaison = getCombinaisonById(combinationId);
  if (!combinaison) notFound();

  return (
    <main className="min-h-screen bg-amber-50 text-amber-900">
      <Navbar />

      {/* Header */}
      <header className="pt-32 pb-10 px-4 border-b border-amber-200 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <Link href={`/signes/${slug}`} className="text-amber-600/60 hover:text-amber-700 text-sm transition-colors mb-4 inline-block">
            ← Retour à {combinaison.signePrincipal.nomPrincipal}
          </Link>
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              combinaison.type === "signe-mere"
                ? "bg-amber-100 text-amber-700 border-amber-200"
                : "bg-amber-50 text-amber-600 border-amber-200"
            }`}>
              {combinaison.type === "signe-mere" ? "Signe-Mère" : "Vikando"}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mt-3">{combinaison.nom}</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-10 space-y-5">

        {/* Symbole */}
        <div className="bg-white border border-amber-200 rounded-2xl p-8">
          <h2 className="text-lg font-bold text-amber-800 mb-6 text-center">Figure symbolique</h2>
          <div className="flex justify-center py-8 bg-amber-50 rounded-xl border border-amber-100">
            <FaSignSymbol colonnes={combinaison.figureSymbolique.colonnes} size="lg" showElements={false} />
            <div className="sr-only">
              {combinaison.figureSymbolique.colonnes.map((col, ci) => (
                <div key={ci}>{col.map((t, i) => <span key={i}>{t === 1 ? "I" : "II"} </span>)}</div>
              ))}
            </div>
          </div>
          {combinaison.type === "vikando" && (
            <p className="text-center text-amber-700/60 text-sm mt-4">{combinaison.nom}</p>
          )}
        </div>

        {/* Description */}
        <div className="bg-white border border-amber-200 rounded-2xl p-7">
          <h2 className="text-lg font-bold text-amber-800 mb-3">Description</h2>
          <p className="text-amber-800/75 leading-relaxed text-sm">{combinaison.description}</p>
        </div>

        {/* Mots-clés */}
        {combinaison.motsCles && combinaison.motsCles.length > 0 && (
          <div className="bg-white border border-amber-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-amber-800 mb-4">Mots-clés</h2>
            <div className="flex flex-wrap gap-2">
              {combinaison.motsCles.map((mot, idx) => (
                <span key={idx} className="text-sm text-amber-800 bg-amber-100 px-4 py-1.5 rounded-full font-medium">{mot}</span>
              ))}
            </div>
          </div>
        )}

        {/* Composition */}
        {combinaison.type === "vikando" && (
          <div className="bg-white border border-amber-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-amber-800 mb-6">Composition de cette combinaison</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="border border-amber-300 rounded-xl p-5 bg-amber-50">
                <h3 className="font-semibold text-amber-800 text-sm mb-1 text-center">Signe principal</h3>
                <p className="text-center text-base font-bold text-amber-900 mb-4">{combinaison.signePrincipal.nomPrincipal}</p>
                <div className="bg-white p-4 rounded-lg border border-amber-100">
                  <FaSignSymbol colonnes={combinaison.signePrincipal.figureSymbolique.colonnes} size="md" showElements={false} />
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
                  {combinaison.signePrincipal.motsCles?.slice(0,3).map((m,i) => (
                    <span key={i} className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">{m}</span>
                  ))}
                </div>
              </div>
              <div className="border border-amber-200 rounded-xl p-5">
                <h3 className="font-semibold text-amber-700 text-sm mb-1 text-center">Maison d&apos;accueil</h3>
                <p className="text-center text-base font-bold text-amber-900 mb-4">{combinaison.signeCompagnie.nomPrincipal}</p>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <FaSignSymbol colonnes={combinaison.signeCompagnie.figureSymbolique.colonnes} size="md" showElements={false} />
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
                  {combinaison.signeCompagnie.motsCles?.slice(0,3).map((m,i) => (
                    <span key={i} className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* QR */}
        <div className="bg-white border border-amber-200 rounded-2xl p-7">
          <h2 className="text-lg font-bold text-amber-800 mb-4">Partager cette combinaison</h2>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={`/api/qr/combinaison/${combinaison.id}?signe=${slug}`}
              alt={`QR ${combinaison.nom}`}
              width={100} height={100}
              className="rounded-xl border border-amber-200"
            />
            <div>
              <p className="text-xs text-amber-600/60 mb-1">Scannez pour partager</p>
            </div>
          </div>
          <QRDownloadButton slug={combinaison.id} nom={combinaison.nom} />
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <Link href={`/signes/${slug}`}
            className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5">
            ← {combinaison.signePrincipal.nomPrincipal}
          </Link>
          <Link href="/signes"
            className="inline-flex items-center gap-2 bg-white border border-amber-300 hover:border-amber-500 text-amber-800 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5">
            Tous les signes
          </Link>
        </div>
      </article>

      <SigneCardPrint
        slug={combinaison.id} nom={combinaison.nom}
        numero={combinaison.signePrincipal.position}
        symbole={combinaison.figureSymbolique.colonnes}
        type={combinaison.signePrincipal.sexe ?? 'masculin'}
        element="" motsCles={combinaison.motsCles ?? []}
      />

      <Footer />
    </main>
  );
}
