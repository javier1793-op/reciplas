import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import {  createBrowserRouter,  RouterProvider } from "react-router-dom";
import Users from "./Pages/Users";
import Sales from "./Pages/Sales";
import Factura from "./Pages/Factura";
import Home from "./Components/Home";
import Estadisticas from './Pages/Estadisticas'
import Shopping from "./Pages/Shopping";
import Production from "./Pages/Production";

function App() {

  const router = createBrowserRouter([
    {
      path: "/reciplas/",
      element: <Login />,
    },
    {
      path: "reciplas/factura",
      element: <Factura />,
    },
    {
      path: "reciplas/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "home/",
          element: <Home />,
        },
        {
          path: "usuarios/",
          element: <Users />,
        },
        {
          path: "ventas/",
          element: <Sales />,
        },
        {
          path: "compras/",
          element: <Shopping />,
        },
        {
          path: "productos/",
          element: <Production />,
        },
        {
          path: "estadisticas/",
          element: <Estadisticas />,
        },
      ],
    },
    {
      path: "home/usuarios",
      element: <Users />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
