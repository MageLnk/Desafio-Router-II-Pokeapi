import { useContext, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Style
import "./PreviusAndNextButtons.css";
import { IconContext } from "react-icons";
import { MdOutlineNavigateNext, MdNavigateBefore } from "react-icons/md";
// App
const PreviusAndNextButtons = () => {
  const { handlePokemonsPagination } = useContext(GeneralContext);
  const { page } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const validateParam = (params) => {
    const numberValidation = isNaN(params);
    if (!numberValidation === false) {
      navigate("/error");
    }
  };

  const handleClick = (path, params) => {
    let numberParam = +params;
    if (pathname === "/") {
      navigate("pokemons/2");
      return;
    }
    if (path === "next") {
      numberParam = numberParam + 1;
      navigate(`/pokemons/${numberParam.toString()}`);
      return;
    }
    if (path === "previous") {
      numberParam = numberParam - 1;
      navigate(`/pokemons/${numberParam.toString()}`);
      return;
    }
  };
  useEffect(() => {
    if (page) {
      validateParam(page);
    }
    handlePokemonsPagination(page);
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="previus-and-next-buttons-container">
      <IconContext.Provider value={{ className: "icons-buttons" }}>
        <button
          onClick={() => handleClick("previous", page)}
          disabled={pathname === "/" || (page === "1" && true)}
        >
          <span>
            <MdNavigateBefore /> Anterior
          </span>
        </button>

        <button onClick={() => handleClick("next", page)} disabled={pathname === "/" && false}>
          <span>
            Siguiente <MdOutlineNavigateNext />
          </span>
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default PreviusAndNextButtons;
