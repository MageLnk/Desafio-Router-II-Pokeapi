import { useEffect, useState } from "react";
// Context
import GeneralContext from "./";
// Utilities
import apiCall from "../../api/apiCall";

const GeneralContextProvider = ({ children }) => {
  const [homeData, setHomeData] = useState("");
  const [pokemonData, setPokemonData] = useState("");
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  const [pokemonByPaginationData, setPokemonByPaginationData] = useState("");

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

  const handlePokemonsPagination = async (pokemonsPagination) => {
    try {
      let offsetApiCalculation = 0;

      if (+pokemonsPagination === 1) {
        offsetApiCalculation = 0;
      } else {
        offsetApiCalculation = 15 * (+pokemonsPagination - 1);
      }
      const data = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon?offset=${offsetApiCalculation}&limit=15`,
      });
      setPokemonByPaginationData(data);
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

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
        handlePokemonsPagination,
        pokemonByPaginationData,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;

/*

Me faltan 2 cosas.

- Terminar la vista de tipos y su respectiva sub-ruta para ver ese tipo de pokemon.
- Hacer el popup de las cartas de los pokemon

NOTA: Si quieres y hay ganas, hacer responsiva la página respecto a las cartas y el navbar

*/
