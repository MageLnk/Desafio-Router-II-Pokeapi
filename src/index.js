import React from "react";
import ReactDOM from "react-dom/client";
// Context
import GeneralContext from "./Context/GeneralContext/Provider";
// Components
import App from "./App";
// Style
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeneralContext>
      <App />
    </GeneralContext>
  </React.StrictMode>
);
