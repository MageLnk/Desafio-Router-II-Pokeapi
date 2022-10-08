import { useContext } from "react";
// Style
import GeneralContext from "../../Context/GeneralContext";
import CardPokemon from "../CardPokemon";
// Context
import "./FavoritesPokemonsContent.css";
// App
const FavoritesPokemonsContent = () => {
  const { favoritePokemons } = useContext(GeneralContext);

  const deployUrls = (urls) => {
    const deployUrls = urls.map((result) => {
      return <CardPokemon key={result} pokemonUrl={result} />;
    });
    return deployUrls;
  };
  return (
    <div className="favorite-content-container">
      <div className="favorite-cards-container">{deployUrls(favoritePokemons)}</div>
    </div>
  );
};

export default FavoritesPokemonsContent;
