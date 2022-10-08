import { useEffect, useState } from "react";
// apiCall
import apiCall from "../../../api/apiCall";
// Style
import { Card } from "antd";
const CardPokemon = ({ pokemonUrl }) => {
  const [dataPokemon, setDataPokemon] = useState("");

  const GetPokemonData = async (url) => {
    try {
      const data = await apiCall({ url });
      setDataPokemon(data);
    } catch (e) {
      alert("Un error catastrófico ha ocurrido. Por favor actualice la página");
    }
  };

  const mayusPokemonName = (pokeName) => {
    const mayusName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    return mayusName;
  };

  useEffect(() => {
    GetPokemonData(pokemonUrl);
  }, [pokemonUrl]);

  console.log("Dentro del component card", dataPokemon);

  return (
    <>
      {!dataPokemon ? (
        <div>Loading...</div>
      ) : (
        <Card
          hoverable
          className="card-container"
          cover={
            <>
              <img alt="example" src={dataPokemon.sprites.other.dream_world.front_default} />
              <div className="card-preview-data-container">
                <span className="card-pokemon-title">{mayusPokemonName(dataPokemon.name)}</span>
              </div>
            </>
          }
        />
      )}
    </>
  );
};

export default CardPokemon;
