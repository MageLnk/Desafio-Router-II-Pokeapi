import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
import GeneralContext from "./Context/GeneralContext/Provider";
// Components
import { Home, Error404 } from "./pages";

const App = () => {
  return (
    <GeneralContext>
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GeneralContext>
  );
};

export default App;
