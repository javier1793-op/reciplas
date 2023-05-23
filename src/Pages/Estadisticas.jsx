import { useState } from "react";
import "../css/estadisticas.scss";
import ReporteDeudores from "../Components/Reportes/ReporteDeudores";

const Estadisticas = () => {
  const [value, setValue] = useState("");
  const [generar, setGenerar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setGenerar(value)
  };

  return (
    <div className="containerUser">
      <div className="contentUser">
        <div className="headUsers">
          <h2>Modulo Estadísticas</h2>
          <span>
            {" "}
            <span className="history">Home</span> / Estadísticas
          </span>
        </div>
        <div className="reporteGenerador">
          <div className="selecteRango">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Periodo de:
                </label>
                <input
                  placeholder=""
                  className="form-input"
                  name="dni"
                  id="dni"
                  type="date"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  a:
                </label>
                <input
                  placeholder=""
                  className="form-input"
                  name="dni"
                  id="dni"
                  type="date"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  *Modulo:
                </label>
                <select
                  name="pets"
                  id="pet-select"
                  className="form-input "
                  value={value}
                  onChange={() => setValue(event.target.value)}
                  required
                >
                  <option value="">Seleccione el modulo</option>
                  <option value="deudores">Deudores</option>
                  <option value="proveedores">Proveedores</option>
                  <option value="pedidos">Pedidos</option>
                  <option value="stock">Stock</option>
                  <option value="producidos">Producidos</option>
                  <option value="compras">Compras</option>
                  <option value="ventas">Ventas</option>
                </select>
              </div>
              <div className="form-group">
                <button className="form-button">GENERAR</button>
              </div>
              <div className="form-group">
                <span>
                  *Si no selecciona un periodo se mostrara todo hasta el dia de
                  la fecha
                </span>
              </div>
            </form>
          </div>
        </div>
            {generar === 'deudores'&&<ReporteDeudores/>}
      </div>

    </div>
  );
};

export default Estadisticas;
