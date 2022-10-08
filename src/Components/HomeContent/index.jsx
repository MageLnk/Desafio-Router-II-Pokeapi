import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import PokemonDeploy from "../PokemonDeploy";
// Style
import "./HomeContent.css";
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
