import { useEffect, useState } from "react";
// apiCall
import apiCall from "../../api/apiCall";
// Style
import { Card } from "antd";
import { AiOutlineHeart } from "react-icons/ai";
import "./CardPokemon.css";
import defineBackgroundColor from "./defineBackgroundColorFunction";
//AiTwotoneHeart
// App
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

  const mayusFunction = (pokeName) => {
    const mayusName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    return mayusName;
  };

  const typePokemonArray = (pokeType) => {
    const deployButtons = pokeType.types.map((info) => {
      return (
        <button
          key={info.type.name}
          className="card-pokemon-button"
          style={{
            border: "black 1px solid",
            borderRadius: "5px",
            backgroundColor: defineBackgroundColor(info.type.name),
          }}
        >
          {mayusFunction(info.type.name)}
        </button>
      );
    });

    return deployButtons;
  };

  useEffect(() => {
    GetPokemonData(pokemonUrl);
  }, [pokemonUrl]);

  console.log("Dentro del component card", dataPokemon);

  return (
    <div className="card-content-container">
      {!dataPokemon ? (
        <div>Loading...</div>
      ) : (
        <Card
          hoverable
          style={{ cursor: "default", width: "300px" }}
          bodyStyle={{
            padding: 0,
            backgroundColor: defineBackgroundColor(dataPokemon.types[0].type.name),
          }}
        >
          <>
            <img alt="example" src={dataPokemon.sprites.other.dream_world.front_default} />
            <div className="card-preview-data-container">
              <span className="card-pokemon-title">{mayusFunction(dataPokemon.name)}</span>
              <span className="card-pokemon-general-info">Altura: {dataPokemon.height}</span>
              <span className="card-pokemon-general-info">Peso: {dataPokemon.weight}</span>
              <span className="card-pokemon-pokedex"># {dataPokemon.id}</span>
              <div className="card-pokemon-button-container">{typePokemonArray(dataPokemon)}</div>
              <div className="card-pokemon-hearth-container">
                <span className="card-pokemon-hearth-button">
                  <AiOutlineHeart />
                </span>
              </div>
            </div>
          </>
        </Card>
      )}
    </div>
  );
};

export default CardPokemon;
