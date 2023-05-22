import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Users from "./Pages/Users";
import Sales from "./Pages/Sales";
import { BrowserRouter } from 'react-router-dom'
import Factura from "./Pages/Factura";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
     
            <Route path="/home" element={<Dashboard />} />
              <Route path="/usuarios" element={<Users />} />
              <Route path="/ventas" element={<Sales />} />
              <Route path="/factura" element={<Factura />} />
            <Route />
       
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
