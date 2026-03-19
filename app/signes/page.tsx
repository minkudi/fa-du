import Link from "next/link";
import { faMotherSigns } from "@/data/faSigns";
import { FaSignSymbol } from "@/components/FaSymbol";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SignesPage() {
  return (
    <main className="min-h-screen bg-amber-50 text-amber-900">
      <Navbar />

      {/* Header */}
      <header className="pt-32 pb-14 px-4 border-b border-amber-200 bg-white/60">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-500 text-[11px] tracking-[0.35em] uppercase font-semibold mb-3">
            Dougans — Signes mères
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900">
              Les 16 signes-mères du Fâ
            </h1>
            <p className="text-amber-700 text-sm max-w-xs leading-relaxed">
              Chaque signe porte des significations symboliques profondes et 15 combinaisons uniques.
            </p>
          </div>
        </div>
      </header>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {faMotherSigns.map((sign, i) => (
            <Link
              key={sign.id}
              href={`/signes/${sign.id}`}
              className="group block bg-white border border-amber-200 hover:border-amber-500 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono text-amber-400 group-hover:text-amber-600 transition-colors">
                  {String(sign.position).padStart(2, "0")}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${
                  sign.sexe === "feminin"
                    ? "border-violet-300 text-violet-600 bg-violet-50"
                    : "border-amber-300 text-amber-700 bg-amber-50"
                }`}>
                  {sign.sexe === "feminin" ? "féminin" : "masculin"}
                </span>
              </div>

              <h3 className="text-sm font-bold text-amber-900 group-hover:text-amber-600 transition-colors mb-4 tracking-wide">
                {sign.nomPrincipal}
              </h3>

              <div className="py-5 bg-amber-50 rounded-xl mb-4 flex items-center justify-center border border-amber-100 group-hover:border-amber-300 transition-colors">
                <FaSignSymbol colonnes={sign.figureSymbolique.colonnes} size="md" />
              </div>

              {sign.motsCles && sign.motsCles.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {sign.motsCles.slice(0, 3).map((mot, idx) => (
                    <span key={idx} className="text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                      {mot}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-xs text-amber-400 group-hover:text-amber-600 transition-colors font-medium">
                Explorer ce signe →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
