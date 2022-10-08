import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Style
import "./Navbar.css";
// App
const NavBar = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { doSearchByUserInput } = useContext(GeneralContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    doSearchByUserInput(inputValue);
    setInputValue("");
    navigate(`/search/${inputValue}`);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-content-container">
        <div className="navbar-links-container">
          <NavLink to="/">
            <span className="navbar-home">PokeDex</span>
          </NavLink>
          <div className="navbar-options">
            <NavLink
              className={({ isActive }) => (isActive ? "navbar-option-active" : "")}
              to="/pokemons/1"
            >
              Pokemones
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "navbar-option-active" : "")}
              to="favorites"
            >
              Favoritos
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "navbar-option-active" : "")}
              to="/types"
            >
              Tipos
            </NavLink>
          </div>
        </div>
        <form
          typeof="submit"
          className="navbar-search-container"
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            value={inputValue}
            placeholder="Pokemon"
            onChange={({ target }) => setInputValue(target.value)}
          />
          <button onClick={(event) => handleSubmit(event)}>Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
