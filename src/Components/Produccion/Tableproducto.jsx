import { FiTrash, FiEye, FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

const Tableproducto = ({ setMenuproduccion }) => {
  const Modalinfo = () => {
    Swal.fire({
      title: "<strong>Detalle del Producto <u>#</u></strong>",
      icon: "info",
      html:
        '<p align="left"><b>Codigo Producto: </b> 0001 </br></br> ' +
        "<b>Nombre: </b>Producto 1 </br></br>" +
        "<b>Fecha de producción: </b> 01-08-23 </br></br>" +
        "<b>Estado: </b> Finalizado </br></br>" +
        "<b>Detalle: </b> Detalle del producto 1 </br></br>" +
        "<b>Límite de producción: </b> 500 </br></br>" +
        "<b>Cantidad en Stock: </b> 800 </br></br></p>",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Genial!",
      confirmButtonColor: "#ff6f69",
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: "Cancelar",
      cancelButtonAriaLabel: "Thumbs down",
    });
  };

  const Modaldelete = () => {
    Swal.fire({
      title: "¿Esta seguro de Eliminar el Producto?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#ff6f69",
      cancelButtonColor:" #6e7881 ",
      confirmButtonText: "¡Sí, bórralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminar!", "Su archivo ha sido eliminado.", "éxito");
      }
    });
  };

  const handleEdit = (e) => {
    setMenuproduccion(e);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Producto 1</td>
            <td> Finalizado </td>
            <td>
              <div className="buttonAction">
                <span onClick={Modalinfo}>
                  <FiEye />{" "}
                </span>
                <span
                  onClick={() => {
                    handleEdit("addProducto");
                  }}
                >
                  <FiEdit />{" "}
                </span>
                <span onClick={Modaldelete}>
                  <FiTrash />{" "}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>002</td>
            <td>Producto 2</td>
            <td> Finalizado </td>
            <td>
              <div className="buttonAction">
                <span onClick={Modalinfo}>
                  <FiEye />{" "}
                </span>
                <span
                  onClick={() => {
                    handleEdit("addClient");
                  }}
                >
                  <FiEdit />{" "}
                </span>
                <span onClick={Modaldelete}>
                  <FiTrash />{" "}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>001</td>
            <td>Producto 1</td>
            <td> Finalizado </td>
            <td>
              <div className="buttonAction">
                <span onClick={Modalinfo}>
                  <FiEye />{" "}
                </span>
                <span
                  onClick={() => {
                    handleEdit("addClient");
                  }}
                >
                  <FiEdit />{" "}
                </span>
                <span onClick={Modaldelete}>
                  <FiTrash />{" "}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>001</td>
            <td>Producto 1</td>
            <td> Finalizado </td>
            <td>
              <div className="buttonAction">
                <span onClick={Modalinfo}>
                  <FiEye />{" "}
                </span>
                <span
                  onClick={() => {
                    handleEdit("addClient");
                  }}
                >
                  <FiEdit />{" "}
                </span>
                <span onClick={Modaldelete}>
                  <FiTrash />{" "}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>001</td>
            <td>Producto 1</td>
            <td> Finalizado </td>
            <td>
              <div className="buttonAction">
                <span onClick={Modalinfo}>
                  <FiEye />{" "}
                </span>
                <span
                  onClick={() => {
                    handleEdit("addClient");
                  }}
                >
                  <FiEdit />{" "}
                </span>
                <span onClick={Modaldelete}>
                  <FiTrash />{" "}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Tableproducto;
