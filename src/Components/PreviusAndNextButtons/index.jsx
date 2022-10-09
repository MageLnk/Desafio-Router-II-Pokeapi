import { useLocation, useNavigate, useParams } from "react-router-dom";
// Style
import "./PreviusAndNextButtons.css";
import { IconContext } from "react-icons";
import { MdOutlineNavigateNext, MdNavigateBefore } from "react-icons/md";
// App
const PreviusAndNextButtons = () => {
  const { page } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const validateParam = (params) => {
    const numberValidation = isNaN(params);
    if (!numberValidation === true) {
      return +params;
    }
    if (!numberValidation === false) {
      navigate("/error");
    }
  };

  const handleClick = (path, params) => {
    let validParam = validateParam(params);
    if (pathname === "/") {
      navigate("pokemons/2");
      return;
    }
    if (path === "next") {
      validParam = validParam + 1;
      navigate(`/pokemons/${validParam.toString()}`);
    }
    if (path === "previous") {
      validParam = validParam - 1;
      navigate(`/pokemons/${validParam.toString()}`);
    }
  };

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
