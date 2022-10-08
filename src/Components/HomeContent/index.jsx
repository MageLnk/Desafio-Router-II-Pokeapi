import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import PokemonHomeDeploy from "../PokemonHomeDeploy";
// Style
import "./HomeContent.css";
// App
const HomeContent = () => {
  const { homeData } = useContext(GeneralContext);
  return (
    <div className="home-content-container">
      <PokemonHomeDeploy dataPokemon={homeData} />
    </div>
  );
};

export default HomeContent;
