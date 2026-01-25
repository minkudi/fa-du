import Link from "next/link";

export default function FaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-amber-900 text-white py-6 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-amber-200 hover:text-white mb-2 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold">C&apos;est quoi le Fâ ?</h1>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
          <p className="text-xl text-gray-800 leading-relaxed mb-6">
            Le Fâ est un système de géomancie divinatoire pratiqué depuis des siècles par les peuples 
            Fon, Goun, Mahi et Yoruba dans la région du golfe du Bénin. Contrairement aux idées reçues, 
            ce n&apos;est pas de la &quot;magie noire&quot; ou de la superstition, mais une véritable science symbolique 
            structurée.
          </p>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">
            Un système basé sur 16 signes fondamentaux
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le Fâ repose sur 16 signes de base appelés &quot;signes-mères&quot; (Dou-mèdji), représentés par 
            des combinaisons de traits disposés en deux colonnes de quatre éléments. Ces 16 signes 
            peuvent se combiner entre eux pour former 256 configurations au total.
          </p>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">
            Le messager de l&apos;Être Suprême
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dans la cosmologie des peuples du Sud-Bénin, le Fâ est considéré comme le messager de 
            l&apos;Être Suprême (Mawu-Lissa). Il a pour mission de communiquer aux humains les desseins 
            divins et d&apos;éclairer les décisions importantes de la vie: mariage, naissance, maladie, 
            choix de carrière, résolution de conflits.
          </p>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">
            Plus qu&apos;une prédiction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le Fâ ne se limite pas à &quot;prédire l&apos;avenir&quot;. Il analyse les situations, révèle les causes 
            cachées des problèmes et prescrit des actions concrètes (sacrifices, comportements à adopter, 
            interdits à respecter) pour rétablir l&apos;équilibre et favoriser le bien-être.
          </p>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">
            Les gardiens du savoir: les bokonon
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Seuls les bokonon, formés durant de longues années d&apos;initiation, maîtrisent le langage du 
            Fâ et peuvent interpréter correctement ses signes. Le Fâ utilise des supports matériels: 
            noix sacrées, chaînes divinatoires ou tracés sur le sable.
          </p>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">
            Un patrimoine mondial
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Reconnu par l&apos;UNESCO comme patrimoine immatériel de l&apos;humanité, le Fâ fait partie des grands 
            systèmes de divination du monde, au même titre que le Yi King chinois, l&apos;astrologie ou le tarot.
          </p>

          <div className="mt-12 pt-8 border-t-2 border-amber-200">
            <Link
              href="/signes"
              className="inline-block bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition"
            >
              Découvrir les 16 signes-mères →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
