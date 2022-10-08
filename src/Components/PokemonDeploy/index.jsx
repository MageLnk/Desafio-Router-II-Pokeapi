// Components
import CardPokemon from "./CardPokemon";
// App
const PokemonDeploy = ({ dataPokemon }) => {
  const showHomeData = ({ results }) => {
    const mapHomeData = results.map((info) => {
      console.log("Info", info);
      const mayusPokemonName = info.name.charAt(0).toUpperCase() + info.name.slice(1);
      return (
        <div key={info.name}>
          <CardPokemon namePokemon={mayusPokemonName} />
        </div>
      );
    });
    return mapHomeData;
  };
  return <div className="pokemon-deploy-container">{dataPokemon && showHomeData(dataPokemon)}</div>;
};

export default PokemonDeploy;
