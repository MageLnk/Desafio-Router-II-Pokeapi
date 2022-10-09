//import { useContext } from "react";
//import { useParams } from "react-router-dom";
// Context

// Components
import CardPokemon from "../CardPokemon";
import PreviusAndNextButtons from "../PreviusAndNextButtons";
// Style
import "./PokemonsContent.css";
// App
const PokemonsContent = () => {
  //const { page } = useParams();
  //const { getPokemonPagination } = useContext(GeneralContext);
  //useEffect(() => {
  //  getPokemonPagination(page);
  //}, [page]);
  return (
    <div className="pokemons-content-container">
      <PreviusAndNextButtons />
      <CardPokemon pokemonUrl={"Algo"} />
      <PreviusAndNextButtons />
    </div>
  );
};

export default PokemonsContent;
