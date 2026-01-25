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
      "Signe de vie, de lumière et d&apos;ouverture, il annonce souvent des débuts favorables mais demande de rester responsable et lucide.",
    motsCles: ["vie", "lumière", "ouverture", "chance", "responsabilité"],
    texteRue:
      "Gbe-Medji, c&apos;est le signe de la vie qui s&apos;ouvre. Il représente le commencement, la création, la lumière qui éclaire. Quand ce signe apparaît, ça parle souvent de nouvelles opportunités, de portes qui s&apos;ouvrent, de projets qui peuvent bien démarrer. Mais attention: ce n&apos;est pas un billet gratuit pour le succès. Gbe-Medji demande d&apos;être sérieux, organisé et de ne pas gaspiller les chances qui se présentent.",
    themesDeVie: ["nouveau départ", "opportunité professionnelle", "début de projet", "croissance"],
    tonGeneral: "plutot_favorable",
  },
  {
    position: 2,
    id: "yekou-medji",
    nomPrincipal: "YEKOU-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 2, 2, 2], [2, 2, 2, 2]],
    },
    resumeCourt: "Signe de fin de cycle et de transformation profonde.",
    motsCles: ["mort", "fin", "transformation", "passage", "recommencement"],
    texteRue:
      "Yekou-Medji, c&apos;est le signe qui dit &quot;quelque chose doit finir pour qu&apos;autre chose commence&quot;. Ça ne parle pas forcément de mort physique, mais plutôt de la fin d&apos;une étape: un travail qui se termine, une relation qui s&apos;arrête, une façon de vivre qui doit changer.",
    themesDeVie: ["fin de cycle", "deuil", "transformation", "acceptation"],
    tonGeneral: "equilibre",
  },
  {
    position: 3,
    id: "woli-medji",
    nomPrincipal: "WOLI-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 1, 1, 2], [2, 1, 1, 2]],
    },
    resumeCourt: "Signe de patience et de protection par l&apos;effort.",
    motsCles: ["patience", "épreuves", "protection", "sacrifice", "sagesse"],
    texteRue:
      "Woli-Medji, c&apos;est le signe qui te dit: &quot;La vie va te demander de tenir bon, de supporter un peu, de faire des efforts maintenant pour être protégé demain&quot;.",
    themesDeVie: ["patience", "endurance", "protection", "sagesse"],
    tonGeneral: "plutot_difficile",
  },
  {
    position: 4,
    id: "di-medji",
    nomPrincipal: "DI-MEDJI",
    figureSymbolique: {
      colonnes: [[1, 2, 2, 1], [1, 2, 2, 1]],
    },
    motsCles: ["richesse", "abondance", "responsabilité", "gestion", "prospérité"],
  },
  {
    position: 5,
    id: "losso-medji",
    nomPrincipal: "LOSSO-MEDJI",
    figureSymbolique: {
      colonnes: [[1, 1, 2, 2], [1, 1, 2, 2]],
    },
    motsCles: ["stabilité", "construction", "fondation", "patience", "progression"],
  },
  {
    position: 6,
    id: "winlin-medji",
    nomPrincipal: "WINLIN-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 2, 1, 1], [2, 2, 1, 1]],
    },
    motsCles: ["renversement", "changement", "adaptation", "souplesse", "évolution"],
  },
  {
    position: 7,
    id: "abla-medji",
    nomPrincipal: "ABLA-MEDJI",
    figureSymbolique: {
      colonnes: [[1, 2, 2, 2], [1, 2, 2, 2]],
    },
    motsCles: ["force", "pouvoir", "autorité", "leadership", "influence"],
  },
  {
    position: 8,
    id: "aklan-medji",
    nomPrincipal: "AKLAN-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 2, 2, 1], [2, 2, 2, 1]],
    },
    motsCles: ["guerre", "combat", "courage", "victoire", "confrontation"],
  },
  {
    position: 9,
    id: "guda-medji",
    nomPrincipal: "GUDA-MEDJI",
    figureSymbolique: {
      colonnes: [[1, 1, 1, 2], [1, 1, 1, 2]],
    },
    motsCles: ["voyage", "mouvement", "déplacement", "exploration", "découverte"],
  },
  {
    position: 10,
    id: "sa-medji",
    nomPrincipal: "SA-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 1, 1, 1], [2, 1, 1, 1]],
    },
    motsCles: ["justice", "vérité", "équilibre", "rectitude", "clarté"],
  },
  {
    position: 11,
    id: "ka-medji",
    nomPrincipal: "KA-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 1, 2, 2], [2, 1, 2, 2]],
    },
    motsCles: ["communication", "parole", "message", "relation", "échange"],
  },
  {
    position: 12,
    id: "trukpin-medji",
    nomPrincipal: "TRUKPIN-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 2, 1, 2], [2, 2, 1, 2]],
    },
    motsCles: ["mystère", "secret", "initiation", "profondeur", "connaissance"],
  },
  {
    position: 13,
    id: "tula-medji",
    nomPrincipal: "TULA-MEDJI",
    figureSymbolique: {
      colonnes: [[1, 2, 1, 1], [1, 2, 1, 1]],
    },
    motsCles: ["chaos", "désordre", "transformation", "purification", "renouveau"],
  },
  {
    position: 14,
    id: "lete-medji",
    nomPrincipal: "LETE-MEDJI",
    figureSymbolique: {
      colonnes: [[1, 1, 2, 1], [1, 1, 2, 1]],
    },
    motsCles: ["bénédiction", "faveur", "chance", "protection", "grâce"],
  },
  {
    position: 15,
    id: "tche-medji",
    nomPrincipal: "TCHE-MEDJI",
    figureSymbolique: {
      colonnes: [[1, 2, 1, 2], [1, 2, 1, 2]],
    },
    motsCles: ["dualité", "choix", "décision", "carrefour", "alternance"],
  },
  {
    position: 16,
    id: "fu-medji",
    nomPrincipal: "FU-MEDJI",
    figureSymbolique: {
      colonnes: [[2, 1, 2, 1], [2, 1, 2, 1]],
    },
    motsCles: ["longévité", "durée", "résistance", "persévérance", "survie"],
  },
];
