// Components
import CardPokemon from "../../../CardPokemon";
// style
import "./PokemonDeploy.css";
// App
const PokemonHomeDeploy = ({ dataPokemon }) => {
  const showHomeData = ({ results }) => {
    const mapHomeData = results.map((data) => {
      return (
        <div key={data.name}>
          <CardPokemon pokemonUrl={data.url} />
        </div>
      );
    });
    return mapHomeData;
  };
  return <div className="pokemon-deploy-container">{dataPokemon && showHomeData(dataPokemon)}</div>;
};

export default PokemonHomeDeploy;
