import { useContext, useEffect, useState } from "react";
// Context
import GeneralContext from "../../../Context/GeneralContext";
// Style
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
// App
const DeployHearth = ({ pokemonUrl }) => {
  const { handleFavoritePokemon } = useContext(GeneralContext);
  const [handleHearth, setHandleHearth] = useState(false);

  const handleHearthStatus = (hearthStatus) => {
    handleFavoritePokemon(pokemonUrl, !handleHearth);
    setHandleHearth(!hearthStatus);
  };

  const deployHearth = () => {
    if (handleHearth === true) {
      return <AiTwotoneHeart onClick={() => handleHearthStatus(handleHearth)} />;
    } else {
      return <AiOutlineHeart onClick={() => handleHearthStatus(handleHearth)} />;
    }
  };

  useEffect(() => {
    const bringLocalStorageData = JSON.parse(localStorage.getItem("favoritesPokemons"));
    if (!bringLocalStorageData) {
      return;
    }
    bringLocalStorageData.forEach((url) => {
      if (url === pokemonUrl) {
        setHandleHearth(true);
      }
    });
    // eslint-disable-next-line
  }, []);

  return <span className="card-pokemon-hearth-button">{deployHearth()}</span>;
};

export default DeployHearth;
