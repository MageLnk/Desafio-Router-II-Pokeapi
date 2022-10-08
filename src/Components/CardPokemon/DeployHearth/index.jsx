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
  }, [pokemonUrl]);

  return (
    <span className="card-pokemon-hearth-button">
      {handleHearth === true ? (
        <AiTwotoneHeart onClick={() => handleHearthStatus(handleHearth)} />
      ) : (
        <AiOutlineHeart onClick={() => handleHearthStatus(handleHearth)} />
      )}
    </span>
  );
};

export default DeployHearth;
