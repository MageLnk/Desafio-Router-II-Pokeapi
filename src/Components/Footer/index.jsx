// Icons
import { BiRegistered } from "react-icons/bi";
// Style
import "./Footer.css";
// App
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <span>
          Página creada por poderoso MageLink a petición de D.Latam para una prueba de React. Manejo
          de Browser Router II y otras poderosas virtudes <BiRegistered />
        </span>
      </div>
    </div>
  );
};

export default Footer;
