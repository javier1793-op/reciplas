import React from "react";
import "../css/nav.scss";
import { TiArrowMinimise,TiHomeOutline } from "react-icons/ti";
import { FcBusinessman,FcSalesPerformance,FcMoneyTransfer,FcBullish,FcFactory,FcClock} from "react-icons/fc";

const Nav = () => {
  return (
    <div className="containerNav">
      <div className="headNav">
        <div className="contentToggle">
        <div className="toggle">
          <TiArrowMinimise />
        </div>
      </div>
      <div className="title">
        <h3> <span>R</span>eciplas <span>S</span>ystem</h3>
      </div>
      </div>
      
      <div className="contentNav">
        
      
        <span className='subtitle'> <TiHomeOutline/> Areas </span>

        <div className="itemNav">
          <ul>
            
            <li className="active"> <FcBusinessman className="icon"/> Usuarios</li>
            <li> <FcSalesPerformance className="icon"/> Ventas</li>
            <li> <FcMoneyTransfer className="icon"/> Compras</li>
            <li> <FcFactory className="icon"/> Producción</li>
            <li> <FcBullish className="icon"/> Estadísticas</li>
          </ul>
        </div>
      </div>
      

      <div className="clock">
        <FcClock/>
        <span>12:12 hs</span>
      </div>
    </div>
  );
};

export default Nav;
