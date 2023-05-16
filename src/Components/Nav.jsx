import "../css/nav.scss";
import { FiHome, FiBell, FiUser, FiLogOut } from "react-icons/fi";
import ItemNav from "./ItemNav";

const Nav = () => {
  return (
    <div className="containerNav">
      <div className="contentNav">
        <div className="category">
          <div className="contentCategory">
            <div className="contentIcon active">
              <FiHome />
            </div>
            <div className="contentIcon">
              <FiBell />
              <div className="count">2</div>
            </div>
            <div className="contentIcon">
              <FiUser />
            </div>
          </div>
          <div className="footerNav">
            <div className="contentIcon active ">
            <FiLogOut/>
          </div>
            <span>Salir</span>
          </div>
          
        </div>
        <div className="subNav">
          
          <ItemNav/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
