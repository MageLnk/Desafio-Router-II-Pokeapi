import { useEffect, useState } from "react";
// Context
import GeneralContext from ".";
// Utilities
import apiCall from "../../api/apiCall";

const GeneralContextProvider = ({ children }) => {
  const [homeData, setHomeData] = useState("");
  const [pokemonData, setPokemonData] = useState("");
  //const [pokemonByPaginationData, setPokemonByPaginationData] = useState("");
  //const [offsetPokemonPageSearch, setOffsetPokemonPageSearch] = useState(0);

  const doSearchByUserInput = async (inputData) => {
    const lowerCaseInput = inputData.toLowerCase();
    try {
      const data = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${lowerCaseInput}/`,
      });
      if (data === undefined) {
        setPokemonData(data);
      } else {
        setPokemonData(`https://pokeapi.co/api/v2/pokemon/${data.id}/`);
      }
    } catch (e) {
      alert("Un error catastrófico ha ocurrido. Por favor actualice la página");
    }
  };

  //const validationPagination = (next, previus) => {
  //  console.log("next", next, "previus", previus);
  //};

  const getAllData = async () => {
    try {
      const data = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=15`,
      });
      setHomeData(data);
    } catch (e) {
      alert("Un error catastrófico ha ocurrido. Por favor actualice la página");
    }
  };

  //const getPokemonPagination = async (nextPagination, previusPagination) => {
  //  //validationPagination(nextPagination, previusPagination);
  //  // Temporal Logic for previus and all that
  //  try {
  //    const data = await apiCall({
  //      url: `https://pokeapi.co/api/v2/pokemon?offset=${offsetPokemonPageSearch}&limit=15`,
  //    });
  //    console.log(data);
  //    // Insert setData(data)
  //  } catch (e) {
  //    alert("Un error ha ocurrido. Por favor actualice la página");
  //  }
  //};

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <GeneralContext.Provider value={{ homeData, pokemonData, doSearchByUserInput }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
