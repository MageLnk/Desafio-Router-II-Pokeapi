import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Components
import CardPokemon from "../CardPokemon";
// Style
import "./SearchContent.css";
// App
const SearchContent = () => {
  const { pokemonData } = useContext(GeneralContext);

  return (
    <div className="search-page-content">
      {pokemonData !== undefined ? (
        <>
          {pokemonData === "" ? (
            <div className="search-page-ask-for-search">
              <span>Debe realizar una búsqueda válida primero</span>
            </div>
          ) : (
            <div className="search-page-pokemon-card-container">
              <CardPokemon pokemonUrl={pokemonData} />
            </div>
          )}
        </>
      ) : (
        <div className="search-page-pokemon-not-found">
          <span>La búsqueda realizada no trae ningún resultado válido.</span>
          <span>Favor ingresar un nombre de un pokemon correcto</span>
        </div>
      )}
    </div>
  );
};

export default SearchContent;

/*

NOTA para mi yo del futuro o quién sea que esté leyendo esto:

Entiendo que no es lo más óptimo hacer un doble fetch para traer el pokemon data. Lo lógico es, cuando llamo
a la función doSearchByUserInput que está en el context, debería guardar la data que me trae la APi y en base a esa
data llenar la información de esa página. LO SÉ, pero, si solo hago un bypass y guardo el ID para hacer
otra innecesaría llamada a la API, es para reutilizar el component "CardPokemon" que funciona en base a
una URL y así ahorrarme la construcción de esta página, ya que necesito tener listo el trabajo antes de la entrega. 
Básicamente es para ahorrar tiempo.

En un futuro, cuando tenga tiempo y me acuerde, haré una página especializada para esta search page

*/
