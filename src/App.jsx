import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
import GeneralContext from "./Context/GeneralContext/Provider";
// Pages
import { Home, Pokemons, FavoritesPokemons, Search, Error404, PokemonTypes } from "./pages";
// Components
import { NavBar, Footer } from "./Components";

const App = () => {
  return (
    <GeneralContext>
      <div className="app-container">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritesPokemons />} />
            <Route path="/search/:name" element={<Search />} />
            <Route path="/pokemons/:page" element={<Pokemons />} />
            <Route path="/types" element={<PokemonTypes />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </GeneralContext>
  );
};

export default App;
