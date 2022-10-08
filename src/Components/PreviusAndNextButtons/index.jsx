// Style
import "./PreviusAndNextButtons.css";
import { IconContext } from "react-icons";
import { MdOutlineNavigateNext, MdNavigateBefore } from "react-icons/md";
// App
const PreviusAndNextButtons = () => {
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
