// Style
import "./PreviusAndNextButtons.css";
import { IconContext } from "react-icons";
import { MdOutlineNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useParams } from "react-router-dom";
// App
const PreviusAndNextButtons = () => {
  const { page } = useParams();
  console.log("ASDF", page);
  return (
    <div className="previus-and-next-buttons-container">
      <IconContext.Provider value={{ className: "icons-buttons" }}>
        <button>
          <span>
            <MdNavigateBefore /> Anterior
          </span>
        </button>
        <button>
          <span>
            Siguiente <MdOutlineNavigateNext />
          </span>
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default PreviusAndNextButtons;
