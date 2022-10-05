import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
import GeneralContext from "./Context/GeneralContext/Provider";
// Pages
import { Home, Error404 } from "./pages";
// Components
import { NavBar, Footer } from "./Components";

const App = () => {
  return (
    <GeneralContext>
      <div className="app-container">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </GeneralContext>
  );
};

export default App;
