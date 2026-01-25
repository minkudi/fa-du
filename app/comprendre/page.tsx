import Link from "next/link";

export default function ComprendrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-amber-900 text-white py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-amber-200 hover:text-white mb-4 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold">Comprendre le Fâ</h1>
          <p className="text-amber-200 mt-2">
            Découvrez les fondements du système de géomancie du golfe du Bénin
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Qu&apos;est-ce que le Fâ?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le Fâ est un système de géomancie ancestral pratiqué dans la région du golfe du Bénin. 
            C&apos;est une science divinatoire qui permet de comprendre les forces invisibles à l&apos;œuvre 
            dans la vie des hommes et de leur environnement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Reconnu comme patrimoine immatériel de l&apos;humanité, le Fâ n&apos;est pas un outil de 
            consultation mystique et ne remplace en aucun cas le travail des bokonon (devins). 
            Il s&apos;agit plutôt d&apos;un système de connaissance qui aide à mieux comprendre 
            les dynamiques de la vie.
          </p>
        </section>

        {/* Les 4 éléments */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Les 4 éléments fondamentaux</h2>
          <p className="text-gray-700 mb-6">
            Le Fâ repose sur quatre éléments impondérables qui donnent la vie sur terre:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">🔥</div>
                <h3 className="text-xl font-bold text-red-900">Feu</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Symbole:</strong> I (un trait)
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Nature:</strong> Élément mâle, créateur
              </p>
              <p className="text-gray-700">
                Commande les énergies de lumière. Représente l&apos;esprit, la force vitale, 
                le commencement.
              </p>
            </div>

            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">💨</div>
                <h3 className="text-xl font-bold text-blue-900">Air</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Symbole:</strong> I (un trait)
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Nature:</strong> Élément mâle, créateur
              </p>
              <p className="text-gray-700">
                Commande les énergies de son. Représente l&apos;esprit, la communication, 
                le mouvement.
              </p>
            </div>

            <div className="border-2 border-cyan-200 rounded-lg p-6 bg-cyan-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">💧</div>
                <h3 className="text-xl font-bold text-cyan-900">Eau</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Symbole:</strong> II (deux traits)
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Nature:</strong> Élément femelle, récepteur
              </p>
              <p className="text-gray-700">
                Source de vie. Commande toutes les énergies de vie. Représente la matière, 
                la fertilité, la réceptivité.
              </p>
            </div>

            <div className="border-2 border-amber-200 rounded-lg p-6 bg-amber-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">🌍</div>
                <h3 className="text-xl font-bold text-amber-900">Terre</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Symbole:</strong> II (deux traits)
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Nature:</strong> Élément femelle, récepteur
              </p>
              <p className="text-gray-700">
                Source de mort et de transformation. Commande les énergies d&apos;absorption, 
                de changement et de régénération.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-amber-100 p-6 rounded-lg">
            <p className="text-gray-800 text-center">
              <strong className="text-amber-900">Principe fondamental:</strong> Les éléments d&apos;en haut 
              (feu et air = esprit) viennent féconder ceux d&apos;en bas (eau et terre = matière) pour créer la vie.
            </p>
          </div>
        </section>

        {/* Comment lire les signes */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Comment lire les signes?</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Structure d&apos;un signe</h3>
              <p className="text-gray-700 mb-4">
                Chaque signe est composé de 4 lignes organisées en 2 colonnes. 
                Les lignes représentent les 4 éléments de haut en bas:
              </p>
              <div className="bg-amber-50 p-6 rounded-lg">
                <div className="flex gap-8 items-center justify-center">
                  <div className="font-mono text-2xl text-amber-900">
                    <div>I → Feu</div>
                    <div>I → Air</div>
                    <div>II → Eau</div>
                    <div>II → Terre</div>
                  </div>
                  <div className="font-mono text-2xl text-amber-900">
                    <div>I → Feu</div>
                    <div>I → Air</div>
                    <div>II → Eau</div>
                    <div>II → Terre</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Lecture du Fâ</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span>On lit le Fâ de <strong>droite à gauche</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span>Le signe à <strong>droite</strong> est le plus fort (élément principal)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span>Le signe à <strong>gauche</strong> est la &ldquo;compagnie&rdquo; (maison d&apos;accueil)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span>La compagnie modifie en bien ou en mal le signe principal</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Les 16 signes-mères */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Les 16 signes-mères (Dou-Médji)</h2>
          <p className="text-gray-700 mb-4">
            Les 16 signes principaux sont appelés <strong>signes-mères</strong> ou <strong>Dou-Médji</strong> 
            (dieux-doubles). Ils représentent les hiérarchies supérieures où chaque type de manifestation 
            atteint sa puissance maximum.
          </p>
          <p className="text-gray-700 mb-6">
            Chaque signe-mère, en se combinant avec les 16 signes (y compris lui-même), 
            produit 16 combinaisons. Au total: <strong>16 × 16 = 256 signes</strong>.
          </p>

          <div className="bg-amber-50 p-6 rounded-lg">
            <p className="text-gray-800">
              <strong className="text-amber-900">Signes-mères (16):</strong> Quand un signe se double 
              par lui-même, il atteint sa puissance maximum. Exemple: GBE-MEDJI.
            </p>
            <p className="text-gray-800 mt-3">
              <strong className="text-amber-900">Vikandos (240):</strong> Combinaisons de deux signes différents. 
              Exemple: GBE-YEKOU (GBE dans la maison de YEKOU).
            </p>
          </div>
        </section>

        {/* Jour et nuit */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Signes de jour et signes de nuit</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-yellow-300 rounded-lg p-6 bg-yellow-50">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">☀️ Signes de jour (GBE et dérivés)</h3>
              <p className="text-gray-700 mb-3">
                Dérivés de GBE-MEDJI, le premier signe de vie et de lumière.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• GBE-MEDJI (vie, lumière)</li>
                <li>• GUDA-MEDJI (voyage)</li>
                <li>• SA-MEDJI (justice)</li>
                <li>• TULA-MEDJI (chaos)</li>
                <li>• LETE-MEDJI (bénédiction)</li>
                <li>• WOLI-MEDJI (patience)</li>
                <li>• WINLIN-MEDJI (changement)</li>
                <li>• LOSSO-MEDJI (stabilité)</li>
              </ul>
            </div>

            <div className="border-2 border-slate-300 rounded-lg p-6 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-3">🌙 Signes de nuit (YEKOU et dérivés)</h3>
              <p className="text-gray-700 mb-3">
                Dérivés de YEKOU-MEDJI, signe de mort et de mystère.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• YEKOU-MEDJI (mort, transformation)</li>
                <li>• ABLA-MEDJI (force)</li>
                <li>• AKLAN-MEDJI (guerre)</li>
                <li>• KA-MEDJI (communication)</li>
                <li>• TRUKPIN-MEDJI (mystère)</li>
                <li>• DI-MEDJI (richesse)</li>
                <li>• TCHE-MEDJI (dualité)</li>
                <li>• FU-MEDJI (longévité)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Origine et histoire */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Origine et histoire</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Le Fâ tire ses origines de la <strong>loi du triangle</strong> et de la 
              <strong> science des nombres</strong>, connaissances ancestrales communes à plusieurs 
              civilisations anciennes.
            </p>
            <p>
                           Selon les recherches, cette science serait liée aux enseignements de Pythagore 
              (&ldquo;Au commencement, Dieu géométrisa&rdquo;), à la Kabbale hébraïque, et à d&apos;autres 
              systèmes de pensée anciens.
            </p>
            <p>
              Le système a été transmis de génération en génération par les <strong>Bokonon</strong> 
              (maîtres géomanciens) à travers un enseignement oral et initiatique, préservant ainsi 
              ce patrimoine immatériel jusqu&apos;à nos jours.
            </p>
          </div>
        </section>

        {/* La loi du triangle */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">La loi du triangle</h2>
          <div className="bg-amber-50 p-6 rounded-lg mb-4">
            <p className="text-center text-gray-700 mb-4">
              <strong className="text-amber-900">1 + 2 + 3 + 4 = 10</strong>
            </p>
            <p className="text-gray-700 text-center">
              Les 4 éléments, par addition théosophique, donnent 10 (la totalité).
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            Le nombre 4 porté au maximum de sa puissance (4 × 4) donne <strong>16 combinaisons 
            élémentaires</strong>, soit les 16 signes principaux.
          </p>
          <p className="text-gray-700">
            Chaque signe, en se combinant avec les 16 signes, produit 16 variantes. 
            Au total: <strong>16 × 16 = 256 combinaisons possibles</strong>, représentant toutes 
            les manifestations de la vie.
          </p>
        </section>

        {/* Les 256 signes */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Les 256 signes du Fâ</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                16
              </div>
              <div>
                <h3 className="font-bold text-amber-900 mb-1">Signes-mères (Dou-Médji)</h3>
                <p className="text-gray-700">
                  Quand un signe se double par lui-même, il atteint sa puissance maximum. 
                  Ce sont les arcanes majeurs, les hiérarchies supérieures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                240
              </div>
              <div>
                <h3 className="font-bold text-amber-900 mb-1">Vikandos (Signes secondaires)</h3>
                <p className="text-gray-700">
                  Combinaisons de deux signes différents. Le signe principal (à droite) 
                  est modifié par la maison d&apos;accueil (à gauche).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-amber-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                256
              </div>
              <div>
                <h3 className="font-bold text-amber-900 mb-1">Total des signes</h3>
                <p className="text-gray-700">
                  L&apos;ensemble complet représente toutes les formes possibles de manifestation 
                  de la vie dans notre monde terrestre.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission de FÂ DÜ */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Notre mission</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong className="text-amber-900">FÂ DÜ</strong> a pour mission d&apos;expliquer 
              les 16 signes-mères du Fâ, leurs significations symboliques, et progressivement 
              ouvrir vers une compréhension plus large des 256 combinaisons.
            </p>
            <p>
              Le tout avec des mots simples, des visuels modernes et des contenus accessibles à tous, 
              que vous soyez au Bénin, dans la diaspora africaine ou simplement curieux des systèmes 
              de pensée africains.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
              <p className="text-amber-900 font-semibold">
                ⚠️ Important: FÂ DÜ n&apos;est pas un outil de consultation mystique et ne remplace 
                en aucun cas le travail des bokonon (devins). Nous ne faisons pas de rituels, 
                nous n&apos;offrons pas de &ldquo;lectures&rdquo; personnelles et nous ne prétendons pas prédire l&apos;avenir.
              </p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Link
            href="/signes"
            className="inline-block bg-amber-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition shadow-lg"
          >
            Découvrir les 16 signes-mères →
          </Link>
        </div>
      </div>
    </main>
  );
}
