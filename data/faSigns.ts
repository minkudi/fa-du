export interface FaSign {
  position: number;
  id: string;
  nomPrincipal: string;
  figureSymbolique: {
    colonnes: number[][];
    description?: string;
  };
  resumeCourt?: string;
  motsCles?: string[];
  texteRue?: string;
  themesDeVie?: string[];
  tonGeneral?: "plutot_favorable" | "equilibre" | "plutot_difficile";
  
  // ✅ NOUVELLES PROPRIÉTÉS AJOUTÉES
  sexe?: "masculin" | "feminin";
  fetiches?: string[];
  feuillesLiturgiques?: string[];
  couleursPreferes?: string[];
  devises?: string[];
  interdits?: string[];
  sacrifices?: string[];
  commentaire?: string;
}

export const faMotherSigns: FaSign[] = [
  {
    position: 1,
    id: "gbe-medji",
    nomPrincipal: "GBÉ-MÊDJI",
    sexe: "masculin",
    figureSymbolique: {
      colonnes: [[1, 1, 1, 1], [1, 1, 1, 1]],
      description: "Deux colonnes pleines, symbole de force vitale qui circule bien.",
    },
    resumeCourt:
      "Signe de vie, de lumière et d'ouverture, il annonce souvent des débuts favorables mais demande de rester responsable et lucide.",
    motsCles: ["vie", "lumière", "ouverture", "chance", "responsabilité"],
    texteRue:
      "Gbé-Mêdji, c'est le signe de la vie qui s'ouvre. Il représente le commencement, la création, la lumière qui éclaire. Quand ce signe apparaît, ça parle souvent de nouvelles opportunités, de portes qui s'ouvrent, de projets qui peuvent bien démarrer. Mais attention: ce n'est pas un billet gratuit pour le succès. Gbe-Medji demande d'être sérieux, organisé et de ne pas gaspiller les chances qui se présentent.",
    themesDeVie: ["nouveau départ", "opportunité professionnelle", "début de projet", "croissance"],
    tonGeneral: "plutot_favorable",
    fetiches: ["Mahu-Lissa", "Dan", "Gbadu", "Hêbiosso", "Sakpata"],
    feuillesLiturgiques: ["Manioc", "Zuno", "Affama"],
    couleursPreferes: ["Blanc (principale, mais accepte toutes les couleurs)"],
    devises: [  
      "Agbagba Di Si Bo Gbe Go-Sodokpa Djo Ma Mou. La terre Agba-agba est recouverte d'eau. Les herbes y ont poussé, les montagnes s'y sont érigées en barrière et le vent qui souffle ne réussit pas à les renverser. Allusion faite à la création du monde.",
      "0 fa jiogbé ! Ali non su do aglavù vessu do fèli hoa, Ali no su do Aklassu ganga do fèli hoa- 0 fa jiogbé ! Jamais la route de fè (la mort) n'est fermée au chien. Jamais non plus la route de fè n'est fermée à aklassu (vautour) dans les airs.(Allusion faite au flair du chien devant la mort).",
      "Aklassu ganga wê jê nu kuku ji bo do émi jê jiogbé jio ! Aklassu fond sur un corps sans vie et dit : «Je suis tombé grâce à jiogbé, sur un cadavre»",
      "0 fa jiogbé ! so mo no jê Aguidigbahun do so nu mê 0 fa jiogbé ! Jamais la foudre n'atteint le rongeur Aguidigbahun ( Cochon d'Inde, Cobaye ) au cœur de la montagne. Le Fa vi sera protégé."
    ],
    interdits: [
      "Vin de palme (Attan)",
      "Chair du chien",
      "Chair du léopard",
      "Chair de l'éléphant",
      "Petit oiseau Titigoti (moineau)",
      "Aguidigbanhun ( Cochon d'Inde, Cobaye )",
      "Aklassu (vautour)",
      "Honsu-honsu",
      "Viande du coq (interdit commun à tous les signes majeurs)"
    ],
    sacrifices: ["Faire des sacrifices ou des offrandes, Adorer le fétiche Dan-Ayidohudo", "Adorer les fétiches Lissa et Tohossou"],
    commentaire: "Né dans Gbé, l'homme connaîtra un peu de souffrance, agira mal après avoir fait une bonne action. Il sera d'une audace particulière et d'une grande autorité. Il sera un bon guerrier ou lutteur riche, il connaîtra ou aura beaucoup de gloire et réussira dans tout ce qu'il entreprendra. Il sera juste, honnête et très fort. Il perdra une ou ses filles et si c'est une femme, l'un de ses fils mourra. Il sera goïste, mais d'une grande renommée."
  },
  {
    position: 2,
    id: "yekou-medji",
    nomPrincipal: "YÈKOU-MÊDJI",
    sexe: "feminin",
    figureSymbolique: {
      colonnes: [[2, 2, 2, 2], [2, 2, 2, 2]],
      description: "Deux colonnes doubles, symbole de la fin et de la nuit.",
    },
    resumeCourt: "Signe de fin de cycle et de transformation profonde.",
    motsCles: ["mort", "fin", "transformation", "passage", "recommencement"],
    texteRue:
      "Yèkou-Mêdji, c'est le signe qui dit \"quelque chose doit finir pour qu'autre chose commence\". Ça ne parle pas forcément de mort physique, mais plutôt de la fin d'une étape: un travail qui se termine, une relation qui s'arrête, une façon de vivre qui doit changer.",
    themesDeVie: ["fin de cycle", "deuil", "transformation", "acceptation"],
    tonGeneral: "equilibre",
    fetiches: ["Kulito ( culte des morts )", "Gbadu", "Tohossou", "Dan", "Sakpata", "Hêbiosso"],
    feuillesLiturgiques: ["Sisrèmà", "Gbagbada", "Ahwimà", "Yasséakù"],
    couleursPreferes: [],
    devises: [
      "Yèkou Mêdji ! Zan Ku ho dodo jiou. La nuit est tombée et les trous font peur. Allusion à la nuit et au royaume des morts, l'au-delà dont Yèkou est le maître.",
      "Go do atin hu ma hu atin. Go do kan hu man hu kan Akpa kaja ma hu tolo. La minceur de l'arbre ne tue pas l'arbre, le nœud de la corde ne tue pas la corde, les aspérités de la peau du crocodile ne tuent pas le crocodile. Le consultant échappera à la maladie, aux accidents et à ses ennemis.",
      "Hwé wèjayi do alangba, alangba hossou vilè yé no do: Kuwè ! Fa ayidéquouin do mi so hwè bo yi da- Kou dé mê an. Un poisson est tombé du ciel au pays alangba. Les enfants du roi se sont écriés c'est la mort et Fa ayidéquouin leur dit: Prenez ce poisson et allez le faire cuire, la mort n'a rien là-dedans.",
      "Zan non ku nu ku mô mon jê do avo wi mê an. L'œil ne peut voir à travers un pagne noir dans la nuit noire. La mort, les accidents et les ennemis n'atteindront guère le consultant s'il exécute correctement les sacrifices prescrits."
    ],
    interdits: [
      "Nu Ku Ku (viande de bêtes et d'oiseaux trouvés mort )",
      "Toute nourriture offerte en sacrifice aux kulito (culte des morts)",
      "Fruit noir de l'arbre fô",
      "Vin de palme",
      "Pagnes rouges",
      "Ne pas enfumer ou brûler les fourmis noires",
      "Ne pas utiliser pour les sacrifices des épines ou du bois d'un arbre à épines",
      "Viande de Honsu-Honsu, Aklassu, Dègbo, Afanku",
      "Chat",
      "Coq"
    ],
    sacrifices: ["Faire des offrandes aux kulito (culte des morts)", "Dan", "Tohossou", "Sovi"],
    commentaire: "Celui qui naît sous ce signe respecte la parole donnée. On peut lui faire confiance, mais il est bavard et indiscret. Très intelligent, il sera un bon chef qui aura la gloire et l'honneur. Aussi, sera-t-il populaire, mais connaîtra des déceptions. Grand voyageur, il passera très peu de temps dans sa ville natale. Turbulent et fort, il aura une longue vie, mais sera souvent malade."
  },
  {
    position: 3,
    id: "woli-medji",
    nomPrincipal: "WOLI-MÊDJI",
    sexe: "masculin",
    figureSymbolique: {
      colonnes: [[2, 1, 1, 2], [2, 1, 1, 2]],
      description: "Colonnes alternées, symbole de patience face aux épreuves.",
    },
    resumeCourt: "Signe de patience et de protection par l'effort.",
    motsCles: ["patience", "épreuves", "protection", "sacrifice", "sagesse"],
    texteRue:
      "Woli-Mêdji, c'est le signe qui te dit: \"La vie va te demander de tenir bon, de supporter un peu, de faire des efforts maintenant pour être protégé demain\".",
    themesDeVie: ["patience", "endurance", "protection", "sagesse"],
    tonGeneral: "plutot_difficile",
    fetiches: ["Gu", "Aguê", "Lissa", "Loko", "Tohossou"],
    feuillesLiturgiques: ["Wélékpékpé (fon)"],
    couleursPreferes: ["Marron tirant sur le rouge"],
    devises: [
      "Gbodo tomê na gnon é do gbodo hossu sito. La prospérité du pays gbodo ne dépendra que de son roi. Ainsi donc, le bonheur ou la réussite du consultant dépendra de lui-même.",
      "Akwè dé mê-dagbé dé mê-Afo no yi gbodo tomè an :Lan na wüi wé. Il y a des richesses et de bonnes choses, mais nul ne peut pénétrer dans le pays de gbodo. Les bêtes féroces le mangeraient.",
      "Ajanu hla é do yuyu ! é na du nu. Si l'hyène jappe, c'est qu'il cherche à manger. Le favi ne sera pas pauvre.",
      "Gbo dé do - gbo dé wê nô klon. L'oranger planté par l'un est arraché par l'autre. Un jour le Fa annonce que la maladie est grave, mais le lendemain, il dit qu'elle est bénigne.",
      "Gbodo tomê gnon lô hla nadufênu- é gna lan lô hla nadufênu. Mê é sè na nudé lé non ba kpoa. Que le pays gbodo soit bon ou mauvais, l'hyène y trouvera de quoi manger. Celui à qui Dieu a donné quelque chose l'obtient coup sûr."
    ],
    interdits: [
      "Tout animal trouvé mort ou tué par décapitation",
      "Adjagbé (pâte faite de feuilles du haricot et de la farine de maïs)",
      "Le vin de palme",
      "Viande du chien",
      "Adgbanlin (girafe)",
      "Hla (hyène)",
      "Adjinaku (éléphant)",
      "Coq (commun à tous les signes majeurs)"
    ],
    sacrifices: ["Adorer Gu, Tohossou, Kulito", "Kù di wo- Fo do", "Faire aussi des sacrifices de viande et de chapeau"],
    commentaire: "L'homme né sous le signe de Woli gagnera l'estime de tout le monde. Sa vie sera très rude pendant son enfance et sera très éclatante quand il grandira, avec un emploi très brillant. Ses projets seront réalisés et il cherchera à pratiquer toutes les religions. Son autorité sera incontestable sur sa famille. Il occupera une place de choix dans sa famille ou dans sa ville natale."
  },
  {
    position: 4,
    id: "di-medji",
    nomPrincipal: "DI-MÊDJI",
    sexe: "feminin",
    figureSymbolique: {
      colonnes: [[1, 2, 2, 1], [1, 2, 2, 1]],
      description: "Structure équilibrée, symbole de richesse et abondance matérielle.",
    },
    resumeCourt: "Signe de richesse, d'abondance et de prospérité. Apporte la responsabilité de bien gérer les biens matériels.",
    motsCles: ["richesse", "abondance", "responsabilité", "gestion", "prospérité"],
    texteRue:
      "Di-Mêdji, c'est le signe de l'argent et de la richesse. Il parle de gains financiers, d'opportunités d'affaires, de croissance matérielle. Mais avec la richesse vient la responsabilité: Di-Medji demande de bien gérer ses biens, de ne pas tomber dans la cupidité et de partager sa prospérité avec les autres.",
    themesDeVie: ["prospérité financière", "opportunité d'affaires", "gestion de patrimoine", "générosité"],
    tonGeneral: "plutot_favorable",
    fetiches: ["Na","Kinnesssi", "Jumeaux (Hoho)", "Gbadu", "Tohossou", "Lissa"],
    devises: [
      "Ku naho kpako, Azon naho kpako, huè naho kpako. La mort, la maladie et le procès ne peuvent t'atteindre.",
      "Kpô mô nô wili avoun do ganja mê. Le lopard n'attrape pas le chien enfermé dans une cage métallique résistante.",
      "Làn kloklo dé bu hun é yiba do gbaù, Ajotô nô fin Ku y sè do a. Si une grosse viande est perdue, allez la chercher sur la claie où on la fait cuire, Le voleur ne peut voler un mort et le dissimuler.",
      "Tô Kpo dé non dawa bo nô yi gba déô a. Une rive ne peut se déplacer pour aller faire la guerre à la rive opposée. (Le consultant possède des ennemis dans sa propre maison, mais ils ne pourront rien lui faire.)"
    ],
    interdits: [
      "Nà Nu Dà Nu (toute viande ou nourriture consacrée à Nà, Dà)",
      "Viande du coq (interdit commun à tous les signes)",
      "Azwi ou Azui (le lièvre)",
      "Viande de singes ",
      "Tous les jumeaux",
      "Gnibu (bœuf)",
      "Arbre Za, Kloukunpois d'angol",
      "Adjinaku (éléphant), Kinni Kinni (lion), Lopard (kpôvê), Hla (hyène), Alului"
    ],
    sacrifices: ["Être large et faire beaucoup de sacrifices", "Adorer Na-hoho (jumeaux)", "Kinnessi", "Tohossou"],
    commentaire: "Lorsqu'on est sous la dépendance de ce signe, on aura une bonne épouse. La réussite dans la vie est évidente, mais les peines et les difficultés seront nombreuses et de toutes natures. Lon fait en apparence, contre mauvaise fortune bon cœur et on garde ses peines secrètes. On a grande conscience professionnelle et l'on aime son prochain quel que soit son rang social."
  },
  {
    position: 5,
    id: "losso-medji",
    nomPrincipal: "LOSSO-MÊDJI",
    sexe: "masculin",
    figureSymbolique: {
      colonnes: [[1, 1, 2, 2], [1, 1, 2, 2]],
      description: "Progression ordonnée, symbole de construction stable et durable.",
    },
    resumeCourt: "Signe de stabilité, de construction et de fondations solides. Représente la patience dans l'édification.",
    motsCles: ["stabilité", "construction", "fondation", "patience", "progression"],
    texteRue:
      "Losso-Mêdji, c'est le signe du bâtisseur, de celui qui construit pierre par pierre. Il parle de créer quelque chose de solide, de durable, sans précipitation. C'est le signe des fondations, de la stabilité, du travail bien fait qui résiste au temps. Losso-Medji enseigne la patience et la persévérance dans la construction de projets.",
    themesDeVie: ["construction de projet", "stabilité familiale", "investissement durable", "patience créative"],
    tonGeneral: "plutot_favorable",
    fetiches: ["Hêbiosso", "Yalodé", "Dà", "Na", "Gu", "Tovodoun", "Lissa"],
    feuillesLiturgiques: ["Ologoncece (Yoruba)", "Kpakléssi (Fon)", "Xexemà", "Dindin fundin", "Amàjê"],
    devises: [
      "Akpà miàu, ho xè si. Gbè tô mi mô ahossu jà hun mi hon. Quand Akpà est en colère, tous les oiseaux s'envolent. Lorsque les hommes voient leur roi, ils le craignent.",
      "Nu kun mian nô ton kan àn. Qui dit œil rouge ne dit pas œil crevé. Il s'agit des souffrances qu'engendrent les épreuves de la vie. Le consultant connaîtra de la douleur, mais n'en mourra pas.",
      "Nu kun édo vê nû Attakin, é na nô sêwi do Akpamê àn. Les yeux qui se moquent des brûlures d'attakin ne se tiennent pas tranquilles dans leurs globes.",
      "Hon do gbê, Gué wê na gni Ahossua. Tant que Hon l'aigle est en vie, l'oiseau rouge Gu ne peut prendre le nom de roi."
    ],
    interdits: [
      "Tout ce qui est rouge (vêtement, meubles, bijoux, plumes de la queue de Kèsè (perroquet), teinture (Sokpakpê)",
      "Ne doit pas épouser une femme de teint clair, ni une Sakpatassi, ni Hêbiossossi",
      "Laiande de singes.",
      "Oiseaux Akpà, Drègbagwé, Gué, Aklassu, Ututu, Agbanlin (Girafe)",
      "Ne pas faire usage des fruits rouges Gogozotin et Cili vovo"
    ],
    sacrifices: [
      "Adorer les fétiches Hêbiosso, dà, Yalodé et Gu",
      "Faire des sacrifices de nu kun mian"
    ],
    commentaire: "Lorsqu'on est né sous le signe de losso, on est pauvre, indiscret, vindicatif, appliquant à la lettre la loi du talion. La vie ne sera pas sans vicissitudes et on aura beaucoup de difficultés. Persvérant, on aimera tout le monde et se confiera facilement à ses camarades. On sera beaucoup aidé par son intuition qui est très développée."
  },
  {
    position: 6,
    id: "winlin-medji",
    nomPrincipal: "WINLIN-MÊDJI",
    sexe: "feminin",
    figureSymbolique: {
      colonnes: [[2, 2, 1, 1], [2, 2, 1, 1]],
      description: "Inversion de Losso, symbole de renversement et changement brutal.",
    },
    resumeCourt: "Signe de renversement, de changement soudain et d'adaptation nécessaire.",
    motsCles: ["renversement", "changement", "adaptation", "souplesse", "évolution"],
    texteRue:
      "Winlin-Mêdji, c'est le signe qui dit \"tout peut basculer du jour au lendemain\". Il parle de changements soudains, de situations qui se renversent complètement. Ce qui était en haut se retrouve en bas et vice-versa. Ce n'est pas forcément négatif, mais ça demande une grande capacité d'adaptation. Winlin-Medji enseigne la souplesse et la capacité à rebondir.",
    themesDeVie: ["changement professionnel", "bouleversement de situation", "adaptation rapide", "résilience"],
    tonGeneral: "equilibre",
    fetiches: ["Sakpata", "Kinnessi", "Tohossou", "Dà", "Hoho (jumeaux)", "Lissa"],
    feuillesLiturgiques: ["Atoladola (yoruba)", "Godokô ou gninsinkin (fon)", "Mafowok omomi (Yoruba)"],
    devises: [
      "Attakin kpo li kpo si hu wa ahuandan àn. Attakin wa nu hu lihuan. Si Attakin (petits piments rouges) déclare la guerre à Li (mil), Attakin l'emportera toujours.",
      "Sè Lissa ma dégbé do to déa, ahuan nô gbaa. Sans l'ordre de Sè Lissa, la guerre ne brisera pas un pays.",
      "Zan mô nô nô aga nufindoh. La natte ordinaire findoh ne pose jamais sous une autre natte. Celle-ci est la plus jolie des deux. S'il entreprend une action avec quelqu'un, le consultant en profitera bien comme il risquera aussi d'enregistrer des difficultés.",
      "Ahuan mô nô gba Kuta. La guerre ne peut casser les rochers. Les ennemis ne peuvent rien contre le consultant."
    ],
    interdits: [
      "Viande de pintade (Sonu)",
      "Toutes sortes de nourritures consacrées au Vodun Sakpata",
      "Tous les mets grillés (nu mi mê)",
      "Le vin de palme, la bière de mil, de sorgho",
      "Viande d'éléphant (adjinaku)",
      "Viande de cheval (Sô)",
      "Viande d'hyène (hla)",
      "Viande de girafe (Agbanlin)",
      "Ne doit pas épouser une Sakpatassi",
      "Ne pas se laver dans la mer",
      "Ne pas porter des pagnes ou vêtements bigarrés ou de plus de deux couleurs"
    ],
    commentaire: "L'homme né Winlin est brutal, mais estimé de tout son entourage. Au début de sa vie, il souffrira pour être heureux après. Il sera franc, juste et correct envers tout le monde, puis sera riche et charitable. Il s'élèvera au-dessus de son milieu par son savoir-faire et le travail."
  },
  {
    position: 7,
    id: "abla-medji",
    nomPrincipal: "ABLA-MÊDJI",
    sexe: "masculin",
    figureSymbolique: {
      colonnes: [[1, 2, 2, 2], [1, 2, 2, 2]],
      description: "Prédominance d'éléments doubles, symbole de force et autorité.",
    },
    resumeCourt: "Signe de force, de pouvoir et d'autorité. Représente le leadership et l'influence.",
    motsCles: ["force", "pouvoir", "autorité", "leadership", "influence"],
    texteRue:
      "Abla-Mêdji, c'est le signe du chef, du leader, de celui qui a l'autorité. Il parle de pouvoir, d'influence, de capacité à diriger et à prendre des décisions importantes. Mais attention: le pouvoir sans sagesse peut devenir oppression. Abla-Medji demande d'exercer son autorité avec justice, équité et responsabilité envers ceux qu'on dirige.",
    themesDeVie: ["leadership", "autorité professionnelle", "influence sociale", "prise de décision", "responsabilité"],
    tonGeneral: "plutot_favorable",
    fetiches: ["Lissa", "Hoho (jumeaux)", "Tovodun", "Tohiyo (yoruba)", "Dan"],
    feuillesLiturgiques: ["Davonum (fon)"],
    couleursPreferes: ["Bleu clair"],
    devises: [
      "Afafa wê nô kon din huaa. C'est l'éventail qui sèche la sueur. Le favi sera défendu contre tous ses ennemis.",
      "Abla-jimê! Adjidja non ba kpôssi ho nô glo. Le porc-épic courtise la femelle du léopard et échappe aux crocs puissants du mâle. Le consultant, même s'il redoute un plus grand que lui, triomphera de toute lutte engagée contre lui par son ennemi.",
      "Suru ni n'jôba l'haoussa. L'homme patient devient roi du pays haoussa. Le consultant, dans son propre intérêt, devra observer constamment la patience",
      "Gnon nu wa n'dé ho dubla lô, Ajô ton nassu. La femme qui mange à deux râteliers s'expose à la mort. Si l'épouse du «favi» veut tromper son mari, elle mourra.",
      "Dagbé é do tôssié, Houa wê nô bê kô ton yi agué. C'est le poisson appelé «Houa» qui traîne ou draine jusqu'à la rive, la ressource de l'eau douce."
    ],
interdits: [
  "Viande de pintade (Sonu)",
  "Boule d'akassa",
  "Hluinsuvô",  
  "Coq",  
  "Agbogbo",
  "Agàgà",
  "Aklassu(Vautour)",
  "Singes",
  "Glinzin",
  "Dan (Serpent)",
  "Lo (Crocodile)",
  "Hla (hyène)",
  "Éléphant",
  "Léopard",
  "TÊ",
  "Vipère(Amanmônu)"
],
sacrifices: [
  "Adorer Lissa, Hoho (jumeaux), Tovodun et Dan",
  "Faire des offrandes aux divinités de l'eau"
],

    commentaire: "Celui qui est né sous le signe de Abia sera heureux, aura une bonne épouse et des enfants bien éduqués."
  },
  {
    position: 8,
    id: "aklan-medji",
    nomPrincipal: "AKLAN-MÊDJI",
    sexe: "masculin",
    figureSymbolique: {
      colonnes: [[2, 2, 2, 1], [2, 2, 2, 1]],
      description: "Force contrariée, symbole de guerre, lutte et confrontation.",
    },
    resumeCourt: "Signe de guerre, de combat et de confrontation. Demande courage et détermination face aux obstacles.",
    motsCles: ["guerre", "combat", "courage", "victoire", "confrontation"],
    texteRue:
      "Aklan-Mêdji, c'est le signe du guerrier, de celui qui doit se battre. Il parle de lutte, de combat, de situations difficiles où rien ne vient facilement. Ce n'est pas un signe de paix, mais de confrontation nécessaire. Aklan-Medji enseigne le courage, la détermination et la capacité à affronter l'adversité sans reculer, même quand c'est dur.",
    themesDeVie: ["lutte acharnée", "adversité", "courage face au danger", "défense de ses droits", "victoire difficile"],
    tonGeneral: "plutot_difficile",
fetiches: ["Hoho (jumeaux)", "Lègba", "Hêbiosso", "Dan", "Sakpata", "Tohossou"],
feuillesLiturgiques: ["Koklo dèkpadjè (fon)"],

    devises: [
      "Gan Kpatrè mon nô gnon klon. Deux morceaux de fer soudés ne peuvent être séparés. Les ennemis ne pourront rien contre le favi.",
      "Assin hluisin mô nô djè gan do alô kpakpa home hô nô tchi bi ayi. L'eau dont on se lave les mains est aussitôt jetée après la toilette. Tout ce que feront les ennemis contre le «favi» échouera",
      "Adôkpo sakotowé mà nô si kôdo, ho nù vitô xo tomé to nô jayi. Le contenu du sac fermant à coulisse, même retourné, ne tombe pas au sol. (Menace d'avortement pour la femme enceinte qu'il faut préserver).",
      "Dôh mô nô hu Aklaku dègbo. Le filet de pêche ne prend pas l'hippopotame. Le «favi» échappera toujours aux dangers et accidents."
    ],
    interdits: [
      "Viande de singe",
      "Haricot Akpakoun",
      "Attacher soi-même des fagots de bois",
      "Manger des boules d'akassa ",
      "Toucher à la liane «Agbakan»",
      "Chien, Coq, Léopard, Aklassu, Buffle",
      "Brûler le bois d'iroko"
    ],
    sacrifices: [],
    commentaire: "L'homme qui a vu le jour sous le signe de Aklan aura des honneurs, sera plein d'orgueil, tenace, fort aimé de tout le monde, pondéré et solitaire. En outre, il sera mélancolique, réfléchi, sûr de lui-même et fort avare de ses biens. Il aura beaucoup d'afflictions avant de connaître un bonheur durable. Des alternatives de haut et de bas. Longévité probable, mais en fonction des soins vigilants dont il devra entourer sa santé."
  },
  {
    position: 9,
    id: "guda-medji",
    nomPrincipal: "GUDA-MÊDJI",
    sexe: "masculin",
    figureSymbolique: {
      colonnes: [[1, 1, 1, 2], [1, 1, 1, 2]],
      description: "Mouvement ascendant, symbole de voyage et déplacement.",
    },
    resumeCourt: "Signe de voyage, de mouvement et d'exploration. Représente les déplacements et la découverte.",
    motsCles: ["voyage", "mouvement", "déplacement", "exploration", "découverte"],
    texteRue:
      "Guda-Mêdji, c'est le signe du voyageur, de celui qui bouge. Il parle de déplacements, de voyages, de changements de lieu. Ça peut être un voyage physique (déménagement, mission à l'étranger, déplacement professionnel) ou un voyage intérieur (évolution personnelle, découverte spirituelle). Guda-Medji enseigne l'ouverture au monde et à la nouveauté.",
    themesDeVie: ["voyage à l'étranger", "déménagement", "exploration", "ouverture culturelle", "évolution personnelle"],
    tonGeneral: "plutot_favorable",
fetiches: ["Dan", "Lègba", "Lissa", "Gu", "Hêbiosso"],
feuillesLiturgiques: [],
devises: [
"Attin Kpé gu ma jô lù. L'arbre qui croise avec le métal n'a pas bonne santé.",
"Gbétô si mô nô ké aké vô. Gà do lan oun. La femme du chasseur n'alerte pas l'entourage dans le vide. C'est qu'elle est sûre que la flèche de son mari a traversé le corps d'un animal. Le désir du consultant sera réalisé.",
"Attin do tôtô nô sa alin voa. Le bois courbé ne craint plus rien du rein. Le «favi» n'ayant plus l'érection normale, ne risque pourtant pas de se fatiguer les reins par le coït. (Un sacrifice prescrit et non exécuté par lui l'entraînerait à une déchéance sexuelle).",
"Gu égla wê nô gbo bô hun non ton Le couteau tranchant coupe et le sang jaillit. Le «favi» sera très puissant et réussira dans la vie.",
"Guda gaù. Lègba adigbà nô zinzin mô nô huédo toyomé. Guda entre en érection ! Si la verge de lègba Adigbà entre en érection, toutes les femmes du pays en seront servies. Le «favi» dont les fonctions sexuelles sont actuellement bonnes, sera prochainement menacé de déchéance.",
],

    interdits: [
      "Écureuil (Don, en fon)",
      "Tortue (Logozo, en fon)",
      "Maïs grillé",
      "Tabac",
      "Porc",
      "Igname pilée (Agou)",
      "Coq",
      "Hyène (Hla en fon)",
      "Viande de singes",
      "Vin de palme (ne jamais boire)",
      "Interdit de danser hors de chez soi.",
      "Interdit de porter des caleçons.",
      "Interdit de déposer fusil ou couteau près du lit, ou de porter sur soi des couteaux ou poignard.",
    ],
    sacrifices: [],
    commentaire: "Celui qui subit l'influence de ce signe sera ambitieux, irréfléchi et sera d'un esprit belliqueux. Il aura un dédain particulier pour tout le monde, puis connaîtra des heurts et des difficultés avec son entourage. Intelligent, il sera également père d'une nombreuse famille. Il aura le bonheur voire la richesse, mais trouvera une fin subite ou malheureuse."
  },
  {
    position: 10,
    id: "sa-medji",
    nomPrincipal: "SA-MÊDJI",
    sexe: "feminin",
    figureSymbolique: {
      colonnes: [[2, 1, 1, 1], [2, 1, 1, 1]],
      description: "Équilibre parfait, symbole de justice et vérité.",
    },
    resumeCourt: "Signe de justice, de vérité et d'équilibre. Représente la rectitude et l'équité.",
    motsCles: ["justice", "vérité", "équilibre", "rectitude", "clarté"],
    texteRue:
      "Sa-Mêdji ou «Osa-mêdji», c'est le signe de la balance, de la justice et de la vérité. Il parle de situations où il faut trancher, juger, décider avec équité. C'est le signe de la clarté morale, de l'honnêteté et de la rectitude. Sa-Medji enseigne à être juste dans ses jugements, à dire la vérité même quand c'est difficile, et à chercher l'équilibre dans toutes les situations.",
    themesDeVie: ["justice", "décision équitable", "dire la vérité", "médiation", "clarté morale"],
    tonGeneral: "plutot_favorable",
    fetiches: ["Gbadu", "Nâ", "Kinnessi", "Tohossou", "Yalodé", "Lissa", "Loko"],
    feuillesLiturgiques: ["Avôkanfunmâ", "Gnonussissi", "Zomà", "Zêzêmà", "Ajassiafôvê (fon)"],
    devises: [
      "Sa jimê ! tufè tufè wê do awo, tufè tufè wê na klon. Faire du mal au «favi» né sous ce signe, c'est s'attirer à soi-même de redoutables ennuis.",
      "Anà ba tin kpo, ho mêdji d'assamê. La nature a créé et situé la vulve entre les deux cuisses du sexe féminin.",
      "Nù na gnon nou awon doxe bê na won xwé ton akàma mèton.L'oiseau qui veut s'engluer a trouvé fortune et oublié son akàma. Souvent les hommes parvenus à la richesse oublient le moment où ils ont été pauvres. Le «favi» s'enrichira, mais oubliera bien vite les dures épreuves de la pauvreté.",
      "Sajimê! Bokônon djan dji wê n'dé. Je suis assis sur la chaise en bambou du devin. Le «favi» a des dispositions pour devenir lui aussi prêtre du Fa.",
    ],
    interdits: [    
      "Ne jamais regarder le sexe de sa conjointe",
      "Coq",
      "Chien",
      "Chat",
      "Offrandes aux Nà",   
      "Sorgho (Abôkun en fon)",   
      "Éléphant (Adjinaku en fon)",    
    ],
    sacrifices: [],
    commentaire: "Ceux nés sous ce signe devront abandonner l'eau des offrandes découlant d'une légende où l'eau joue un grand rôle."
  },
  {
    position: 11,
    id: "ka-medji",
    nomPrincipal: "KA-MÊDJI",
    sexe: "masculin",
    figureSymbolique: {
      colonnes: [[2, 1, 2, 2], [2, 1, 2, 2]],
      description: "Flux de communication, symbole de parole et message.",
    },
    resumeCourt: "Signe de communication, de parole et d'échange. Représente la transmission de messages.",
    motsCles: ["communication", "parole", "message", "relation", "échange"],
    texteRue:
      "Ka-Mêdji, c'est le signe du messager, de celui qui parle et transmet l'information. Il parle de communication, d'échanges, de discussions importantes, de négociations. C'est le signe des relations, du dialogue, de la capacité à bien s'exprimer et à se faire comprendre. Ka-Medji enseigne l'importance de la parole juste, de l'écoute et du dialogue constructif.",
    themesDeVie: ["communication efficace", "dialogue", "négociation", "enseignement", "transmission de savoir"],
    tonGeneral: "plutot_favorable",
fetiches: ["Lissa", "Dan", "Tohossou", "Hoho", "Hêbiosso"],
feuillesLiturgiques: ["Zuku-zwi", "Addw", "Alafya"],
    couleursPreferes: [],
    devises: [
      "Agban n dj ton gudo. Celui qui transporte les bagages (sacrifices) de tous les signes conduit à la fois ces bagages et les précède.",
      "Tch-Tula-Klbo n ho t d ni n gblaa. Si Klbo prononce la prière de son père, sa bénédiction se réalisera. Les vœux et les souhaits du consultant seront exaucés.",
      "Si Tohossou Lad (Souverain du pays) exprime même verbalement un ordre, ses sujets ne peuvent que l'exécuter.",
      "E m n do gb gban, ho n dida. On ne peut rassembler et faire porter par la chauve-souris tout le poids des malheurs de l'humanité.",
      "Sgbo Lissa n d gb n hu ni n gb tton n. C'est Sgbo Lissa qui prescrit et ses paroles se réaliseront."
    ],
interdits: [
  "Viande de chien",
  "Indiscrétion (ne pas révéler les secrets confiés)",
  "Mensonge",
  "Coq"
],
sacrifices: [
  "Adorer Lgba (le messager)",
  "Faire des offrandes à Dan et Lissa",
  "Sacrifices annuels aux divinités de la communication"
],
    commentaire: "Ce signe rend heureux et grand voyageur celui qu'il influence. Après de durs débuts, il arrivera à la réussite. Il vivra loin de sa terre natale."
  },
  {
    position: 12,
    id: "trukpin-medji",
    nomPrincipal: "TRUKPIN-MEDJI",
    sexe: "masculin",
    figureSymbolique: {
      colonnes: [[2, 2, 1, 2], [2, 2, 1, 2]],
      description: "Profondeur cachée, symbole de mystère et secret.",
    },
    resumeCourt: "Signe de mystère, de secret et d'initiation. Représente les connaissances profondes et cachées.",
    motsCles: ["mystère", "secret", "initiation", "profondeur", "connaissance"],
    texteRue:
      "Trukpin-Medji, c'est le signe des mystères et des secrets. Il parle de ce qui est caché, des connaissances profondes qui ne peuvent pas être révélées à tout le monde. C'est le signe de l'initiation, des savoirs ésotériques, des vérités gardées. Trukpin-Medji enseigne la discrétion, le respect du sacré et l'importance de protéger certaines connaissances.",
    themesDeVie: ["initiation spirituelle", "connaissance cachée", "mystère", "discrétion", "approfondissement"],
    tonGeneral: "equilibre",
    fetiches: ["Lgba"],
    feuillesLiturgiques: ["Zuku-zwi", "Addw"],
    couleursPreferes: ["Toutes les couleurs"],
    devises: [
      "Sa jim ! tuf tuf w do awo, tuf tuf w na klon. C'est la salive pulvérisée qui prépare la glu et qui la détache.",
      "An ba tin kpo, ho mdji dassam. La nature a créé et situé la vulve entre les deux cuisses du sexe féminin.",
      "Sajim! Boknon djan dji w nd. Je suis assis sur la chaise en bambou du devin. Le fa vi a des dispositions pour devenir lui aussi prtre du Fa.",
      "N na gnon nou awon doxe b na won xw ton akma mton. L'oiseau qui veut s'engluer a trouvé fortune et oublié son akma."
    ],
interdits: [
  "Révéler les secrets d'initiation",
  "Entrer dans les lieux sacrés sans permission",
  "Toucher aux objets rituels sans être initié",
  "Viande de serpent",
  "Coq"
],
sacrifices: [
  "Adorer Lgba",
  "Faire des offrandes aux ancêtres et aux initiés défunts",
  "Respecter les rituels d'initiation"
],

    commentaire: "Ce signe rend heureux et grand voyageur celui qu'il influence. Après de durs débuts, il arrivera à la réussite. Il vivra loin de sa terre natale, aura une bonne épouse. Le Favi a des dispositions pour devenir prêtre du Fa."
  },
  {
    position: 13,
    id: "tula-medji",
    nomPrincipal: "TULA-MEDJI",
    sexe: "masculin",
    figureSymbolique: {
      colonnes: [[1, 2, 1, 1], [1, 2, 1, 1]],
      description: "Désordre apparent, symbole de chaos créateur et purification.",
    },
    resumeCourt: "Signe de chaos, de désordre et de transformation radicale. Précède souvent une purification nécessaire.",
    motsCles: ["chaos", "désordre", "transformation", "purification", "renouveau"],
    texteRue:
      "Tula-Medji, c'est le signe du chaos créateur, du désordre qui précède le renouveau. Il parle de situations confuses, de moments où tout semble partir dans tous les sens. Mais ce chaos n'est pas mauvais: c'est souvent une purification nécessaire avant une renaissance. Tula-Medji enseigne que parfois il faut tout défaire pour pouvoir reconstruire mieux.",
    themesDeVie: ["transformation radicale", "purification", "renouveau complet", "chaos nécessaire", "renaissance"],
    tonGeneral: "plutot_difficile",
    fetiches: ["Lgba", "Dan", "Ajaguna", "Lissa", "Hoho", "G", "Tohossou"],
    feuillesLiturgiques: ["Alafya ou Fifam", "Dm"],
    couleursPreferes: ["Bleu", "Blanc", "Or", "Tacheté"],
    devises: [
      "Malnu d m n s h n d. Un musulman ne peut en adorer un autre. Le Fa vi n'aura pas à se soucier du rang social de ses interlocuteurs.",
      "B hluinsounv do hu ad a o dokpo o w n do kija na. Le bec dont le mange-mil se sert pour construire son nid est le même qu'il utilise pour le défaire.",
      "Gb bojo do! Hou m n wli soun ho n do wa nd! Laisse! Le soleil ne peut attraper la lune pour la torturer.",
      "Tula-mdji dit: A la afia-Allah Kubaru. Le Fa vi devra faire de nombreuses aumônes Saala.",
      "Aho kpon ma n kpo hl. Si us soit l'indigo, il réussit cependant à teindre l'étoffe."
    ],
    interdits: [
      "Indiscrétion",
      "Consommation de la viande de porc",
      "Vin de palme",
      "Port de couteau et de canif sur soi dans la poche",
      "Le burnous Agbada (ne pas s'en vêtir)"
    ],
    sacrifices: [
      "Adorer les ftiches Dan, Lgba et Lissa",
      "Faire de nombreuses aumônes",
      "Avoir chez soi un de ces petits autels de sable dont les musulmans se servent pour prier"
    ],
    commentaire: "N sous le signe de Tula, le sujet voyagera souvent et deviendra un chef d'une grande influence. Il s'adonnera fréquemment aux femmes, se donnant de sérieux ennemis s'il entretient toujours ce genre d'activité. Ceux nés sous ce même signe sont persévérants et travailleurs, sont indifférents aux malheureux événements et dédaignent leur entourage."
  },
  // Suite LETE-MEDJI
  {
    position: 14,
    id: "lete-medji",
    nomPrincipal: "LETE-MEDJI",
    sexe: "feminin",
    figureSymbolique: {
      colonnes: [[1, 1, 2, 1], [1, 1, 2, 1]],
      description: "Grâce divine, symbole de bénédiction et faveur.",
    },
    resumeCourt: "Signe de bénédiction, de faveur divine et de chance. Apporte la grâce et la protection.",
    motsCles: ["bénédiction", "faveur", "chance", "protection", "grâce"],
    texteRue:
      "Lete-Medji, c'est le signe des bénédictions et des faveurs divines. Il parle de chance, de grâces accordées, de situations où les choses se passent mieux que prévu. C'est le signe de la protection céleste, du moment où l'univers sourit. Lete-Medji enseigne la gratitude et l'humilité face aux bénédictions reçues.",
    themesDeVie: ["bénédiction divine", "faveur inattendue", "chance", "protection céleste", "grâce"],
    tonGeneral: "plutot_favorable",
    fetiches: ["Sakpata", "Hbiosso", "Na", "Gbadu", "D", "Lissa", "Azovowema (Fon)"],
    feuillesLiturgiques: ["Awiim", "Gnissinkin", "Akaya", "Tohossou"],
    couleursPreferes: ["Rouge", "Noir", "Gris", "Bleu", "Blanc"],
    devises: [
      "Boko dé gnon vo sa, kaka n hou aton m na su, n d na k, h n gbo dj. Hou m n wli ahossou. Ha avivia. Si les sacrifices imposés par la consultation sont bien exécutés par un devin accompli, cette observance entraînera en moins de trois ans la mort de son ennemi pour qu'il soit tranquille. Le soleil ardent n'éteint pourtant pas l'ombre qui règne.",
      "Zun d gla n zin wan dodo. Le martèlement de l'enclume, progressivement, parvient à l'enfoncer dans la terre. S'il est courageux et accomplit correctement les sacrifices prescrits, le consultant réussira à éliminer tous ses ennemis.",
      "Lt jim ! Akw adkpo ton, av adkpo ton, as si adkpo ton. Kl djgb na zn k n yom ho n gb. L'argent est au sac, tandis que les étoffes, les enfants et les femmes appartiennent au sac, c'est-à-dire la terre. Le favi conservera tout ce qu'il possède.",
      "Lt jim! Okl djgh zn k n yom ho n gh. Lt-Mdji, la terre insulte la mort par les organes de sa mère, mais la mort ne peut se venger d'elle.",
      "N go sin ji m n t ta a yi. Tout ce qui vient d'en haut doit poser la tête sur la terre, parce que la terre voit et reçoit tout ce qui tombe.",
      "Ami zin hd hd, h wiwl n n gl ton. La surface de l'huile de palme reposée est claire, mais il y a un dépôt très noir à la base."
    ],
    interdits: [],
    sacrifices: [],
    commentaire: "L'enfant né sous le signe de Lt sera beaucoup considéré par sa famille, ses parents et occupera une place importante dans sa ville natale. Courageux, il sera têtu, n'aura peur de rien, pas même de la mort. Il sera ambitieux, orgueilleux et rude."
  },
  {
    position: 15,
    id: "tche-medji",
    nomPrincipal: "TCHE-MEDJI",
    sexe: "masculin",
    figureSymbolique: {
      colonnes: [[1, 2, 1, 2], [1, 2, 1, 2]],
      description: "Alternance parfaite, symbole de dualité et de choix.",
    },
    resumeCourt: "Signe de dualité, de choix et de décision importante. Représente le carrefour où il faut choisir.",
    motsCles: ["dualité", "choix", "décision", "carrefour", "alternance"],
    texteRue:
      "Tche-Medji, c'est le signe du carrefour, du moment où il faut choisir entre deux voies. Il parle de dualité, de situations où on ne peut pas tout avoir et où il faut trancher. C'est le signe des grandes décisions de vie: quel métier choisir, quelle voie suivre, quelle personne épouser. Tche-Medji enseigne que choisir c'est aussi renoncer.",
    themesDeVie: ["choix de vie important", "carrefour professionnel", "décision cruciale", "dualité", "renoncement"],
    tonGeneral: "equilibre",
    fetiches: ["Sakpata", "Kinnessi", "Hbiosso", "Lissa", "G", "Tohossou"],
    feuillesLiturgiques: ["Nukunzaw", "Hansimlin", "Azloko", "Futukd"],
    couleursPreferes: ["Trois ensembles (n'importe lesquelles)"],
    devises: [
      "T mi m do n hiaha n m do Adjaghto-na du mi h e du mi kpla-likpiti n su ho. Ligname grillée dit à l'homme, auprès de la rivière Adjagb: Si tu veux me manger, dépêche-toi toi-même, sinon, celui qui bouche le trou avec son pied, la mort viendra t'ensevelir, t'empêcher de me manger. La réussite du consultant dépendra de sa prestance, de son habileté.",
      "M ta huhu do n hiaha n m ta hn m do nu do Adjaghto. Un vieux crâne humain dit à un jeune crâne humain, un jour, au bord de la rivière Adjagb: Moi je suis déjà sec. Si l'on me coupe, pas une goutte de sang ne coulera, mais toi, si on te fend, il en jaillira du sang.",
      "Tchjim! n tch wiwa, han tch djidji, aff tch did, ma n gnon. A m mi hn, m k. Tch! tout ce que j'accomplis, les chants que je chante, les pas que je fais, rien de tout cela n'est bon et indispose tout le monde. Si tu me vois tu vois donc la mort."
    ],
    interdits: [
      "Le maïs grillé (agbad mim), cause du craquement de la grillade qui attire la maladie",
      "Ligname grillée (t mi m), pour la même raison",
      "Pintade",
      "Colas sauf le blanc",
      "Zn s ou ass (perdrix)",
      "Tous les interdits de Sakpata (exemple: haricot mélangé avec du maïs, tout mélange de mets grillés)",
      "S'abstenir de porter des fagots de bois de chauffage sur la tête",
      "Toucher au bois consumé partiellement",
      "Les singes",
      "Le coq (commun aux signes majeurs)"
    ],
    sacrifices: [
      "Adorer Sakpata, N et Hbiosso",
      "E na gni azon, bo n dio k. Tous les ans, E na gni azon: faire des sacrifices et offrandes aux boknons et aux féticheurs"
    ],
    commentaire: "Lhomme sous l'influence de Tch deviendra un grand révolutionnaire, un prétentieux qui aimera la guerre, il souffrira un peu, mais obtiendra le bonheur plus tard. Devenu riche, la prodigalité le ruinera après. Les gens nés sous ce signe sont souvent les jouets de leurs sentiments. Ils sont inconstants dans leurs sentiments, ce qui ne leur favorise guère l'union."
  },
  {
    position: 16,
    id: "fu-medji",
    nomPrincipal: "FU-MEDJI",
    sexe: "feminin",
    figureSymbolique: {
      colonnes: [[2, 1, 2, 1], [2, 1, 2, 1]],
      description: "Alternance inverse, symbole de longévité et résistance dans le temps.",
    },
    resumeCourt: "Signe de longévité, de durée et de résistance. Représente ce qui traverse le temps sans s'altérer.",
    motsCles: ["longévité", "durée", "résistance", "persévérance", "survie"],
    texteRue:
      "Fu-Medji, c'est le signe de la longue vie, de la durée, de ce qui résiste au temps. Il parle de longévité, de santé durable, de projets qui tiennent dans la durée, de relations qui durent. C'est le signe de la persévérance, de la capacité à tenir bon sur le long terme. Fu-Medji enseigne que la vraie force n'est pas dans l'intensité mais dans la durée.",
    themesDeVie: ["longévité", "santé durable", "relation stable", "projet à long terme", "persévérance"],
    tonGeneral: "plutot_favorable",
    fetiches: ["Odu", "Lissa", "Mawu", "Na", "Hoho", "Sakpata", "Hbiosso", "G", "Loko", "Kpvodun"],
    feuillesLiturgiques: ["Tutu", "Kgoto", "Zzma", "Adantfio", "Sinfiffama", "Awiima"],
    couleursPreferes: ["Blanc (principale, mais aucune autre couleur ne lui déplaît)"],
    devises: [
      "T n min, lo t n man. Les rivières se dessèchent, mais le repère du crocodile lo ne tarit jamais. Tout réussira au consultant. Il vivra longtemps, mais devra se surveiller de près, car Tch a commis un inceste dal.",
      "Fu-Mdji! Nu m n s lovi dolo n kon. Rien ne peut ravir ou nul ne peut emporter lovi petit crocodile devant son père Jo grand crocodile. Le consultant ne trouvera pas une mort tragique doko ku.",
      "Adi w n gnin, ho n kin. Ta n kin n. Le savon mousse pour laver la tête puis disparaît, tandis que la tête reste. Le favi aura la longévité.",
      "Kago w n gba, gan go n gbaa. La calebasse se casse, mais le récipient métallique résiste au choc. Même sens que le précédent."
    ],
    interdits: [
      "La chair de pintade (Sonu)",
      "Toutes sortes de nourritures consacrées au Vodun Sakpata",
      "Tous les mets grillés (nu mi m)",
      "Le vin de palme, la bière de mil, de sorgho",
      "Viande d'éléphant (adjinaku), de cheval (S), de l'hyène (hia), de girafe (Agbanlin)",
      "Le coq",
      "Ne doit pas épouser une fticheuse de Sakpata",
      "Ne pas se laver dans la mer",
      "Ne pas porter des pagnes ou vêtements bigarrés ou de plus de deux couleurs"
    ],
    sacrifices: [
      "Adorer les ftiches Sakpata, Kinnesssi, Tohossou",
      "Annuellement, faire des sacrifices avec une volaille domestique rôtie ou grillée et de la viande fraîche"
    ],
    commentaire: "L'homme qui est né sous le signe de Fu sera beaucoup considéré par sa famille, ses parents et occupera une place importante dans sa ville natale. Au début de sa vie, il souffrira pour être heureux après. Il sera franc, juste et correct envers tout le monde, puis sera riche et charitable. Il s'élèvera au-dessus de son milieu par son savoir-faire et le travail."
  },
];


// Interface pour les combinaisons
export interface FaCombination {
  type: "signe-mere" | "vikando";
  id: string;
  nom: string;
  signePrincipal: FaSign;
  signeCompagnie: FaSign;
  figureSymbolique: {
    colonnes: number[][];
  };
  motsCles: string[];
  description: string;
}

// Générer les 256 combinaisons (16x16)
export function genererToutesCombinations(): FaCombination[] {
  const combinations: FaCombination[] = [];
  
  faMotherSigns.forEach((signePrincipal) => {
    faMotherSigns.forEach((signeCompagnie) => {
      const estSigneMere = signePrincipal.position === signeCompagnie.position;
      
      const combinationId = estSigneMere 
        ? signePrincipal.id
        : `${signePrincipal.id.replace('-medji', '')}-${signeCompagnie.id.replace('-medji', '')}`;
      
      combinations.push({
        type: estSigneMere ? "signe-mere" : "vikando",
        id: combinationId,
        nom: estSigneMere 
          ? signePrincipal.nomPrincipal
          : `${signePrincipal.nomPrincipal.replace('-MEDJI', '')}-${signeCompagnie.nomPrincipal.replace('-MEDJI', '')}`,
        signePrincipal,
        signeCompagnie,
        figureSymbolique: {
          colonnes: [
            signePrincipal.figureSymbolique.colonnes[0],
            signeCompagnie.figureSymbolique.colonnes[0]
          ]
        },
        motsCles: [
          ...(signePrincipal.motsCles || []),
          ...(estSigneMere ? [] : (signeCompagnie.motsCles || []))
        ],
        description: estSigneMere 
          ? `${signePrincipal.nomPrincipal} en puissance maximum (Dou-Médji). ${signePrincipal.resumeCourt || ''}`
          : `${signePrincipal.nomPrincipal.replace('-MEDJI', '')} dans la maison de ${signeCompagnie.nomPrincipal.replace('-MEDJI', '')}. Vikando (enfant de ${signeCompagnie.nomPrincipal.replace('-MEDJI', '')}).`
      });
    });
  });
  
  return combinations;
}

// Obtenir les combinaisons d'un signe-mère spécifique
export function getCombinaisonsParSigne(signeId: string): FaCombination[] {
  const allCombinations = genererToutesCombinations();
  return allCombinations.filter(
    combo => combo.signePrincipal.id === signeId
  );
}

// Obtenir une combinaison spécifique par son ID
export function getCombinaisonById(combinationId: string): FaCombination | undefined {
  const allCombinations = genererToutesCombinations();
  return allCombinations.find(combo => combo.id === combinationId);
}

// Statistiques
export function getStats() {
  const all = genererToutesCombinations();
  return {
    total: all.length,
    signesMeres: all.filter((c: FaCombination) => c.type === "signe-mere").length,
    vikandos: all.filter((c: FaCombination) => c.type === "vikando").length
  };
}
