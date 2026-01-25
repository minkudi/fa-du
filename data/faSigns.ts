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
}

export const faMotherSigns: FaSign[] = [
  {
    position: 1,
    id: "gbe-medji",
    nomPrincipal: "GBE-MEDJI",
    figureSymbolique: {
      colonnes: [[1, 1, 1, 1], [1, 1, 1, 1]],
      description: "Deux colonnes pleines, symbole de force vitale qui circule bien.",
    },
    resumeCourt:
      "Signe de vie, de lumière et d'ouverture, il annonce souvent des débuts favorables mais demande de rester responsable et lucide.",
    motsCles: ["vie", "lumière", "ouverture", "chance", "responsabilité"],
    texteRue:
      "Gbe-Medji, c'est le signe de la vie qui s'ouvre. Il représente le commencement, la création, la lumière qui éclaire. Quand ce signe apparaît, ça parle souvent de nouvelles opportunités, de portes qui s'ouvrent, de projets qui peuvent bien démarrer. Mais attention: ce n'est pas un billet gratuit pour le succès. Gbe-Medji demande d'être sérieux, organisé et de ne pas gaspiller les chances qui se présentent.",
    themesDeVie: ["nouveau départ", "opportunité professionnelle", "début de projet", "croissance"],
    tonGeneral: "plutot_favorable",
  },
  {
    position: 2,
    id: "yekou-medji",
    nomPrincipal: "YEKOU-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 2, 2, 2], [2, 2, 2, 2]],
      description: "Deux colonnes doubles, symbole de la fin et de la nuit.",
    },
    resumeCourt: "Signe de fin de cycle et de transformation profonde.",
    motsCles: ["mort", "fin", "transformation", "passage", "recommencement"],
    texteRue:
      "Yekou-Medji, c'est le signe qui dit \"quelque chose doit finir pour qu'autre chose commence\". Ça ne parle pas forcément de mort physique, mais plutôt de la fin d'une étape: un travail qui se termine, une relation qui s'arrête, une façon de vivre qui doit changer.",
    themesDeVie: ["fin de cycle", "deuil", "transformation", "acceptation"],
    tonGeneral: "equilibre",
  },
  {
    position: 3,
    id: "woli-medji",
    nomPrincipal: "WOLI-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 1, 1, 2], [2, 1, 1, 2]],
      description: "Colonnes alternées, symbole de patience face aux épreuves.",
    },
    resumeCourt: "Signe de patience et de protection par l'effort.",
    motsCles: ["patience", "épreuves", "protection", "sacrifice", "sagesse"],
    texteRue:
      "Woli-Medji, c'est le signe qui te dit: \"La vie va te demander de tenir bon, de supporter un peu, de faire des efforts maintenant pour être protégé demain\".",
    themesDeVie: ["patience", "endurance", "protection", "sagesse"],
    tonGeneral: "plutot_difficile",
  },
  {
    position: 4,
    id: "di-medji",
    nomPrincipal: "DI-MEDJI",
    figureSymbolique: {
      colonnes: [[1, 2, 2, 1], [1, 2, 2, 1]],
      description: "Structure équilibrée, symbole de richesse et abondance matérielle.",
    },
    resumeCourt: "Signe de richesse, d'abondance et de prospérité. Apporte la responsabilité de bien gérer les biens matériels.",
    motsCles: ["richesse", "abondance", "responsabilité", "gestion", "prospérité"],
    texteRue:
      "Di-Medji, c'est le signe de l'argent et de la richesse. Il parle de gains financiers, d'opportunités d'affaires, de croissance matérielle. Mais avec la richesse vient la responsabilité: Di-Medji demande de bien gérer ses biens, de ne pas tomber dans la cupidité et de partager sa prospérité avec les autres.",
    themesDeVie: ["prospérité financière", "opportunité d'affaires", "gestion de patrimoine", "générosité"],
    tonGeneral: "plutot_favorable",
  },
  {
    position: 5,
    id: "losso-medji",
    nomPrincipal: "LOSSO-MEDJI",
    figureSymbolique: {
      colonnes: [[1, 1, 2, 2], [1, 1, 2, 2]],
      description: "Progression ordonnée, symbole de construction stable et durable.",
    },
    resumeCourt: "Signe de stabilité, de construction et de fondations solides. Représente la patience dans l'édification.",
    motsCles: ["stabilité", "construction", "fondation", "patience", "progression"],
    texteRue:
      "Losso-Medji, c'est le signe du bâtisseur, de celui qui construit pierre par pierre. Il parle de créer quelque chose de solide, de durable, sans précipitation. C'est le signe des fondations, de la stabilité, du travail bien fait qui résiste au temps. Losso-Medji enseigne la patience et la persévérance dans la construction de projets.",
    themesDeVie: ["construction de projet", "stabilité familiale", "investissement durable", "patience créative"],
    tonGeneral: "plutot_favorable",
  },
  {
    position: 6,
    id: "winlin-medji",
    nomPrincipal: "WINLIN-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 2, 1, 1], [2, 2, 1, 1]],
      description: "Inversion de Losso, symbole de renversement et changement brutal.",
    },
    resumeCourt: "Signe de renversement, de changement soudain et d'adaptation nécessaire.",
    motsCles: ["renversement", "changement", "adaptation", "souplesse", "évolution"],
    texteRue:
      "Winlin-Medji, c'est le signe qui dit \"tout peut basculer du jour au lendemain\". Il parle de changements soudains, de situations qui se renversent complètement. Ce qui était en haut se retrouve en bas et vice-versa. Ce n'est pas forcément négatif, mais ça demande une grande capacité d'adaptation. Winlin-Medji enseigne la souplesse et la capacité à rebondir.",
    themesDeVie: ["changement professionnel", "bouleversement de situation", "adaptation rapide", "résilience"],
    tonGeneral: "equilibre",
  },
  {
    position: 7,
    id: "abla-medji",
    nomPrincipal: "ABLA-MEDJI",
    figureSymbolique: {
      colonnes: [[1, 2, 2, 2], [1, 2, 2, 2]],
      description: "Prédominance d'éléments doubles, symbole de force et autorité.",
    },
    resumeCourt: "Signe de force, de pouvoir et d'autorité. Représente le leadership et l'influence.",
    motsCles: ["force", "pouvoir", "autorité", "leadership", "influence"],
    texteRue:
      "Abla-Medji, c'est le signe du chef, du leader, de celui qui a l'autorité. Il parle de pouvoir, d'influence, de capacité à diriger et à prendre des décisions importantes. Mais attention: le pouvoir sans sagesse peut devenir oppression. Abla-Medji demande d'exercer son autorité avec justice, équité et responsabilité envers ceux qu'on dirige.",
    themesDeVie: ["leadership", "autorité professionnelle", "influence sociale", "prise de décision", "responsabilité"],
    tonGeneral: "plutot_favorable",
  },
  {
    position: 8,
    id: "aklan-medji",
    nomPrincipal: "AKLAN-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 2, 2, 1], [2, 2, 2, 1]],
      description: "Force contrariée, symbole de guerre, lutte et confrontation.",
    },
    resumeCourt: "Signe de guerre, de combat et de confrontation. Demande courage et détermination face aux obstacles.",
    motsCles: ["guerre", "combat", "courage", "victoire", "confrontation"],
    texteRue:
      "Aklan-Medji, c'est le signe du guerrier, de celui qui doit se battre. Il parle de lutte, de combat, de situations difficiles où rien ne vient facilement. Ce n'est pas un signe de paix, mais de confrontation nécessaire. Aklan-Medji enseigne le courage, la détermination et la capacité à affronter l'adversité sans reculer, même quand c'est dur.",
    themesDeVie: ["lutte acharnée", "adversité", "courage face au danger", "défense de ses droits", "victoire difficile"],
    tonGeneral: "plutot_difficile",
  },
  {
    position: 9,
    id: "guda-medji",
    nomPrincipal: "GUDA-MEDJI",
    figureSymbolique: {
      colonnes: [[1, 1, 1, 2], [1, 1, 1, 2]],
      description: "Mouvement ascendant, symbole de voyage et déplacement.",
    },
    resumeCourt: "Signe de voyage, de mouvement et d'exploration. Représente les déplacements et la découverte.",
    motsCles: ["voyage", "mouvement", "déplacement", "exploration", "découverte"],
    texteRue:
      "Guda-Medji, c'est le signe du voyageur, de celui qui bouge. Il parle de déplacements, de voyages, de changements de lieu. Ça peut être un voyage physique (déménagement, mission à l'étranger, déplacement professionnel) ou un voyage intérieur (évolution personnelle, découverte spirituelle). Guda-Medji enseigne l'ouverture au monde et à la nouveauté.",
    themesDeVie: ["voyage à l'étranger", "déménagement", "exploration", "ouverture culturelle", "évolution personnelle"],
    tonGeneral: "plutot_favorable",
  },
  {
    position: 10,
    id: "sa-medji",
    nomPrincipal: "SA-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 1, 1, 1], [2, 1, 1, 1]],
      description: "Équilibre parfait, symbole de justice et vérité.",
    },
    resumeCourt: "Signe de justice, de vérité et d'équilibre. Représente la rectitude et l'équité.",
    motsCles: ["justice", "vérité", "équilibre", "rectitude", "clarté"],
    texteRue:
      "Sa-Medji, c'est le signe de la balance, de la justice et de la vérité. Il parle de situations où il faut trancher, juger, décider avec équité. C'est le signe de la clarté morale, de l'honnêteté et de la rectitude. Sa-Medji enseigne à être juste dans ses jugements, à dire la vérité même quand c'est difficile, et à chercher l'équilibre dans toutes les situations.",
    themesDeVie: ["justice", "décision équitable", "dire la vérité", "médiation", "clarté morale"],
    tonGeneral: "plutot_favorable",
  },
  {
    position: 11,
    id: "ka-medji",
    nomPrincipal: "KA-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 1, 2, 2], [2, 1, 2, 2]],
      description: "Flux de communication, symbole de parole et message.",
    },
    resumeCourt: "Signe de communication, de parole et d'échange. Représente la transmission de messages.",
    motsCles: ["communication", "parole", "message", "relation", "échange"],
    texteRue:
      "Ka-Medji, c'est le signe du messager, de celui qui parle et transmet l'information. Il parle de communication, d'échanges, de discussions importantes, de négociations. C'est le signe des relations, du dialogue, de la capacité à bien s'exprimer et à se faire comprendre. Ka-Medji enseigne l'importance de la parole juste, de l'écoute et du dialogue constructif.",
    themesDeVie: ["communication efficace", "dialogue", "négociation", "enseignement", "transmission de savoir"],
    tonGeneral: "plutot_favorable",
  },
  {
    position: 12,
    id: "trukpin-medji",
    nomPrincipal: "TRUKPIN-MEDJI",
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
  },
  {
    position: 13,
    id: "tula-medji",
    nomPrincipal: "TULA-MEDJI",
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
  },
  {
    position: 14,
    id: "lete-medji",
    nomPrincipal: "LETE-MEDJI",
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
  },
  {
    position: 15,
    id: "tche-medji",
    nomPrincipal: "TCHE-MEDJI",
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
  },
  {
    position: 16,
    id: "fu-medji",
    nomPrincipal: "FU-MEDJI",
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
      
      // ✅ CHANGEMENT ICI: ID plus court pour les vikandos
      const combinationId = estSigneMere 
        ? signePrincipal.id
        : `${signePrincipal.id.replace('-medji', '')}-${signeCompagnie.id.replace('-medji', '')}`;
      
      combinations.push({
        type: estSigneMere ? "signe-mere" : "vikando",
        id: combinationId, // ✅ Utilise le nouveau ID court
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
    signesMeres: all.filter(c => c.type === "signe-mere").length,
    vikandos: all.filter(c => c.type === "vikando").length
  };
}

