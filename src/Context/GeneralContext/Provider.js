import { useEffect, useState } from "react";
// Context
import GeneralContext from ".";
// Utilities
import apiCall from "../../api/apiCall";

const GeneralContextProvider = ({ children }) => {
  const [data, setData] = useState("nada");

  const doSearchByUserInput = (inputData) => {
    console.log("Temporal Log, for future implement", inputData);
  };

  const getAllData = async () => {
    console.log("Perfect");
    try {
      const data = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=15` });
      console.log(data);
      // Insert setData(data)
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <GeneralContext.Provider value={{ data, setData, doSearchByUserInput }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
