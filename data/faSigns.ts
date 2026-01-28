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
    colonnes: [[1, 2, 2, 2], [1, 2, 2, 2]],
    description:
      "Épreuves et lenteur, signe de contraintes, d’ennemis proches et de réussite tardive après de nombreuses peines.",
  },
  resumeCourt:
    "Signe de peines, de lenteur et de contraintes. Di-Mêdji annonce des difficultés multiples, souvent dans la famille et l’administration, mais aussi une réussite réelle à force de patience.",
  motsCles: [
    "épreuves",
    "lenteur",
    "contraintes morales",
    "ennemis proches",
    "réussite tardive",
  ],
  texteRue:
    "Di-Mêdji, c’est le signe de celles et ceux qui doivent porter beaucoup de charges avant de voir la lumière. Il parle de difficultés dans la maison, de problèmes administratifs ou juridiques, de situations qui avancent lentement malgré les efforts. Le Fâ montre ici une personne consciencieuse, attachée à bien faire, qui aime son prochain, mais qui subit de nombreuses contraintes morales et matérielles. Avec Di-Mêdji, la vie commence sombre, puis s’éclaircit plus tard, à condition de tenir bon et de respecter les interdits.",
  themesDeVie: [
    "difficultés familiales et administratives",
    "lenteur dans la réalisation des projets",
    "alternance de hauts et de bas",
    "importance de la patience",
    "réputation qui s’améliore avec le temps",
  ],
  tonGeneral: "equilibre",
  fetiches: ["Nâ-Kinnessi", "Jumeaux (Hoho)", "Gbadu", "Tohossou", "Lissa"],
  feuillesLiturgiques: ["Désrègu / désrèssigu (fon)"],
  couleursPreferes: ["Noir", "Bigarré", "Jaune", "Rouge (pour certains sacrifices aux femmes)"],
  devises: [
    "Ku naho kpako, Azon naho kpako, kpô naho kpako, houn naho kpako. Avì dindin ma yi voun. La mort, la maladie et le procès ne peuvent t’atteindre si tu es bien couvert. On n’entre pas dans un buisson d’épines avec un grand pagne sans protection.",
    "Kpô mèn n wili avoun do ganja mèn. Le léopard ou le tigre n’attrape pas le chien enfermé dans une cage métallique solide.",
    "Lên kloklo dé bù houn yiba do gba, Ajot n fin ku yè sô do a. Si une grosse viande est perdue, allez la chercher sur la claie où on la fait cuire. Le voleur ne peut cacher longtemps un mort.",
    "Tè kpo do non dawa bo n yi gba dô a. Une rive ne se déplace pas pour aller faire la guerre à l’autre rive. Le consultant a des ennemis dans sa propre maison, mais ils ne pourront pas le détruire.",
  ],
  interdits: [
    "Toutes viandes ou nourritures consacrées à Nâ et D (Nâ-nu, D-nu)",
    "Azwi / Azui (certains singes, liés au symbole du livre)",
    "Singes Zinwô, Klan, Xa / Za",
    "Tous les jumeaux (Gnibù bùf)",
    "Arbre Za, Kloukun (pois d’angole)",
    "Éléphant (Adjinaku)",
    "Lion (Kinni Kinni)",
    "Léopard (Kpovi)",
    "Hyène (Hla)",
    "Alului",
    "Coq (interdit commun aux signes majeurs)",
  ],
  sacrifices: [
    "Être large dans les sacrifices (argent, nourriture, objets rituels)",
    "Adorer Nâ, les jumeaux, Kinnessi et Tohossou",
  ],
  commentaire:
    "Sous Di-Mêdji, on a souvent une bonne épouse et une vraie conscience professionnelle, mais on porte beaucoup de soucis et de peines. On aime son prochain, on se fait respecter, mais on traverse des contraintes morales et physiques, ainsi que des complications administratives ou judiciaires. La vie est faite d’alternance: tantôt tout va bien, tantôt tout va mal. Si la patience et les sacrifices sont au rendez-vous, la fin de vie est plus brillante que le début.",
},
  {
  position: 5,
  id: "losso-medji",
  nomPrincipal: "LOSSO-MÊDJI",
  sexe: "masculin",
  figureSymbolique: {
    colonnes: [[2, 1, 2, 2], [1, 1, 1, 1]],
    description:
      "Tension et coup de tonnerre, signe d’épreuves, de colère, d’accidents et de succès instables.",
  },
  resumeCourt:
    "Signe de feu, de conflits et d’accidents. Losso-Mêdji annonce une vie pleine de vicissitudes, de souffrances et de tensions, avec des réussites réelles mais jamais tranquilles.",
  motsCles: [
    "épreuves",
    "conflits",
    "vindicte",
    "accidents",
    "succès instable",
    "intuition forte",
  ],
  texteRue:
    "Losso-Mêdji, c’est le signe de la foudre qui tombe sans prévenir. Il parle de souffrances, de conflits, de coups durs et de situations où la colère et la vengeance prennent vite le dessus. Le Fâ montre ici une personne qui passe par beaucoup de difficultés, dans plusieurs domaines, mais qui garde une intuition très forte et une capacité réelle à se relever. Sous Losso-Mêdji, le succès existe, mais il reste instable et souvent accompagné de dépenses inutiles et de tensions avec l’entourage.",
  themesDeVie: [
    "épreuves répétées",
    "tensions et inimitiés",
    "risques d’accidents",
    "succès non durable",
    "intuitions puissantes",
  ],
  tonGeneral: "plutot_difficile",
  fetiches: ["Hêbiosso", "Yalodé", "D", "Nâ", "Gu", "Tovodoun", "Lissa"],
  feuillesLiturgiques: ["Ologoncece (yoruba)", "Kpaklissi (fon)", "Xexem", "Dindin fundin", "Amji"],
  couleursPreferes: ["Rouge (feu, sang, foudre)"],
  devises: [
      "Akpà miàu, ho xè si. Gbè tô mi mô ahossu jà hun mi hon. Quand Akpà est en colère, tous les oiseaux s'envolent. Lorsque les hommes voient leur roi, ils le craignent.",
      "Nu kun mian nô ton kan àn. Qui dit œil rouge ne dit pas œil crevé. Il s'agit des souffrances qu'engendrent les épreuves de la vie. Le consultant connaîtra de la douleur, mais n'en mourra pas.",
      "Nu kun édo vê nû Attakin, é na nô sêwi do Akpamê àn. Les yeux qui se moquent des brûlures d'attakin ne se tiennent pas tranquilles dans leurs globes.",
      "Hon do gbê, Gué wê na gni Ahossua. Tant que Hon l'aigle est en vie, l'oiseau rouge Gu ne peut prendre le nom de roi."
    ],
  interdits: [
      "Tout ce qui est rouge (vêtement, meubles, bijoux, plumes de la queue de Kèsè (perroquet), teinture (Sokpakpê)",
      "Ne doit pas épouser une femme de teint clair, ni une Sakpatassi, ni Hêbiossossi",
      "Viande de singes.",
      "Oiseaux Akpà, Drègbagwé, Gué, Aklassu, Ututu, Agbanlin (Girafe)",
      "Ne pas faire usage des fruits rouges Gogozotin et Cili vovo",
    "Coq (interdit commun aux signes majeurs)",
  ],
  sacrifices: [],
  commentaire:
    "Né sous Losso-Mêdji, on est souvent pauvre au départ, indiscret et vindicatif, appliquant facilement la loi du talion. La vie est remplie de difficultés et de conflits, mais l’intuition du «favi» est très développée et lui permet de se tirer de situations compliquées. Son succès est réel mais instable, avec beaucoup de dépenses inutiles et de tensions. Ce signe n’est pas favorable à une union paisible et demande beaucoup de maîtrise de soi et de rituels de protection.",
},
  {
  position: 6,
  id: "winlin-medji",
  nomPrincipal: "WINLIN-MÊDJI",
  sexe: "feminin",
  figureSymbolique: {
    colonnes: [[2, 1, 1, 2], [2, 1, 1, 2]],
    description:
      "Puissance de Sakpata, signe de guerre, de protection face aux ennemis et de richesse après des débuts difficiles.",
  },
  resumeCourt:
    "Signe de combat, de protection et de richesse tardive. Winlin-Mêdji annonce des ennemis réels, mais aussi la capacité à les vaincre et à s’élever après les souffrances.",
  motsCles: [
    "guerre",
    "protection",
    "ennemis vaincus",
    "souffrance initiale",
    "richesse et ascension sociale",
  ],
  texteRue:
    "Winlin-Mêdji, c’est le signe de ceux qui ne reculent pas devant la guerre. Il parle d’attaques, de jalousies, de conflits ouverts, mais aussi de la protection de Sakpata et des autres fétiches qui veillent sur le «favi». Le Fâ montre ici un destin rude au début, avec des souffrances et des difficultés, mais qui devient prospère si les sacrifices sont respectés. Sous Winlin-Mêdji, on finit souvent par s’élever au-dessus de son milieu, à force de travail, de droiture et de persévérance.",
  themesDeVie: [
    "conflits et attaques",
    "protection spirituelle",
    "souffrance au début de la vie",
    "richesse et réussite après combat",
    "ascension sociale",
  ],
  tonGeneral: "plutot_favorable",
  fetiches: ["Sakpata", "Kinnessi", "Tohossou", "D", "Hoho (jumeaux)", "Lissa"],
  feuillesLiturgiques: ["Atoladola (yoruba)", "Godok / Gninsinkin (fon)", "Mafowok omomi (yoruba)"],
  couleursPreferes: ["Moucheté / bigarré (wanlan-wanlan)"],
  devises: [
      "Attakin kpo li kpo si hu wa ahuandan àn. Attakin wa nu hu lihuan. Si Attakin (petits piments rouges) déclare la guerre à Li (mil), Attakin l'emportera toujours.",
      "Sè Lissa ma dégbé do to déa, ahuan nô gbaa. Sans l'ordre de Sè Lissa, la guerre ne brisera pas un pays.",
      "Zan mô nô nô aga nufindoh. La natte ordinaire findoh ne pose jamais sous une autre natte. Celle-ci est la plus jolie des deux. S'il entreprend une action avec quelqu'un, le consultant en profitera bien comme il risquera aussi d'enregistrer des difficultés.",
      "Ahuan mô nô gba Kuta. La guerre ne peut casser les rochers. Les ennemis ne peuvent rien contre le consultant."
    ],
  interdits: [
    "Chair de pintade (Sonu)",
    "Toutes nourritures consacrées au vodun Sakpata",
    "Tous les mets grillés (nu mi m)",
    "Vin de palme",
    "Bière de mil et de sorgho",
    "Viande d’éléphant (Adjinaku)",
    "Viande de cheval (Sô)",
    "Viande d’hyène (Hia)",
    "Viande de girafe (Agbanlin)",
    "Coq (interdit commun aux signes majeurs)",
    "Épouser une prêtresse de Sakpata",
    "Se laver dans la mer",
    "Porter des pagnes ou vêtements bigarrés ou de plus de deux couleurs",
  ],
  sacrifices: [],
  commentaire:
    "Sous Winlin-Mêdji, la personne est souvent brutale dans ses réactions, mais respectée de son entourage. Elle souffre au début de sa vie, puis connaît le bonheur, la richesse et une élévation sociale marquée. Franc, juste et correct envers tout le monde, le «favi» finit par se hisser au-dessus de son milieu grâce à son travail. Ce signe demande de respecter strictement les interdits alimentaires et les sacrifices pour maintenir la protection dans les conflits.",
},
 {
  position: 7,
  id: "abla-medji",
  nomPrincipal: "ABLA-MÊDJI",
  sexe: "masculin",
  figureSymbolique: {
    colonnes: [[1, 1, 1, 2], [1, 1, 1, 2]],
    description:
      "Vent frais du chef patient, signe de leadership, de patience récompensée, mais aussi de fin de vie difficile.",
  },
  resumeCourt:
    "Signe de chef, de patience et de succès mêlé de peine. Abla-Mêdji annonce un destin respecté, mais avec des épreuves et une fin de vie qui peut être lourde si l’orgueil domine.",
  motsCles: [
    "leadership",
    "patience",
    "bonheur et peine",
    "ambition",
    "fin de vie difficile",
  ],
  texteRue:
    "Abla-Mêdji, c’est le signe de celui qui évente les autres avant de s’occuper de lui-même. Il parle de protection, de réussite, de bonne épouse et de bonnes habitudes, mais aussi de peines, de maladies passagères et d’une fin de vie qui peut être lourde. Le Fâ montre ici un chef respecté, ambitieux, qui triomphe souvent, mais qui doit apprendre à rester humble et patient. Sans patience, Abla-Mêdji se termine dans l’amertume.",
  themesDeVie: [
    "protection et succès",
    "nécessité de patience",
    "bonheur mêlé de souffrance",
    "ambition forte",
    "risque d’amertume aux derniers jours",
  ],
  tonGeneral: "plutot_favorable",
  fetiches: ["Lissa", "Hoho (jumeaux)", "Tovodoun", "Toyiyo (yoruba)", "Dan"],
  feuillesLiturgiques: ["Davonum (fon)"],
  couleursPreferes: ["Bleu clair"],
  devises: [
      "Afafa wê nô kon din huaa. C'est l'éventail qui sèche la sueur. Le favi sera défendu contre tous ses ennemis.",
      "Abla-jimê! Adjidja non ba kpôssi ho nô glo. Le porc-épic courtise la femelle du léopard et échappe aux crocs puissants du mâle. Le consultant, même s'il redoute un plus grand que lui, triomphera de toute lutte engagée contre lui par son ennemi.",
      "Suru ni n'jôba l'haoussa. L'homme patient devient roi du pays haoussa. Le consultant, dans son propre intérêt, devra observer constamment la patience",
      "Gnon nu wa n'dé ho dubla lô, Ajô ton nassu. La femme qui mange à deux râteliers s'expose à la mort. Si l'épouse du «favi» veut tromper son mari, elle mourra.",
      "Dagbé é do tôssié, Houa wê nô bê kô ton yi agué. C'est le poisson appelé «Houa» qui traîne ou draine jusqu'à la rive, la ressource de l'eau douce." ],
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
  "Vipère(Amanmônu)",
"Coq (interdit commun aux signes majeurs)"
  ],
  sacrifices: [],
  commentaire:
    "Celui qui est né sous Abla-Mêdji sera heureux, avec une bonne épouse et de bonnes habitudes. Il connaîtra cependant des moments de méchanceté, de maladies passagères et de souffrance. Il n’aimera pas toujours son prochain, sera très ambitieux et risquera d’être malheureux aux derniers jours de sa vie. S’il cultive la patience et respecte ses interdits, il triomphera dans de nombreux domaines et conservera une grande renommée.",
},
  {
  position: 8,
  id: "aklan-medji",
  nomPrincipal: "AKLAN-MEDJI",
  sexe: "feminin",
  figureSymbolique: {
    colonnes: [[1, 2, 2, 1], [1, 2, 2, 1]],
    description:
      "Honors et solitude, signe de lutte, d’orgueil, de hauts et bas, de deuils et d’héritages successifs.",
  },
  resumeCourt:
    "Signe d’honneurs, d’orgueil et de solitude. Aklan-Mêdji annonce une vie faite de luttes, de chagrins et d’héritages, avec de grands hauts et de grands bas.",
  motsCles: [
    "honneurs",
    "orgueil",
    "solitude",
    "hauts et bas",
    "deuils et héritages",
  ],
  texteRue:
    "Aklan-Mêdji, c’est le signe de celui qui reçoit les honneurs mais qui porte ses fardeaux seul. Il parle de luttes, de dangers, de réputations fortes, mais aussi d’orgueil, d’avarice, de mélancolie et de solitude. Le Fâ montre ici une vie qui alterne coups durs et succès, deuils et héritages, avec une santé qui demande une vigilance constante. Aklan-Mêdji invite à travailler sur l’orgueil et l’isolement pour ne pas se perdre dans ses propres combats.",
  themesDeVie: [
    "honneurs et réputation",
    "lutte et danger",
    "orgueil et avarice",
    "succession de deuils et héritages",
    "alternance hauts/bas",
  ],
  tonGeneral: "equilibre",
  fetiches: ["Hohovi (jumeaux)", "Lgba", "Hêbiosso", "Dan", "Sakpata", "Tohossou"],
  feuillesLiturgiques: [],
  couleursPreferes: [],
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
    "Manger des boules d’akassa enveloppées dans des feuilles pliées (Alvi do gudo)",
    "Toucher la liane Agbakan",
    "Chien",
    "Coq (interdit commun aux signes majeurs)",
    "Léopard",
    "Aklassu",
    "Buffle",
    "Brûler le bois d’iroko",
  ],
  sacrifices: [],
  commentaire:
    "L’homme ou la femme né(e) sous Aklan-Mêdji recevra des honneurs et sera apprécié(e), mais portera un caractère orgueilleux, tenace, mélancolique et avare. Sa vie sera faite de hauts et de bas, de deuils, de chagrins et d’héritages successifs. La longévité est possible, mais au prix d’une grande vigilance sur la santé et d’un vrai travail intérieur sur l’orgueil et la solitude.",
}
,
  {
  position: 9,
  id: "guda-medji",
  nomPrincipal: "GUDA-MEDJI",
  sexe: "masculin",
  figureSymbolique: {
    colonnes: [[2, 2, 1, 1], [2, 2, 1, 1]],
    description:
      "Puissance tranchante, signe de vigueur, de sexualité forte, de justice, mais aussi de risques d’accidents et de mort subite.",
  },
  resumeCourt:
    "Signe de force, de justice et de tension sexuelle. Guda-Mêdji annonce une grande puissance d’action, mais aussi des ennemis nombreux et des risques d’accidents si les interdits sont négligés.",
  motsCles: [
    "puissance",
    "justice",
    "sexualité",
    "ennemis nombreux",
    "risque d’accident ou de mort subite",
  ],
  texteRue:
    "Guda-Mêdji, c’est le signe du fer qui coupe net. Il parle de force, de vigueur, de justice tranchante et d’une sexualité puissante, mais aussi de dangers si l’on ne respecte pas les limites. Le Fâ montre ici un personnage sûr de lui, qui veut tout connaître, qui agit avec intensité et attire beaucoup d’ennemis et de complications. Sous Guda-Mêdji, on peut aller très loin, mais un accident, une chute ou une dèche sexuelle peuvent surgir si les sacrifices ne sont pas faits.",
  themesDeVie: [
    "affirmation de soi",
    "justice et décision ferme",
    "tension sexuelle",
    "ennemis et complications",
    "risques d’accident ou de mort brutale",
  ],
  tonGeneral: "equilibre",
  fetiches: ["Gu", "Lgba", "Agu", "Hêbiosso", "D", "Hêkê"],
  feuillesLiturgiques: ["Lidji", "Agnaa"],
  couleursPreferes: ["Rouge", "Noir", "Blanc"],
  devises: [
    "Attin kpè Gu majlè. L’arbre qui frotte le métal n’a pas bonne santé. Celui qui se frotte au «favi» risque d’en souffrir.",
    "Gblê si mèn n kè akpavi. Gbo do lan wô. La femme du chasseur n’alerte pas le village pour rien. Si elle crie, c’est que la flèche a touché un animal. Le désir du consultant sera réalisé.",
    "Attin do têtin sa alin voa. Le bois courbé ne craint plus rien du rabot. Le «favi» qui a perdu sa vigueur sexuelle ne se fatigue plus les reins au coït, mais s’il néglige un sacrifice prescrit, une déchéance sexuelle peut survenir.",
    "Gu gla wèn gbo bô houn nôn ton. Le couteau tranchant coupe et le sang jaillit. Le «favi» sera très puissant et réussira dans la vie.",
    "Guda ga. Lgba Adigbè zinzin mèn hudo toyom. Guda entre en érection ! Si la verge de Lgba Adigbè entre en érection, toutes les femmes du pays en seront servies. Le «favi», sexuellement fort aujourd’hui, est menacé de déchéance s’il ne respecte pas les prescriptions.",
  ],
  interdits: [
    "Chair de tortue Logozo",
    "Viande d’antilope la",
    "Crocodile (Lò)",
    "Tous les serpents",
    "Fruit du faux acajou (Lissa)",
    "Oiseaux: hibou (azî), Agbogbo, Lôk-lôk",
    "Manioc (forme et préparation spécifiques liées au texte)",
    "Ligname pilée (Agu)",
    "Coq (interdit commun aux signes majeurs)",
    "Danser hors de sa maison d’habitation",
    "Porter des caleçons Godo (cache-sexe) ou même des pantalons chokoto-chaka de façon ostentatoire rituelle",
    "Creuser une fosse ou un trou (pour certains rituels non autorisés)",
    "Déposer fusil, couteau ou objet de Gu près du lit ou porter un poignard sur soi",
  ],
  sacrifices: [
    "Adorer Gu, Lgba et Agu",
    "Faire Vonssissa pour échapper aux accidents appelés Gu ovi",
    "Faire des offrandes à Lgba",
    "Faire des sacrifices de boissons et de pantalons",
  ],
  commentaire:
    "Celui qui subit l’influence de Guda-Mêdji est un juge intègre, honnête et sûr de lui-même. Il cherche à tout connaître et agit avec une grande vigueur, ce qui lui attire autant la renommée que de nombreux ennemis et ennuis. Sa vie est marquée par des tourments et des perturbations de santé possibles, ainsi que par le risque d’un accident inattendu ou d’une mort subite. La gestion de sa sexualité, de sa violence potentielle et le respect strict des interdits sont essentiels pour canaliser ce signe sans se détruire.",
},
  {
  position: 10,
  id: "sa-medji",
  nomPrincipal: "SA-MÊDJI",
  sexe: "feminin",
  figureSymbolique: {
    colonnes: [[2, 1, 1, 1], [2, 1, 1, 1]],
    description:
      "Puissance en mouvement, signe de voyage, d’épreuves dépassées et de réussite après des débuts difficiles.",
  },
  resumeCourt:
    "Signe de voyage, de lutte et de réussite après les épreuves. Sa-Mêdji parle d’un destin puissant qui finit par s’épanouir loin de la terre natale.",
  motsCles: [
    "voyage",
    "réussite après épreuves",
    "destin puissant",
    "recherche spirituelle",
    "richesse et prodigalité",
  ],
  texteRue:
    "Sa-Mêdji, c’est le signe de celles et ceux qui ne restent pas là où ils sont nés. Il annonce des débuts difficiles, des routes longues, des combats à mener, mais aussi la réussite pour celui qui persévère. Le Fâ montre ici un destin fort, qui s’épanouit souvent loin de la terre natale, avec une santé robuste et une protection spirituelle réelle. Sa-Mêdji ouvre aussi la voie vers les sciences occultes et la recherche du savoir caché, mais rappelle qu’il ne faut jamais se décourager, même quand tout semble bloqué.",
  themesDeVie: [
    "exil ou vie loin du pays natal",
    "épreuves puis réussite",
    "recherche spirituelle et occultisme",
    "richesse et générosité",
    "ne pas céder au découragement",
  ],
  tonGeneral: "plutot_favorable",
  fetiches: ["Gbadu", "Nâ", "Azô", "Kinnessi", "Tohossou", "Yalodé", "Naawo", "Lissa", "Loko"],
  feuillesLiturgiques: ["Avôkanfunmâ", "Gnonussissi", "Zomâ", "Zêzêmâ", "Ajassiafôvê (fon)"],
  couleursPreferes: ["Rouge (principale)", "Blanc", "Bleu"],
  devises: [
    "Sa jimê ! tufè tufè wê do awo, tufè tufè wê na klon. C’est la salive pulvérisée qui prépare la glu et qui la détache. Faire du mal au «favi» né sous ce signe, c’est s’attirer à soi-même de redoutables ennuis.",
    "An ba tin kpo, ho mêdji dassamê. La nature a créé et situé la vulve entre les deux cuisses du sexe féminin.",
    "Sajimê! Bokônon djan dji wê n'dé. Je suis assis sur la chaise en bambou du devin. Le «favi» a des dispositions pour devenir lui aussi prêtre du Fa.",
    "Nù na gnon nou awon doxe bê na won xwé ton akàma mèton. L’oiseau qui veut s’engluer a trouvé fortune et oublié son akàma. Souvent les hommes parvenus à la richesse oublient le moment où ils ont été pauvres. Le «favi» s’enrichira, mais oubliera bien vite les dures épreuves de la pauvreté.",
  ],
  interdits: [
    "Ne jamais regarder le sexe de sa conjointe (et, pour les femmes Sa-Mêdji, éviter les rapports en pleine journée)",
    "Poulet",
    "Tout oiseau «sorcier» et offrandes faites aux Nânu",
    "Sorgho (Abôkun en fon)",
    "Éléphant (Adjinaku)",
    "Afyanku",
    "Chien",
    "Léopard",
    "Chat",
    "Coq (commun à tous les signes majeurs)",
    "Vin de palme",
    "Approcher le coton du feu (Avôkanfunm do zo)",
    "Usage de la graine de Kpêdjêlkun",
    "Feuilles de l’arbre iroko",
  ],
  sacrifices: [
    "Adorer Nâ",
    "Adorer Tohossou",
    "Adorer Yalodé",
    "Adorer Sakpata",
    "Leur faire régulièrement des sacrifices Hên",
    "Élever un perroquet et offrir chaque année en sacrifice du bois de chauffe",
  ],
  commentaire:
    "Ceux nés sous Sa-Mêdji connaîtront des débuts difficiles mais finiront par réussir et vivre dans l’abondance. Ils voyageront beaucoup et vivront souvent loin de leur terre natale, avec une santé robuste et un goût marqué pour la recherche et les sciences occultes. Riche et prodigue, le «favi» est invité à ne jamais se laisser écraser par les échecs, car la Providence revient toujours l’aider dès qu’il fait un effort pour se relever.",
},
  {
  position: 11,
  id: "ka-medji",
  nomPrincipal: "KA-MÊDJI",
  sexe: "masculin",
  figureSymbolique: {
    colonnes: [[2, 1, 2, 2], [2, 1, 2, 2]],
    description:
      "Force qui résiste aux coups du destin, signe d’ambition, de heurts et de réussite arrachée de haute lutte.",
  },
  resumeCourt:
    "Signe d’ambition, de résistance et de réussite malgré les tempêtes. Ka-Mêdji parle d’un destin qui passe par les épreuves avant de trouver stabilité et richesse.",
  motsCles: [
    "ambition",
    "résistance aux épreuves",
    "richesse",
    "destin mouvementé",
    "protection contre les ennemis",
  ],
  texteRue:
    "Ka-Mêdji, c’est le signe de ceux qui ne reculent pas devant les obstacles. Il annonce un chemin de vie plein de heurts, de luttes et de remous, comme une pirogue ballotée par les vagues avant de trouver enfin un port sûr. Le Fâ montre ici une grande ambition, une capacité à se relever après les chutes et à transformer les difficultés en force. Ka-Mêdji promet la richesse et la considération, mais rappelle aussi que la fin peut être brusque si l’on oublie la prudence et les interdits.",
  themesDeVie: [
    "vie mouvementée",
    "relever les défis",
    "construire sa richesse",
    "protection dans l’épreuve",
    "ne pas se laisser submerger",
  ],
  tonGeneral: "plutot_favorable",
  fetiches: ["Tohossou", "Hohovi (jumeaux)", "Hêbiosso", "Lissa", "Gu", "Loko", "D"],
  feuillesLiturgiques: ["Sélévik", "Srésrévik (fon)"],
  couleursPreferes: ["Noir", "Rouge", "Bleu", "Tacheté"],
  devises: [
    "Lègùd gòvi jto ma cí. Lègùd gòvi tombe dans l’eau mais ne s’immerge pas. Si le «favi» tombe dans un malheur quelconque, il s’en tirera facilement.",
    "È mèn nè jé tado kè bo n ba ka do ùn nan, mon hun gbè gblo. Celui qui est tombé dans la rivière jusqu’au cou ne cherche pas une calebasse pour se désaltérer. Il n’a plus qu’à boire. Le bonheur du «favi» dépendra de lui-même.",
    "Gajé tê, bo hô ló. L’ancre mouille et la pirogue s’arrête. Le consultant, longtemps ballotté par les vicissitudes de la vie, finira par trouver en Ka-Mêdji son point de stabilité.",
    "Haoussa hossu ma yiku do kun mvo. Le roi haoussa ne meurt jamais autrement que riche. Il en sera de même pour le «favi».",
    "Attin ku tê, moin ma ku tê. Tous les arbres se noient, mais le bambou résiste. Le «favi» échappera toujours à ses ennemis.",
  ],
  interdits: [
    "Poisson fumé recourbé (Azín gokwin)",
    "Patate douce",
    "Tous les serpents",
    "Crocodile (lò)",
    "Pangolin (azô)",
    "Oiseau Agbogbo",
    "Singes Hâa, Klan, Zinwô",
    "Enfreindre l’interdit sur les singes (risque de mort d’un enfant)",
    "Viande de coq (commun aux signes majeurs)",
  ],
  sacrifices: [
    "Adorer Tohossou",
    "Adorer D",
    "Adorer Hohovi (jumeaux)",
    "Adorer Gu",
    "Abandonner l’eau des offrandes (ne plus la reverser comme avant)",
    "Faire des aumônes et sacrifices aux forgerons",
    "Faire des offrandes régulières aux jumeaux",
  ],
  commentaire:
    "Celui qui est sous l’influence de Ka-Mêdji sera ambitieux et parfois brusque dans ses réactions. Sa vie connaîtra de nombreux heurts, mais il finira par s’imposer, gagner en richesse et en considération. Rusé et persévérant, il échappe souvent aux pièges tendus par ses ennemis. Il doit toutefois rester prudent et respecter ses interdits, car un excès de confiance peut entraîner une fin brutale ou malheureuse.",
},
  {
  position: 12,
  id: "trukpin-medji",
  nomPrincipal: "TRUKPIN-MÊDJI",
  sexe: "feminin",
  figureSymbolique: {
    colonnes: [[2, 2, 1, 2], [2, 2, 1, 2]],
    description:
      "Justice délicate et destinée lente, signe de décisions difficiles, de lente maturation et de responsabilités lourdes.",
  },
  resumeCourt:
    "Signe de justice, de lenteur et de responsabilités karmiques. Trukpin-Mêdji parle d’un destin où les décisions sont lourdes et où les résultats arrivent tard, après hésitations et sacrifices.",
  motsCles: [
    "justice",
    "responsabilité",
    "lenteur de réalisation",
    "enfants et maternité",
    "scrupules et hésitation",
  ],
  texteRue:
    "Trukpin-Mêdji, c’est le signe des décisions qui pèsent lourd et qu’on ne prend pas à la légère. Il parle de justice, de scrupules, d’hésitation avant d’agir, comme quelqu’un qui sait que chaque choix engage tout son destin. Le Fâ montre ici une vie où les projets avancent lentement, avec des retards, des blocages, mais aussi une capacité à devenir un grand juge ou un chef respecté. Trukpin-Mêdji touche aussi la maternité : beaucoup d’enfants peuvent mourir en bas âge, et il faut des sacrifices réguliers pour stabiliser la descendance.",
  themesDeVie: [
    "justice et équité",
    "décisions lourdes à assumer",
    "projets lents à se réaliser",
    "questions d’enfants et de lignée",
    "scrupules, doutes et maturation intérieure",
  ],
  tonGeneral: "equilibre",
  fetiches: ["Sakpata", "Hohovi (jumeaux)", "Lgba", "Hêbiosso", "Dan", "Tohossou"],
  feuillesLiturgiques: ["(gombo et papaye à marquer comme sensibles dans l’enseignement)"],
  couleursPreferes: ["Rouge", "Noir", "Blanc", "Bleu", "Tacheté"],
  devises: [
    "Kan gbto n gb ka, bo n hun. La tête de l’enfant ne supporte pas la terre. Le «favi» porte des charges qu’il ne devrait pas porter seul.",
    "Agban do wli, dokpo do wli, mèton mèn wli. La case plafonnée ne craint pas la chaleur. Celui qui est bien protégé résiste aux épreuves.",
    "Nukplin do w n w d agbo. La femme à peine enceinte ne peut rester debout longtemps. Les projets du «favi» demandent patience et soutien pour arriver à terme.",
    "Ahin d do w n yi gbo. La rivière en crue emporte tout sur son passage. Si les sacrifices ne sont pas faits, les événements peuvent tout balayer.",
  ],
  interdits: [
    "Gombo",
    "Papaye",
    "Plante Ayikp",
    "Coq (commun aux signes majeurs)",
    "Pintade",
    "Tous les serpents",
    "Léopard",
    "Sorgho",
    "Éléphant (Adjinaku)",
    "Hyène (Hia)",
    "Oiseaux de sorcellerie",
    "Singes",
    "Chien",
    "Chat",
  ],
  sacrifices: [
    "Adorer Sakpata",
    "Adorer Nâ",
    "Adorer Hohovi (jumeaux)",
    "Faire Vonssissa Enagni ho m zôn pour stabiliser la destinée",
    "Offrir chaque année des bananes et papayes (sous forme rituelle, sans consommation par le «favi»)",
  ],
  commentaire:
    "Sous Trukpin-Mêdji, la personne a le profil d’un juge ou d’un chef qui veut être juste, mais avance avec prudence et lenteur. Sa vie connaît des retards, des occasions manquées et des hésitations, mais aussi une montée progressive vers une grande responsabilité. La question des enfants et de la continuité de la lignée est centrale et demande des sacrifices réguliers. Bien géré, ce signe donne un destin respecté, mais exige de la patience, de la rigueur morale et un vrai sens de la justice.",
},
  {
  position: 13,
  id: "tula-medji",
  nomPrincipal: "TULA-MEDJI",
  sexe: "masculin",
  figureSymbolique: {
    colonnes: [[1, 2, 1, 1], [1, 2, 1, 1]],
    description:
      "Destin de mouvement et de commandement, signe de voyage, d’autorité et de remises en question répétées.",
  },
  resumeCourt:
    "Signe de voyage, de pouvoir et de comportements excessifs. Tula-Mêdji annonce une vie mobile, une grande influence, mais aussi des excès qui créent des ennemis.",
  motsCles: [
    "voyage",
    "autorité",
    "influence",
    "excès",
    "aide par les aumônes",
  ],
  texteRue:
    "Tula-Mêdji, c’est le signe de ceux qui bougent beaucoup et qui finissent par commander. Il parle de voyages fréquents, d’un caractère fort, parfois dur, qui attire autant le respect que la jalousie. Le Fâ montre ici un destin de chef, d’homme d’influence, mais qui risque aussi de se créer de sérieux ennemis par ses excès, surtout dans les relations et le rapport aux femmes. Tula-Mêdji recommande la persévérance, les aumônes et la discrétion pour équilibrer cette puissance.",
  themesDeVie: [
    "voyages et déplacements fréquents",
    "leadership et grande influence",
    "excès et ennemis cachés",
    "protection par les aumônes",
    "indifférence apparente face aux épreuves",
  ],
  tonGeneral: "plutot_difficile",
  fetiches: ["Lgba", "Dan", "Ajaguna", "Lissa", "Hoho", "G", "Tohossou"],
  feuillesLiturgiques: ["Alafya (ou Fifam)", "Dôm"],
  couleursPreferes: ["Bleu", "Blanc", "Or", "Tacheté"],
  devises: [
    "Malinu dèmèn si hèn dé. Un musulman ne peut en adorer un autre. Le «favi» n’a pas à se soucier du rang social de ses interlocuteurs.",
    "Bè hluinsounv do hu adè a o dokpo o wèn do kija na. Le bec dont le mange-mil se sert pour construire son nid est le même qu’il utilise pour le défaire.",
    "Gbè bojo do ! Houn mè n wli sounhoun do wa n dè ! Laisse ! Le soleil ne peut attraper la lune pour la torturer.",
    "Tula-Mêdji dit : Alafya-Allah Kubaru. Le «favi» devra faire de nombreuses aumônes (Saala).",
    "Aho kpon man n kponhlè. Si usé soit l’indigo, il réussit cependant à teindre l’étoffe.",
  ],
  interdits: [
    "Indiscrétion",
    "Consommation de la viande de porc",
    "Vin de palme",
    "Port de couteau, canif ou arme blanche sur soi (dans la poche ou à la ceinture)",
    "Port du burnous Agbada",
  ],
  sacrifices: [
    "Adorer les fétiches Dan, Lgba et Lissa",
    "Faire de nombreuses aumônes (Saala)",
    "Avoir chez soi un petit autel de sable comme ceux que les musulmans utilisent pour prier",
  ],
  commentaire:
    "Né sous Tula-Mêdji, le sujet voyagera souvent et deviendra un chef ou un personnage d’une grande influence. Il s’adonnera volontiers aux femmes et à certains plaisirs, ce qui pourra lui attirer des ennemis acharnés s’il n’apprend pas à se modérer. Persévérant et travailleur, il traverse les événements malheureux avec une forme d’indifférence et de détachement. Ce signe demande de cultiver la discrétion, la générosité et le respect des interdits pour transformer cette puissance parfois explosive en réussite durable.",
},
  {
  position: 14,
  id: "lete-medji",
  nomPrincipal: "LETE-MEDJI",
  sexe: "feminin",
  figureSymbolique: {
    colonnes: [[1, 1, 2, 1], [1, 1, 2, 1]],
    description:
      "Stabilité enracinée dans la terre, signe de protection, de conservation des acquis et de victoire progressive sur les ennemis.",
  },
  resumeCourt:
    "Signe de protection, de conservation et de victoire patiente. Lete-Mêdji parle d’une destinée solide, qui garde ce qu’elle possède et neutralise ses ennemis avec le temps et les bons sacrifices.",
  motsCles: [
    "protection",
    "conserver ses acquis",
    "victoire sur les ennemis",
    "patience",
    "stabilité",
  ],
  texteRue:
    "Lete-Mêdji, c’est le signe de la terre qui ne lâche pas ce qu’on lui confie. Il annonce une protection réelle sur les biens, la famille et la position du «favi», à condition qu’il fasse les sacrifices demandés. Le Fâ montre ici quelqu’un que les ennemis cherchent à abattre, mais dont la force tranquille finit par triompher à la longue. Avec Lete-Mêdji, on avance parfois lentement, mais on perd rarement ce qu’on a déjà gagné.",
  themesDeVie: [
    "protection des biens et de la famille",
    "neutraliser ses ennemis",
    "stabilité sociale",
    "courage face aux attaques",
    "patience dans la lutte",
  ],
  tonGeneral: "plutot_favorable",
  fetiches: ["Sakpata", "Hêbiosso", "Nâ", "Gbadu", "D", "Lissa", "Azovowema (fon)"],
  feuillesLiturgiques: ["Awiim", "Gninsinkin", "Akaya", "Tohossou"],
  couleursPreferes: ["Rouge", "Noir", "Gris", "Bleu", "Blanc"],
  devises: [
    "Boko dé gnon vo sa, kaka n hou aton m na su, n dé na kè, hèn gbo dji. Houn mè n wli ahossou. Ha avivia. Si les sacrifices imposés par la consultation sont bien exécutés, en moins de trois ans l’ennemi du «favi» mourra et il sera tranquille. Le soleil ardent n’éteint pourtant pas l’ombre.",
    "Zun dé glan zin wan dodo. Le martèlement de l’enclume, progressivement, parvient à l’enfoncer dans la terre. Avec courage et sacrifices corrects, le consultant éliminera ses ennemis.",
    "Lèté jim ! Akwè adokpo ton, avè adokpo ton, assi adokpo ton. Klô djègbè na zin kan yôm houn gbè. L’argent, les étoffes, les enfants et les femmes appartiennent à la terre. Le «favi» conservera ce qu’il possède.",
    "Lèté jim ! Oklo djègbè zin kan yôm houn gbè. Lete-Mêdji dit : la terre insulte la mort par le canal de sa mère, mais la mort ne peut rien contre elle.",
    "N go sin ji mèn tê ta a yi. Tout ce qui vient d’en haut finit par poser la tête sur la terre, parce qu’elle reçoit tout.",
    "Ami zin hôdohôdo, houn wiwlèn nè glon ton. La surface de l’huile de palme reposée est claire, mais il y a un dépôt noir au fond.",
  ],
  interdits: [
    "Mépriser ou négliger les sacrifices prescrits par le Fa (la protection tombe si les rituels ne sont pas respectés)",
    "Toute participation active à des complots ou attaques contre la terre (Sakpata) ou contre les ancêtres",
    "Consommer des mets consacrés spécifiquement aux ennemis déclarés du «favi» (ne pas manger ce qui a été utilisé pour les atteindre)",
    "Brûler ou profaner des lieux sacrés liés à Sakpata ou Hêbiosso",
    "Coq (interdit commun aux signes majeurs, à respecter avec rigueur sous Lete-Mêdji)",
  ],
  sacrifices: [
    "Exécuter scrupuleusement les sacrifices prescrits par le Fa pour neutraliser les ennemis",
    "Offrir des cadeaux (argent, étoffes, nourriture) à la terre par l’intermédiaire de Sakpata",
    "Faire des offrandes régulières pour renforcer la protection de la maison et des biens",
  ],
  commentaire:
    "L’enfant né sous le signe de Lete sera beaucoup considéré par sa famille et occupera une place importante dans sa ville natale. Courageux et parfois dur, il n’a peur de rien, pas même de la mort, et défend farouchement ce qui lui appartient. Ce signe attire les attaques et la jalousie, mais donne aussi la force de résister et de vaincre, à condition de rester patient, de respecter les prescriptions et de ne pas sous-estimer la puissance de la terre.",
},
  {
  position: 15,
  id: "tche-medji",
  nomPrincipal: "TCHE-MEDJI",
  sexe: "masculin",
  figureSymbolique: {
    colonnes: [[1, 2, 1, 2], [1, 2, 1, 2]],
    description:
      "Carrefour dangereux, signe d’épreuves brutales, de choix risqués et de transformations douloureuses.",
  },
  resumeCourt:
    "Signe de danger, de choix risqués et de transformations radicales. Tche-Mêdji annonce des épreuves dures, des décisions qui peuvent coûter cher, mais aussi la possibilité de renaître après le choc.",
  motsCles: [
    "danger",
    "épreuve brutale",
    "choix risqués",
    "révolution intérieure",
    "instabilité affective",
  ],
  texteRue:
    "Tche-Mêdji, c’est le signe des carrefours dangereux, là où une mauvaise décision peut tout faire basculer. Il parle de situations extrêmes, de coups durs, de maladies ou événements qui frappent comme la foudre, souvent à cause de négligence ou d’entêtement. Le Fâ montre ici un caractère révolutionnaire, impulsif, qui aime bousculer l’ordre établi mais qui se met lui-même en danger. Sous Tche-Mêdji, on peut devenir grand, mais au prix de chocs, de pertes et de remises en question profondes.",
  themesDeVie: [
    "grandes épreuves",
    "décisions à fort risque",
    "révolte et remise en question",
    "instabilité dans les sentiments",
    "chute après la réussite si l’on n’est pas prudent",
  ],
  tonGeneral: "plutot_difficile",
  fetiches: ["Sakpata", "Kinnessi", "Hêbiosso", "Lissa", "G", "Tohossou"],
  feuillesLiturgiques: ["Nukunzaw", "Hansimlin", "Azloko", "Futukôd"],
  couleursPreferes: ["Trois ensembles de couleurs (au choix)"],
  devises: [
    "Tè mi mèn do n hiaha n mèn do Adjagbo-na du mi hwe du mi kplali-kpliti n su houn. Ligname grillée dit à l’homme, près de la rivière Adjagbo : Si tu veux me manger, dépêche-toi toi-même, sinon la mort viendra t’ensevelir et t’empêchera de me manger. La réussite du consultant dépendra de sa vigilance et de sa rapidité à agir.",
    "Méta huhu do n hiaha n mèn ta houn mèn do nu do Adjagbo. Un vieux crâne humain dit à un crâne plus jeune, au bord de la rivière Adjagbo : Moi, je suis déjà sec ; si l’on me fend, pas une goutte de sang ne coulera, mais toi, si on te fend, il en jaillira encore. Le «favi» est plus exposé au danger qu’il ne le croit.",
    "Tchê jim ! n tchê wiwà, han tchê djidji, aff tchê didi, ma n gnon. A mèn mi houn, mèn kô. Tchê ! Tout ce que j’accomplis, les chants que je chante, les pas que je fais, tout cela indispose les gens. Si tu me vois, tu vois la mort.",
  ],
  interdits: [
    "Maïs grillé (agbad mim), cause de craquements qui attirent la maladie",
    "Ligname grillée (tè mi m), pour la même raison",
    "Pintade",
    "Colas sauf la blanche",
    "Perdrix (Zin sô / assô)",
    "Tous les interdits de Sakpata (par exemple haricot mélangé avec du maïs, mélange de mets grillés)",
    "Porter des fagots de bois sur la tête",
    "Toucher au bois partiellement consumé",
    "Les singes",
    "Coq (interdit commun aux signes majeurs)",
  ],
  sacrifices: [
    "Adorer Sakpata, Nâ et Hêbiosso",
    "Chaque année, faire des sacrifices et offrandes aux bokonon et féticheurs (E na gni azon, bo n djo kè)",
  ],
  commentaire:
    "L’homme sous l’influence de Tche-Mêdji deviendra un grand révolutionnaire, un prétentieux qui aime la guerre et la confrontation. Il souffrira beaucoup, mais obtiendra le bonheur plus tard s’il apprend de ses épreuves. Devenu riche, il risque cependant de se ruiner par prodigalité et excès. Instable dans ses sentiments, il supporte mal l’union et crée lui-même une grande partie de ses problèmes.",
},
  {
  position: 16,
  id: "fu-medji",
  nomPrincipal: "FU-MEDJI",
  sexe: "feminin",
  figureSymbolique: {
    colonnes: [[2, 1, 2, 1], [2, 1, 2, 1]],
    description:
      "Aboutissement et longévité, signe de durée, de résistance aux épreuves et d’accomplissement tardif.",
  },
  resumeCourt:
    "Signe de longue vie, de protection et de résistance. Fu-Mêdji parle d’une destinée qui traverse le temps, échappe aux morts tragiques et finit par s’imposer malgré les obstacles.",
  motsCles: [
    "longévité",
    "protection contre la mort tragique",
    "résistance",
    "accomplissement tardif",
    "stabilité",
  ],
  texteRue:
    "Fu-Mêdji, c’est le signe de celles et ceux qu’on ne balaie pas facilement. Il annonce une vie longue, une forte capacité à encaisser les coups du destin et à rester debout là où d’autres tombent. Le Fâ montre ici un destin protégé des morts brutales, avec des réussites durables pour celui qui respecte ses interdits. Fu-Mêdji rappelle aussi que la vraie force n’est pas seulement dans le bruit et le spectacle, mais dans la capacité à durer, à rester solide malgré le temps.",
  themesDeVie: [
    "longévité et protection",
    "éviter les morts brutales",
    "projets de long terme",
    "solidité du caractère",
    "réussite progressive",
  ],
  tonGeneral: "plutot_favorable",
  fetiches: ["Odu", "Lissa", "Mawu", "Nâ", "Hoho", "Sakpata", "Hêbiosso", "G", "Loko", "Kpvodoun"],
  feuillesLiturgiques: ["Tutu", "Kgoto", "Zêzma", "Adantfio", "Sinfifama", "Awiima"],
  couleursPreferes: ["Blanc (principal)", "Toutes les autres couleurs sont acceptées"],
  devises: [
    "Tê n min, lò tê n man. Les rivières se dessèchent, mais le repaire du crocodile lò ne tarit jamais. Tout réussira au consultant, qui vivra longtemps s’il se surveille.",
    "Fu-Mêdji ! Nù mèn sô lòvi dolo n kon. Rien ne peut ravir le petit crocodile lòvi devant son père lò. Le consultant ne trouvera pas une mort tragique (doko ku).",
    "Adi wèn gnin, houn kin. Ta n kin n. Le savon mousse pour laver la tête puis disparaît, mais la tête reste. Le «favi» aura la longévité.",
    "Kagbo wèn gba, gàn gbo n gbaa. La calebasse se casse, mais le récipient métallique résiste au choc. Même sens : le «favi» résiste là où d’autres se brisent.",
  ],
  interdits: [
    "Chair de pintade (Sonu)",
    "Toutes nourritures consacrées au vodun Sakpata",
    "Tous les mets grillés (nu mi m)",
    "Vin de palme",
    "Bière de mil et de sorgho",
    "Viande d’éléphant (Adjinaku)",
    "Viande de cheval (Sô)",
    "Viande d’hyène (Hia)",
    "Viande de girafe (Agbanlin)",
    "Coq (interdit commun aux signes majeurs)",
    "Épouser une féticheuse de Sakpata",
    "Se laver dans la mer",
    "Porter des pagnes ou vêtements bigarrés ou de plus de deux couleurs",
  ],
  sacrifices: [
    "Adorer les fétiches Sakpata, Kinnessi et Tohossou",
    "Chaque année, faire des sacrifices avec une volaille domestique rôtie ou grillée et de la viande fraîche",
  ],
  commentaire:
    "L’homme ou la femme né(e) sous Fu-Mêdji sera beaucoup considéré(e) par sa famille et occupera une place importante dans sa communauté. Début de vie parfois difficile, mais qui se transforme en réussite grâce à la persévérance et au respect des prescriptions. Franc, juste et correct avec tout le monde, le «favi» devient riche et charitable et s’élève au-dessus de son milieu par le travail. Fu-Mêdji protège contre les morts brutales, mais demande une grande discipline dans les interdits alimentaires et rituels.",
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
