import { useContext } from "react";
// Context
import GeneralContext from "../../../Context/GeneralContext";
// Components
import CardPokemon from "../../CardPokemon";
import PreviusAndNextButtons from "../../PreviusAndNextButtons";
// Style
import "./PokemonsContent.css";
// App
const PokemonsContent = () => {
  const { pokemonByPaginationData } = useContext(GeneralContext);

  const getUrls = (pokemonData) => {
    const mapPokeData = pokemonData.results.map((result) => {
      return (
        <div key={result.name} className="pokemons-card-container">
          <CardPokemon pokemonUrl={result.url} />
        </div>
      );
    });

    return mapPokeData;
  };
  return (
    <div className="pokemons-content-container">
      <PreviusAndNextButtons />
      <div className="pokemons-deploy-container">
        {pokemonByPaginationData && getUrls(pokemonByPaginationData)}
      </div>

      <PreviusAndNextButtons />
    </div>
  );
};

export default PokemonsContent;
