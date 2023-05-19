import { FiCheckSquare} from "react-icons/fi";
import Search from '../Components/Search';
import Table from '../Components/Table';
import Paginacion from '../Components/Paginacion';

const Sectioncliente = () => {
  return (
    <div className="sectionTable">
    <div className="viewTable">
      <div className="headTable">
        <h4> <FiCheckSquare/> Registro Clientes</h4>
        <button className='addClient'>Agregar Cliente</button>
      </div>
      
      <div className="bodyTable">
        <div className="contentSearch">
          <Search/>
          
        </div>
        
          <Table/>
         <Paginacion/>
      </div>
    </div>
    <div className="resumen">
      <span>Total de Usuarios</span>
      <div className="countClient">
        <h2>5</h2>
      </div>
    </div>
   </div>
  )
}

export default Sectioncliente