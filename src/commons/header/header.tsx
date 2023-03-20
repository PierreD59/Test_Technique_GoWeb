import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

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
        <div className="logoBlock">
          <img src="img/logo.svg" alt="Logo du site internet" />
        </div>

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
