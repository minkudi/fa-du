import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-amber-900 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold">FÂ DÜ</h1>
          <p className="text-amber-200 mt-2">Patrimoine immatériel du golfe du Bénin</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">
            Découvrez le système du Fâ
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            FÂ DÜ est un projet numérique qui rend accessible le système du Fâ, 
            pratique ancestrale de géomancie du golfe du Bénin, reconnue comme 
            patrimoine immatériel de l&apos;humanité.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/fa"
            className="bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition text-center"
          >
            Comprendre le Fâ
          </Link>
          <Link
            href="/signes"
            className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold border-2 border-amber-900 hover:bg-amber-50 transition text-center"
          >
            Découvrir les 16 signes
          </Link>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Notre mission</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pendant longtemps, le Fâ a été mal compris, caricaturé ou réservé aux seuls initiés. 
            Que vous soyez au Bénin, dans la diaspora africaine ou simplement curieux des systèmes 
            de pensée africains, il existe peu d&apos;espaces pour découvrir ce savoir de manière claire, 
            structurée et respectueuse.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            FÂ DÜ n&apos;est pas un outil de consultation mystique et ne remplace en aucun cas le travail 
            des bokonon (devins). Nous ne faisons pas de rituels, nous n&apos;offrons pas de &quot;lectures&quot; 
            personnelles et nous ne prétendons pas prédire l&apos;avenir.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Notre mission est simple: expliquer les 16 signes &quot;mères&quot; du Fâ, leurs significations 
            symboliques, et progressivement ouvrir vers une compréhension plus large des 256 combinaisons. 
            Le tout avec des mots simples, des visuels modernes et des contenus accessibles à tous.
          </p>
        </div>

        {/* Target Audience */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-200">
            <h4 className="text-xl font-bold text-amber-900 mb-3">Redécouvrir</h4>
            <p className="text-gray-700">
              Pour ceux qui veulent se reconnecter à cette richesse culturelle
            </p>
          </div>
          <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-200">
            <h4 className="text-xl font-bold text-amber-900 mb-3">Valoriser</h4>
            <p className="text-gray-700">
              Pour les institutions qui cherchent des outils pédagogiques pour le patrimoine
            </p>
          </div>
          <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-200">
            <h4 className="text-xl font-bold text-amber-900 mb-3">Explorer</h4>
            <p className="text-gray-700">
              Pour toute personne intéressée par les savoirs traditionnels africains
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-amber-200">
            © 2026 FÂ DÜ - Valorisation du patrimoine immatériel du golfe du Bénin
          </p>
        </div>
      </footer>
    </main>
  );
}
