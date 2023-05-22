import { TfiArchive,TfiBarChartAlt } from "react-icons/tfi";
import { useState } from 'react';
import Seccionproduccion from "../Components/Produccion/Seccionproduccion";
import Formulariomercaderia from "../Components/Produccion/Formulariomercaderia";

const Production = () => {

    const [menuproduccion, setMenuproduccion] = useState('stock');

    const handleMenu=(e)=>{
      setMenuproduccion(e)
    }

  return (
    <div className="containerUser">
    <div className="contentUser">
      <div className="headUsers">
        <h2>Modulo Producción</h2>
      <span> <span className='history'>Home</span> / Producción</span>
      </div>
      <div className="gadgetUsers">
        <div className={`contentGadget ${menuproduccion ==='stock'?'active':''}`}
          onClick={()=>handleMenu('stock')}
        >
          <TfiArchive className='iconGadget'/>
          <h4>Stock</h4>
          <p>Registracción de Mercaderia / Producidos</p>
        </div>
       
        <div className={`contentGadget ${menuproduccion ==='estadisticas'?'active':''}`}
          onClick={()=>handleMenu('estadisticas')}
        >
          <TfiBarChartAlt className='iconGadget'/>
          <h4>Estadisticas</h4>
          <p>Resumen Estidisticas graficos sobre stock</p>
        </div>
      </div>
          {menuproduccion === 'stock'&&<Seccionproduccion setMenuproduccion={setMenuproduccion} />}
          {menuproduccion === 'addMercaderia'&&<Formulariomercaderia setMenuproduccion={setMenuproduccion} />}
    </div>
   </div>
  )
}

export default Production