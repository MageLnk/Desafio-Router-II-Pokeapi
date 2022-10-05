import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
import GeneralContext from "./Context/GeneralContext";
// Components
import { Home, Error404 } from "./pages";

const App = () => {
  const { test } = useContext(GeneralContext);

  console.log("Así se usa el context", test);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
