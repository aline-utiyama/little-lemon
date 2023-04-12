import logo from "../assets/images/Logo.svg";
import navIcon from "../assets/images/icon_hamburger_menu.svg";
import basketIcon from "../assets/images/Basket.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="nav">
        <img src={navIcon} alt="Nav Icon"></img>
        <img src={logo} alt="Logo" onClick={() => navigate("/")}></img>
        <img src={basketIcon} alt="Nav Icon"></img>
      </div>
    </header>
  );
};

export default Header;
