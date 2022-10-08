import { useEffect, useState } from "react";
// Context
import GeneralContext from ".";
// Utilities
import apiCall from "../../api/apiCall";

const GeneralContextProvider = ({ children }) => {
  const [homeData, setHomeData] = useState("");
  const [pokemonData, setPokemonData] = useState("");
  const [favoritePokemons, setFavoritePokemons] = useState([]);
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

  const handleFavoritePokemon = (pokemonData, status) => {
    let newPokemonArray = favoritePokemons;
    if (status === true) {
      newPokemonArray.push(pokemonData);
      setFavoritePokemons([...newPokemonArray]);
      localStorage.setItem("favoritesPokemons", JSON.stringify([...newPokemonArray]));
    }
    if (status === false) {
      newPokemonArray.forEach((data, i) => {
        if (pokemonData === data) {
          newPokemonArray.splice(i, 1);
          setFavoritePokemons([...newPokemonArray]);
          localStorage.setItem("favoritesPokemons", JSON.stringify([...newPokemonArray]));
        }
      });
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
    const bringLocalStorageData = JSON.parse(localStorage.getItem("favoritesPokemons"));
    if (bringLocalStorageData) {
      setFavoritePokemons([...bringLocalStorageData]);
    }
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        homeData,
        pokemonData,
        favoritePokemons,
        doSearchByUserInput,
        handleFavoritePokemon,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
