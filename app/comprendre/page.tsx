import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ComprendrePage() {
  return (
    <main className="min-h-screen bg-amber-50 text-amber-900">
      <Navbar />

      <header className="pt-32 pb-14 px-4 border-b border-amber-200 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-500 text-[11px] tracking-[0.35em] uppercase font-semibold mb-3">Fondements</p>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-3">Comprendre le Fâ</h1>
          <p className="text-amber-700 text-sm max-w-xl leading-relaxed">
            Le système de géomancie ancestral du golfe du Bénin — ses structures, ses éléments, sa logique.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-14 space-y-5">

        {/* Qu'est-ce que le Fâ */}
        <section className="bg-white border border-amber-200 rounded-2xl p-8 hover:border-amber-300 transition-colors">
          <h2 className="text-xl font-bold text-amber-800 mb-4">Qu&apos;est-ce que le Fâ ?</h2>
          <p className="text-amber-800/80 leading-relaxed mb-4 text-sm">
            Le Fâ est un système de géomancie ancestral pratiqué dans la région du golfe du Bénin.
            C&apos;est une science divinatoire qui permet de comprendre les forces invisibles à l&apos;œuvre
            dans la vie des hommes et de leur environnement.
          </p>
          <p className="text-amber-700/70 leading-relaxed text-sm">
            Reconnu comme patrimoine immatériel de l&apos;humanité, le Fâ n&apos;est pas un outil de
            consultation mystique et ne remplace en aucun cas le travail des bokonon (devins).
          </p>
        </section>

        {/* Les 4 éléments */}
        <section className="bg-white border border-amber-200 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-amber-800 mb-6">Les 4 éléments fondamentaux</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { el:"Feu",   sym:"I",  nat:"Mâle — créateur",   desc:"Commande les énergies de lumière. Représente l'esprit, la force vitale.",   c:"border-orange-200 bg-orange-50/60" },
              { el:"Air",   sym:"I",  nat:"Mâle — créateur",   desc:"Commande les énergies de son. Représente la communication, le mouvement.",   c:"border-blue-200 bg-blue-50/60" },
              { el:"Eau",   sym:"II", nat:"Femelle — récepteur",desc:"Source de vie. Représente la matière, la fertilité, la réceptivité.",       c:"border-cyan-200 bg-cyan-50/60" },
              { el:"Terre", sym:"II", nat:"Femelle — récepteur",desc:"Source de transformation. Commande les énergies d'absorption et régénération.", c:"border-amber-200 bg-amber-50" },
            ].map((e, i) => (
              <div key={i} className={`rounded-xl p-5 border ${e.c}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-amber-900">{e.el}</span>
                  <span className="font-mono text-amber-600 font-bold text-sm bg-white/80 px-2 py-0.5 rounded">{e.sym}</span>
                </div>
                <p className="text-amber-600/70 text-xs mb-2 uppercase tracking-wide">{e.nat}</p>
                <p className="text-amber-800/70 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
            <p className="text-amber-800 text-sm">
              <span className="font-semibold">Principe fondamental :</span> Les éléments d&apos;en haut (feu et air = esprit) viennent féconder ceux d&apos;en bas (eau et terre = matière) pour créer la vie.
            </p>
          </div>
        </section>

        {/* Comment lire */}
        <section className="bg-white border border-amber-200 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-amber-800 mb-6">Comment lire les signes ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-amber-900 mb-3 text-sm">Structure d&apos;un signe</h3>
              <p className="text-amber-700/70 text-sm mb-4 leading-relaxed">
                Chaque signe est composé de 4 lignes en 2 colonnes. Les lignes représentent les 4 éléments de haut en bas.
              </p>
              <div className="bg-amber-50 rounded-xl p-5 flex gap-10 justify-center border border-amber-100">
                {[0,1].map(col => (
                  <div key={col} className="flex flex-col gap-2">
                    {["Feu","Air","Eau","Terre"].map((el, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-amber-400/60 text-[10px] w-8">{el}</span>
                        <span className="font-mono text-amber-700 font-bold text-sm">{i < 2 ? "I" : "II"}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-3 text-sm">Règles de lecture</h3>
              <ul className="space-y-3">
                {[
                  "On lit le Fâ de droite à gauche",
                  "Le signe à droite est le plus fort (élément principal)",
                  "Le signe à gauche est la maison d'accueil (compagnie)",
                  "La compagnie modifie en bien ou en mal le signe principal",
                ].map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-amber-800/75">
                    <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">—</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 16 signes-mères */}
        <section className="bg-white border border-amber-200 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-amber-800 mb-4">Les 16 signes-mères (Dou-Médji)</h2>
          <p className="text-amber-700/70 text-sm leading-relaxed mb-4">
            Les 16 signes principaux représentent les hiérarchies supérieures où chaque type de manifestation atteint sa puissance maximum.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="text-sm text-amber-800">
                <span className="font-semibold text-amber-700">Signes-mères (16) :</span> Quand un signe se double par lui-même → puissance maximale. Ex : GBÉ-MÊDJI.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="text-sm text-amber-800">
                <span className="font-semibold text-amber-700">Vikandos (240) :</span> Combinaisons de deux signes différents. Ex : GBÉ-YÈKOU.
              </p>
            </div>
          </div>
        </section>

        {/* Jour et nuit */}
        <section className="bg-white border border-amber-200 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-amber-800 mb-6">Signes de jour et signes de nuit</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-amber-300/60 bg-amber-50 rounded-xl p-5">
              <h3 className="text-amber-700 font-semibold text-sm mb-3">Signes de jour</h3>
              <ul className="space-y-1">
                {["GBÉ-MÊDJI","GUDA-MÊDJI","SA-MÊDJI","TULA-MÊDJI","LÈTÈ-MÊDJI","WOLI-MÊDJI","WINLIN-MÊDJI","LOSSO-MÊDJI"].map(s => (
                  <li key={s} className="flex items-center gap-2 text-amber-800 text-xs">
                    <span className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0"/>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-amber-200 bg-white rounded-xl p-5">
              <h3 className="text-amber-700 font-semibold text-sm mb-3">Signes de nuit</h3>
              <ul className="space-y-1">
                {["YÈKOU-MÊDJI","ABLA-MÊDJI","AKLAN-MÊDJI","KA-MÊDJI","TRUKPIN-MÊDJI","DI-MÊDJI","TCHE-MÊDJI","FU-MÊDJI"].map(s => (
                  <li key={s} className="flex items-center gap-2 text-amber-800 text-xs">
                    <span className="w-1 h-1 rounded-full bg-amber-300 flex-shrink-0"/>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Loi du triangle */}
        <section className="bg-white border border-amber-200 rounded-2xl p-8">
          <p className="text-amber-700/70 text-sm leading-relaxed">
            4 × 4 = <span className="font-semibold text-amber-800">16 signes-mères</span>. Chacun se combinant avec les 16, on obtient <span className="font-semibold text-amber-800">16 × 16 = 256 signes</span> au total — toutes les manifestations possibles de la vie.
          </p>
        </section>

        <div className="text-center py-4">
          <Link href="/signes" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
            Découvrir les 16 signes-mères →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
