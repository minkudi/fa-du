import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="bg-amber-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">FÂ DÜ</h1>
          <p className="text-xl text-amber-100 mb-8">
            Patrimoine immatériel du golfe du Bénin
          </p>
          <p className="text-lg text-amber-200 max-w-2xl mx-auto mb-8">
            Découvrez le système du Fâ, pratique ancestrale de géomancie du golfe du Bénin, 
            reconnue comme patrimoine immatériel de l&apos;humanité.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/comprendre"
              className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition shadow-lg"
            >
              Comprendre le Fâ
            </Link>
            <Link
              href="/signes"
              className="bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition shadow-lg border-2 border-amber-600"
            >
              Découvrir les 16 signes
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Le système du Fâ en chiffres
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 shadow-lg text-center">
              <div className="text-6xl font-bold text-amber-900 mb-3">256</div>
              <p className="text-amber-800 font-semibold text-lg mb-2">Signes au total</p>
              <p className="text-sm text-gray-600">
                Toutes les combinaisons possibles représentant les manifestations de la vie
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 shadow-lg text-center">
              <div className="text-6xl font-bold text-amber-900 mb-3">16</div>
              <p className="text-amber-800 font-semibold text-lg mb-2">Signes-mères</p>
              <p className="text-sm text-gray-600">
                Les hiérarchies supérieures (Dou-Médji) en puissance maximum
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 shadow-lg text-center">
              <div className="text-6xl font-bold text-amber-900 mb-3">4</div>
              <p className="text-amber-800 font-semibold text-lg mb-2">Éléments</p>
              <p className="text-sm text-gray-600">
                Feu, Air, Eau, Terre - fondements de toute vie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FÂ DÜ Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Découvrez le système du Fâ
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            FÂ DÜ est un projet numérique qui rend accessible le système du Fâ, pratique 
            ancestrale de géomancie du golfe du Bénin, reconnue comme patrimoine immatériel 
            de l&apos;humanité.
          </p>
        </div>
      </section>

      {/* Notre mission */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Notre mission</h2>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-gray-700 leading-relaxed mb-4 text-center">
              Pendant longtemps, le Fâ a été mal compris, caricaturé ou réservé aux seuls initiés. 
              Que vous soyez au Bénin, dans la diaspora africaine ou simplement curieux des systèmes 
              de pensée africains, il existe peu d&apos;espaces pour découvrir ce savoir de manière claire, 
              structurée et respectueuse.
            </p>
            <p className="text-gray-700 leading-relaxed text-center">
              FÂ DÜ n&apos;est pas un outil de consultation mystique et ne remplace en aucun cas le 
              travail des bokonon (devins). Nous ne faisons pas de rituels, nous n&apos;offrons pas 
              de &ldquo;lectures&rdquo; personnelles et nous ne prétendons pas prédire l&apos;avenir.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-8 rounded-lg max-w-3xl mx-auto">
            <p className="text-gray-800 text-lg leading-relaxed">
              Notre mission est simple: <strong className="text-amber-900">expliquer les 16 signes &ldquo;mères&rdquo; du Fâ, leurs 
              significations symboliques, et progressivement ouvrir vers une compréhension plus large 
              des 256 combinaisons</strong>. Le tout avec des mots simples, des visuels modernes et 
              des contenus accessibles à tous.
            </p>
          </div>
        </div>
      </section>

      {/* Pour qui? */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Pour qui?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-4 text-center">🔍</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3 text-center">Redécouvrir</h3>
              <p className="text-gray-700 text-center">
                Pour ceux qui veulent se reconnecter à cette richesse culturelle
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-4 text-center">🏛️</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3 text-center">Valoriser</h3>
              <p className="text-gray-700 text-center">
                Pour les institutions qui cherchent des outils pédagogiques pour le patrimoine
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-4 text-center">🌍</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3 text-center">Explorer</h3>
              <p className="text-gray-700 text-center">
                Pour toute personne intéressée par les savoirs traditionnels africains
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Comment ça marche?</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Explorez les 16 signes-mères</h3>
                <p className="text-gray-700">
                  Commencez par découvrir les 16 signes principaux, leurs symboles et leurs significations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Approfondissez un signe</h3>
                <p className="text-gray-700">
                  Cliquez sur un signe pour voir ses détails complets et ses 15 combinaisons possibles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Découvrez les combinaisons</h3>
                <p className="text-gray-700">
                  Explorez comment deux signes se combinent pour créer des significations uniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Prêt à explorer?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Commencez votre voyage dans l&apos;univers du Fâ
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/comprendre"
              className="bg-amber-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition shadow-lg"
            >
              Comprendre le Fâ
            </Link>
            <Link
              href="/signes"
              className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg border-2 border-amber-900 hover:bg-amber-50 transition shadow-lg"
            >
              Découvrir les 16 signes
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-amber-200">
            © 2026 FÂ DÜ - Valorisation du patrimoine immatériel du golfe du Bénin
          </p>
        </div>
      </footer>
    </main>
  );
}
