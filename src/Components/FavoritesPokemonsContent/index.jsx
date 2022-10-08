import { useContext } from "react";
// Style
import GeneralContext from "../../Context/GeneralContext";
import CardPokemon from "../CardPokemon";
import PreviusAndNextButtons from "../PreviusAndNextButtons";
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
      <PreviusAndNextButtons />
      <div className="favorite-cards-container">{deployUrls(favoritePokemons)}</div>
      <PreviusAndNextButtons />
    </div>
  );
};

export default FavoritesPokemonsContent;
