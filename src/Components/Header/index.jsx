import { NavLink } from "react-router-dom";
// App
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-links-container">
        <NavLink to="/">
          <span className="navbar-home">PokeDex</span>
        </NavLink>
        <div className="navbar-options">
          <NavLink
            className={({ isActive }) => (isActive ? "navbar-option-active" : "")}
            to="/pokemons"
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
      <div className="navbar-search-container">
        <input placeholder="Pokemon" />
        <button>Buscar</button>
      </div>
    </div>
  );
};

export default NavBar;

// <span className="navbar-home">PokeDex</span>
