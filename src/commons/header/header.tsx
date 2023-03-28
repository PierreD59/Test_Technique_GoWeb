import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header
      className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}
    >
      <div className="burger">
        <AiOutlineMenu
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        />
      </div>
      <nav>
        <Link to={"/"} title={`Permet de retourner sur la page d'accueil`}>
          <div className="logoBlock">
            <img src="img/logo.svg" alt="Logo du site internet" />
          </div>
        </Link>

        <ul className="titleHeader white">
          <li>DashBoard</li>
          <li>
            <span>•</span> Products management
          </li>
          <li>Employees management</li>
          <hr className="bgWhite" />
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
