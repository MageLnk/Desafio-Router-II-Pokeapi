const defineBackgroundColor = (color) => {
  const arrayColorsByType = [
    { type: "normal", color: "#a8a878" },
    { type: "fighting", color: "#c03028" },
    { type: "flying", color: "#a890f0" },
    { type: "poison", color: "#a040a0" },
    { type: "ground", color: "#e0c068" },
    { type: "rock", color: "#b8a038" },
    { type: "bug", color: "#a8b820" },
    { type: "ghost", color: "#705898" },
    { type: "steel", color: "#b8b8d0" },
    { type: "fire", color: "#f08030" },
    { type: "water", color: "#6890f0" },
    { type: "electric", color: "#f8d030" },
    { type: "grass", color: "#78c850" },
    { type: "ice", color: "#98d8d8" },
    { type: "dragon", color: "#7038f8" },
    { type: "dark", color: "#705848" },
    { type: "fairy", color: "#ee99ac" },
    { type: "psychic", color: "#f85888" },
    { type: "unknown", color: "#619d8b" },
    { type: "shadow", color: "#040002" },
  ];
  // eslint-disable-next-line
  const findMatch = arrayColorsByType.filter((result) => {
    if (result.type === color) {
      return result;
    }
  });

  return findMatch[0].color;
};

export default defineBackgroundColor;
