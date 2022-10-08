import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import PokemonHomeDeploy from "../PokemonHomeDeploy";
import PreviusAndNextButtons from "../PreviusAndNextButtons";
// Style
import "./HomeContent.css";
// App
const HomeContent = () => {
  const { homeData } = useContext(GeneralContext);
  return (
    <div className="home-content-container">
      <PreviusAndNextButtons />
      <PokemonHomeDeploy dataPokemon={homeData} />
      <PreviusAndNextButtons />
    </div>
  );
};

export default HomeContent;
