import Paginacion from "../Paginacion"
import Search from "../Search"

import { FiCheckSquare} from "react-icons/fi";
import Tablecompra from "./Tablecompra";

const Sectioncompras = ({setMenucompras}) => {

    const handleAdd=(e)=>{
        setMenucompras(e)
      }

  return (
    <div className="sectionTable">
    <div className="viewTable">
      <div className="headTable">
        <h4> <FiCheckSquare/> Registro Compras</h4>
        <button 
        className='form-button'
        onClick={()=>handleAdd('addCompra')}
        >Registrar Compra</button>
      </div>
      
      <div className="bodyTable">
        <div className="contentSearch">
          <Search/>
          
        </div>
        
          <Tablecompra setMenucompras={setMenucompras}/>
         <Paginacion/>
      </div>
    </div>
    
   </div>
  )
}

export default Sectioncompras