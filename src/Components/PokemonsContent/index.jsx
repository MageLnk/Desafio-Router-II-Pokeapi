// Components
import CardPokemon from "../CardPokemon";
import PreviusAndNextButtons from "../PreviusAndNextButtons";
// Style
import "./PokemonsContent.css";
// App
const PokemonsContent = () => {
  return (
    <div className="pokemons-content-container">
      <PreviusAndNextButtons />
      <CardPokemon pokemonUrl={"Algo"} />
      <PreviusAndNextButtons />
    </div>
  );
};

export default PokemonsContent;
