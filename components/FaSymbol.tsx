interface FaSymbolProps {
  trait: number; // 1 = simple, 2 = double
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
}

export function FaTrait({ trait, size = "md", color = "#78350f" }: FaSymbolProps) {
  const heights = {
    sm: 20,
    md: 32,
    lg: 48,
    xl: 64
  };
  
  const height = heights[size];
  const width = trait === 1 ? 8 : 20;
  const gap = 4;

  if (trait === 1) {
    // Trait simple (I)
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill={color}
          rx="2"
        />
      </svg>
    );
  } else {
    // Trait double (II)
    const barWidth = (width - gap) / 2;
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <rect
          x="0"
          y="0"
          width={barWidth}
          height={height}
          fill={color}
          rx="2"
        />
        <rect
          x={barWidth + gap}
          y="0"
          width={barWidth}
          height={height}
          fill={color}
          rx="2"
        />
      </svg>
    );
  }
}

interface FaSignSymbolProps {
  colonnes: number[][];
  size?: "sm" | "md" | "lg" | "xl";
  showElements?: boolean;
}

export function FaSignSymbol({ colonnes, size = "md", showElements = false }: FaSignSymbolProps) {
  const colors = {
    feu: "#dc2626",    // rouge feu
    air: "#3b82f6",    // bleu air
    eau: "#06b6d4",    // cyan eau
    terre: "#78350f"   // brun terre
  };

  const elements = ["feu", "air", "eau", "terre"];

  return (
    <div className="flex gap-6 justify-center items-center">
      {colonnes.map((colonne, colIdx) => (
        <div key={colIdx} className="flex flex-col gap-2">
          {colonne.map((trait, traitIdx) => (
            <div key={traitIdx} className="flex items-center gap-2">
              <FaTrait
                trait={trait}
                size={size}
                color={showElements ? colors[elements[traitIdx] as keyof typeof colors] : colors.terre}
              />
              {showElements && (
                <span className="text-xs text-gray-500 capitalize">
                  {elements[traitIdx]}
                </span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
