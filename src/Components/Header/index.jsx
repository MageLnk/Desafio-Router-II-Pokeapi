const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-links-container">
        <span className="navbar-home">PokeDex</span>
        <div className="navbar-options">
          <span>Pokemones</span>
          <span>Favoritos</span>
          <span>Tipos</span>
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
