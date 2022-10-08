import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import PokemonDeploy from "../PokemonDeploy";
// App
const HomeContent = () => {
  const { homeData } = useContext(GeneralContext);
  return (
    <div className="home-content-container">
      <PokemonDeploy dataPokemon={homeData} />
    </div>
  );
};

export default HomeContent;
