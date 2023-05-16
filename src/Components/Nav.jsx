import '../css/nav.scss'
import { FiHome,FiBell,FiUser,FiLogOut } from "react-icons/fi";

const Nav = () => {
  return (
    <div className="containerNav">
        <div className="contentNav">
            <div className="category">
                <div className="contentCategory">
                    <div className="contentIcon active">
                    <FiHome/>
                </div>
                <div className="contentIcon">
                    <FiBell/>
                </div>
                <div className="contentIcon">
                    <FiUser/>
                </div>
                </div>
                <div className="contentIcon active">
                    <FiLogOut/>
                </div>
            
        </div>
        <div className="subNav">
            aca lo otro
        </div>  
        </div>
      
    </div>
  )
}

export default Nav