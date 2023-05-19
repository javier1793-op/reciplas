import '../css/users.scss'
import { TfiIdBadge,TfiBarChartAlt ,TfiHarddrives,} from "react-icons/tfi";
import { useState } from 'react';
import Sectioncliente from '../Components/Sectioncliente';
import Sectionproveedores from '../Components/Sectionproveedores';

const Users = () => {

  const [menu, setMenu] = useState('clientes');

  const handleMenu=(e)=>{
    setMenu(e)
  }

  return (
    <div className="containerUser">
    <div className="contentUser">
      <div className="headUsers">
        <h2>Modulo Usuarios</h2>
      <span> <span className='history'>Home</span> / Usuarios</span>
      </div>
      <div className="gadgetUsers">
        <div className={`contentGadget ${menu ==='clientes'?'active':''}`}
          onClick={()=>handleMenu('clientes')}
        >
          <TfiIdBadge className='iconGadget'/>
          <h4>Clientes</h4>
          <p>Registracción/Acción</p>
        </div>
        <div className={`contentGadget ${menu ==='proveedores'?'active':''}`}
          onClick={()=>handleMenu('proveedores')}
        >
          <TfiHarddrives className='iconGadget'/>
          <h4>Proveedores</h4>
          <p>Registracción/Acción</p>
        </div>
        <div className={`contentGadget ${menu ==='estadisticas'?'active':''}`}
          onClick={()=>handleMenu('estadisticas')}
        >
          <TfiBarChartAlt className='iconGadget'/>
          <h4>Estadisticas</h4>
          <p>Resumen Estidisticas sobre moviento de usuarios</p>
        </div>
      </div>
          {menu === 'clientes'&&<Sectioncliente/>}
          {menu === 'proveedores'&&<Sectionproveedores/>}
    </div>
   </div>
  )
}

export default Users