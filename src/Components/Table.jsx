import '../css/table.scss'
import { FiTrash,FiEye,FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2'

const Table = () => {


  const Modalinfo=()=>{
    Swal.fire({
      title: '<strong>Detalle Cliente <u>#</u></strong>',
      icon: 'info',
      html:
        '<b>Nombre y Apellido: </b>, Ruiz Diaz Javier A. </br> ' +
        '<b>DNI: </b>, 36957447 </br>' +
        '<b>Direccion: </b>, Resistencia Chaco.</br> ' 
        ,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    })
  }

  const Modaldelete=()=>{
      Swal.fire({
    title: '¿Esta seguro de Eliminar Clientes?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Sí, bórralo!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminar!',
        'Su archivo ha sido eliminado.',
        'éxito'
      )
    }
  })
  }



  return (
   <>
    <table>
      <thead>
        <tr>
          <th>Apellido y Nombre</th>
          <th>DNI</th>
          <th>Estado</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td>Ruiz Diaz Javier</td>
          <td>36957447</td>
          <td> <span className='activoTable'>Activo</span> </td>
          <td>
          <div className="buttonAction">
                <span
                onClick={Modalinfo}
                ><FiEye/> </span>
                <span><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
            </div>
          </td>
        
        </tr>
        <tr>
         
        <td>Ruiz Diaz Javier</td>
          <td>36957447</td>
          <td> <span className='activoTable'>Activo</span> </td>
          <td>
          <div className="buttonAction">
                <span><FiEye/> </span>
                <span><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
            </div>
          </td>
         
        </tr>
        <tr>
         
        <td>Ruiz Diaz Javier</td>
          <td>36957447</td>
          <td> <span className='activoTable'>Activo</span> </td>
          <td>
          <div className="buttonAction">
                <span><FiEye/> </span>
                <span><FiEdit/> </span>
                 <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
            </div>
          </td>
         
        </tr>
        <tr>
         
        <td>Ruiz Diaz Javier</td>
          <td>36957447</td>
          <td> <span className='activoTable'>Activo</span> </td>
          <td>
          <div className="buttonAction">
                <span><FiEye/> </span>
                <span><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
            </div>
          </td>
         
        </tr>
        <tr>
         
        <td>Ruiz Diaz Javier</td>
          <td>36957447</td>
          <td> <span className='activoTable'>Activo</span> </td>
          <td>
            <div className="buttonAction">
                <span><FiEye/> </span>
                <span><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
            </div>
          </td>
    
        </tr>
      </tbody>
    </table>
   </>
  )
}

export default Table