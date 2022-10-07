import { useParams } from "react-router-dom";

const Pokemons = () => {
  const { page } = useParams();
  console.log("????", page);
  return <div>Pokemons</div>;
};

export default Pokemons;
