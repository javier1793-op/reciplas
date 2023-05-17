import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Dashboard/>}/>
       
      </Routes>
    </>
  )
}

export default App
