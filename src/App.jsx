import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
import GeneralContext from "./Context/GeneralContext/Provider";
// Pages
import { Home, Pokemons, Favorites, Error404 } from "./pages";
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
            <Route path="/pokemons" element={<Pokemons />} />
            <Route path="/favorites" element={<Favorites />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </GeneralContext>
  );
};

export default App;
