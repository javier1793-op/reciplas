import '../css/table.scss'
import { FiTrash,FiEye,FiEdit } from "react-icons/fi";

const Tableproveedores = () => {
  return (
    <table>
    <thead>
      <tr>
        <th>Empresa</th>
        <th>Teléfono</th>
        <th>Dirección</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
       
        <td>Empresa1</td>
        <td>36957447</td>
        <td>Av. Siempre viva </td>
        <td>
        <div className="buttonAction">
              <span><FiEye/> </span>
              <span><FiEdit/> </span>
              <span><FiTrash/> </span>
          </div>
        </td>
      
      </tr>
      <tr>
       
        <td>Empresa2</td>
        <td>36957447</td>
        <td>Av. Siempre viva </td>
        <td>
        <div className="buttonAction">
              <span><FiEye/> </span>
              <span><FiEdit/> </span>
              <span><FiTrash/> </span>
          </div>
        </td>
      
      </tr>
      <tr>
       
        <td>Empresa3</td>
        <td>36957447</td>
        <td>Av. Siempre viva </td>
        <td>
        <div className="buttonAction">
              <span><FiEye/> </span>
              <span><FiEdit/> </span>
              <span><FiTrash/> </span>
          </div>
        </td>
      
      </tr>
      <tr>
       
        <td>Empresa4</td>
        <td>36957447</td>
        <td>Av. Siempre viva </td>
        <td>
        <div className="buttonAction">
              <span><FiEye/> </span>
              <span><FiEdit/> </span>
              <span><FiTrash/> </span>
          </div>
        </td>
      
      </tr>
      <tr>
       
        <td>Empresa5</td>
        <td>36957447</td>
        <td>Av. Siempre viva </td>
        <td>
        <div className="buttonAction">
              <span><FiEye/> </span>
              <span><FiEdit/> </span>
              <span><FiTrash/> </span>
          </div>
        </td>
      
      </tr>
      
    </tbody>
  </table>
  )
}

export default Tableproveedores