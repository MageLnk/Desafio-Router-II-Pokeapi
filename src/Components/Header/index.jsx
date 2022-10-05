import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-links-container">
        <Link to="/">
          <span className="navbar-home">PokeDex</span>
        </Link>
        <div className="navbar-options">
          <Link to="/pokemons">
            <span>Pokemones</span>
          </Link>
          <Link to="favorites">
            <span>Favoritos</span>
          </Link>
          <Link to="/types">
            <span>Tipos</span>
          </Link>
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
