import type { Metadata } from "next";
import Link from "next/link";
import { faMotherSigns, getCombinaisonsParSigne, genererToutesCombinations } from "@/data/faSigns";
import { notFound, redirect } from "next/navigation";
import { FaSignSymbol } from "@/components/FaSymbol";
import QRDownloadButton from '@/components/QRDownloadButton'
import SigneCardPrint from '@/components/SigneCardPrint'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
    title, description,
    openGraph: { title, description, url: pageUrl, siteName: "Fâ-Du", type: "article", images: [{ url: imageUrl, width: 1080, height: 1080, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  };
}

export async function generateStaticParams() {
  return faMotherSigns.map((sign) => ({ slug: sign.id }));
}

export default async function SignePage({ params }: PageProps) {
  const { slug } = await params;
  const sign = faMotherSigns.find((s) => s.id === slug);

  if (!sign) {
    const toutes = genererToutesCombinations().filter(c => c.type === 'vikando')
    const combo = toutes.find(c => c.id === slug)
    if (combo) redirect(`/signes/${combo.signePrincipal.id}/${combo.id}`)
    notFound();
  }

  const toutesCombinaisons = getCombinaisonsParSigne(slug);
  const combinaisons = toutesCombinaisons.filter((c) => c.type === "vikando");

  return (
    <main className="min-h-screen bg-amber-50 text-amber-900">
      <Navbar />

      {/* Header */}
      <header className="pt-32 pb-10 px-4 border-b border-amber-200 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <Link href="/signes" className="text-amber-600/60 hover:text-amber-700 text-sm transition-colors mb-4 inline-block">
            ← Retour aux signes
          </Link>
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <span className="text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">
              Position {sign.position}
            </span>
            <span className={`text-xs px-3 py-1 rounded-full border font-medium ${
              sign.sexe === 'feminin'
                ? 'border-violet-200 text-violet-600 bg-violet-50'
                : 'border-amber-200 text-amber-700 bg-amber-50'
            }`}>
              {sign.sexe === 'feminin' ? 'Féminin ♀' : 'Masculin ♂'}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mt-3">{sign.nomPrincipal}</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-10 space-y-5">

        {/* Symbole */}
        <div className="flex justify-center py-10 bg-white border border-amber-200 rounded-2xl">
          <FaSignSymbol colonnes={sign.figureSymbolique.colonnes} size="lg" showElements={false} />
          <div className="sr-only">
            {sign.figureSymbolique.colonnes.map((colonne, colIdx) => (
              <div key={colIdx}>{colonne.map((trait, i) => <span key={i}>{trait === 1 ? "I" : "II"} </span>)}</div>
            ))}
          </div>
        </div>

        {/* Mots-clés */}
        {sign.motsCles && sign.motsCles.length > 0 && (
          <div className="bg-white border border-amber-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-amber-800 mb-4">Mots-clés</h2>
            <div className="flex flex-wrap gap-2">
              {sign.motsCles.map((mot, idx) => (
                <span key={idx} className="text-sm text-amber-800 bg-amber-100 px-4 py-1.5 rounded-full font-medium">{mot}</span>
              ))}
            </div>
          </div>
        )}

        {/* QR */}
        <div className="bg-white border border-amber-200 rounded-2xl p-7">
          <h2 className="text-lg font-bold text-amber-800 mb-4">Partager ce signe</h2>
          <div className="flex items-center gap-4 mb-4">
            <img src={`/api/qr/${sign.id}`} alt={`QR ${sign.nomPrincipal}`} width={100} height={100} className="rounded-xl border border-amber-200"/>
            <div>
              <p className="text-xs text-amber-600/60 mb-1">Scannez pour partager</p>
              <p className="text-xs font-mono text-amber-700/50">fa-du.vercel.app/signes/{sign.id}</p>
            </div>
          </div>
          <QRDownloadButton slug={sign.id} nom={sign.nomPrincipal} />
        </div>

        {sign.resumeCourt && (
          <div className="bg-white border border-amber-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-amber-800 mb-3">En bref</h2>
            <p className="text-amber-800/80 leading-relaxed">{sign.resumeCourt}</p>
          </div>
        )}

        {sign.texteRue && (
          <div className="bg-white border border-amber-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-amber-800 mb-3">Explication simple</h2>
            <p className="text-amber-800/75 leading-relaxed">{sign.texteRue}</p>
          </div>
        )}

        {sign.themesDeVie && sign.themesDeVie.length > 0 && (
          <div className="bg-white border border-amber-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-amber-800 mb-4">Thèmes de vie associés</h2>
            <ul className="space-y-2">
              {sign.themesDeVie.map((theme, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-amber-800/75">
                  <span className="text-amber-500 mt-0.5">—</span>{theme}
                </li>
              ))}
            </ul>
          </div>
        )}

        {sign.tonGeneral && (
          <div className="bg-white border border-amber-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-amber-800 mb-3">Ton général</h2>
            <p className="text-amber-800/75 text-sm">
              {sign.tonGeneral === "plutot_favorable" && "Plutôt favorable"}
              {sign.tonGeneral === "equilibre" && "Équilibre entre difficulté et renouveau"}
              {sign.tonGeneral === "plutot_difficile" && "Plutôt difficile, demande patience"}
            </p>
          </div>
        )}

        {sign.fetiches && sign.fetiches.length > 0 && (
          <div className="bg-white border border-amber-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-amber-800 mb-4">Fétiches et Divinités</h2>
            <ul className="space-y-1.5">
              {sign.fetiches.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-amber-800/75"><span className="text-amber-400">•</span>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {sign.feuillesLiturgiques && sign.feuillesLiturgiques.length > 0 && (
          <div className="bg-white border border-amber-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-amber-800 mb-4">Feuilles liturgiques</h2>
            <ul className="space-y-1.5">
              {sign.feuillesLiturgiques.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-amber-800/75"><span className="text-amber-400">•</span>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {sign.couleursPreferes && sign.couleursPreferes.length > 0 && (
          <div className="bg-white border border-amber-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-amber-800 mb-4">Couleurs sacrées</h2>
            <ul className="space-y-1.5">
              {sign.couleursPreferes.map((c: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-amber-800/75"><span className="text-amber-400">•</span>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {sign.devises && sign.devises.length > 0 && (
          <div className="bg-white border border-amber-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-amber-800 mb-4">Devises et Proverbes</h2>
            <div className="space-y-3">
              {sign.devises.map((d: string, i: number) => (
                <div key={i} className="pl-4 border-l-2 border-amber-300 py-2 bg-amber-50 rounded-r-lg">
                  <p className="text-amber-800/75 italic text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {sign.interdits && sign.interdits.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-red-800 mb-3">Interdits (Tabous)</h2>
            <p className="text-xs text-red-600 mb-4 bg-red-100 p-3 rounded-lg">
              Ces interdits doivent être respectés par ceux qui sont nés sous ce signe ou qui le possèdent.
            </p>
            <ul className="space-y-1.5">
              {sign.interdits.map((interdit: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                  <span className="text-red-400 mt-0.5">✗</span>{interdit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {sign.sacrifices && sign.sacrifices.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-amber-800 mb-4">Sacrifices et Offrandes</h2>
            <ul className="space-y-1.5">
              {sign.sacrifices.map((s: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-amber-800/75"><span className="text-amber-400">•</span>{s}</li>
              ))}
            </ul>
          </div>
        )}

        {sign.commentaire && (
          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-7">
            <h2 className="text-lg font-bold text-violet-800 mb-3">Caractère et Destinée</h2>
            <p className="text-violet-800/75 leading-relaxed text-sm">{sign.commentaire}</p>
          </div>
        )}

        {/* Les 15 combinaisons */}
        <div className="bg-white border border-amber-200 rounded-2xl p-7">
          <h2 className="text-lg font-bold text-amber-800 mb-2">
            Les 15 combinaisons de {sign.nomPrincipal.replace("-MÊDJI","").replace("-MEDJI","")}
          </h2>
          <p className="text-amber-700/60 text-sm mb-6">
            Chaque combinaison (Vikando) associe ce signe avec un autre parmi les 15 signes-mères restants.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {combinaisons.map((combo) => (
              <Link key={combo.id} href={`/signes/${slug}/${combo.id}`}
                className="group block rounded-xl p-3 border border-amber-200 bg-white hover:border-amber-500 hover:shadow-md transition-all hover:-translate-y-0.5">
                <h3 className="font-bold text-amber-900 text-xs mb-2 text-center group-hover:text-amber-600 transition-colors">{combo.nom}</h3>
                <div className="bg-amber-50 p-2 rounded-lg group-hover:bg-amber-100 transition-colors">
                  <FaSignSymbol colonnes={combo.figureSymbolique.colonnes} size="sm" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <Link href="/signes" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5">
            ← Tous les signes
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 bg-white border border-amber-300 hover:border-amber-500 text-amber-800 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5">
            Accueil
          </Link>
        </div>
      </article>

      <SigneCardPrint
        slug={sign.id} nom={sign.nomPrincipal} numero={sign.position}
        symbole={sign.figureSymbolique.colonnes} type={sign.sexe ?? 'masculin'}
        element="" motsCles={sign.motsCles ?? []}
      />

      <Footer />
    </main>
  );
}
