import { useEffect, useState } from "react";
// Context
import GeneralContext from ".";
// Utilities
import apiCall from "../../api/apiCall";

const GeneralContextProvider = ({ children }) => {
  const [homeData, setHomeData] = useState("");
  //const [pokemonByPaginationData, setPokemonByPaginationData] = useState("");
  //const [offsetPokemonPageSearch, setOffsetPokemonPageSearch] = useState(0);

  const doSearchByUserInput = (inputData) => {
    console.log("Temporal Log, for future implement", inputData);
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
    <GeneralContext.Provider value={{ homeData, doSearchByUserInput }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
