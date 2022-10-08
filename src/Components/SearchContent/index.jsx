import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
import CardPokemon from "../CardPokemon";
// Style
import "./SearchContent.css";
// App
const SearchContent = () => {
  const { pokemonData } = useContext(GeneralContext);
  console.log(pokemonData);

  return (
    <div className="search-page-content">
      {pokemonData !== undefined ? (
        <>
          {pokemonData === "" ? (
            <div>
              <span>Debe realizar una búsqueda válida primero</span>
            </div>
          ) : (
            <div>OK</div>
          )}
        </>
      ) : (
        <div>
          <span>No hay match</span>
        </div>
      )}
    </div>
  );
};

export default SearchContent;
