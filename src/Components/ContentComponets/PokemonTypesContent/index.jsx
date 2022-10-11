import { useEffect, useState } from "react";
// Style
import "./PokemonTypesContent.css";
// Api
import apiCall from "../../../api/apiCall";
import { Card } from "antd";
// Utilities
import { defineBackgroundColor, mayusFirstLetter } from "../../../utilities";
// App
const PokemonTypesContent = () => {
  const [pokemonTypes, setPokemonTypes] = useState("");
  const getTypeData = async () => {
    try {
      const data = await apiCall({
        url: `https://pokeapi.co/api/v2/type`,
      });
      setPokemonTypes(data);
    } catch (e) {
      alert("Un error catastrófico ha ocurrido. Por favor actualice la página");
    }
  };

  const deployPokemonTypes = ({ results }) => {
    const returnTypes = results.map((types) => {
      return (
        <div style={{ margin: "1rem 0 1rem 0" }}>
          <Card key={types.name} bodyStyle={{ backgroundColor: defineBackgroundColor(types.name) }}>
            <span>{mayusFirstLetter(types.name)}</span>
          </Card>
        </div>
      );
    });
    return returnTypes;
  };

  useEffect(() => {
    getTypeData();
  }, []);

  return (
    <div className="pokemon-types-content">
      <div className="pokemon-types-deploy">{pokemonTypes && deployPokemonTypes(pokemonTypes)}</div>
    </div>
  );
};

export default PokemonTypesContent;
