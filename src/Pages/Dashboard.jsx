
import Home from '../Components/Home'
import Nav from '../Components/Nav'
import '../css/dashboard.scss'
import { Outlet } from "react-router";
import Users from './Users';


const Dashboard = () => {
  return (
    <>
    <div className="containerDash">
      <aside>
       <Nav/>
      </aside>
      <main>
        <Users/>
        <Outlet></Outlet>
      </main>
    </div>
    </>
  )
}

export default Dashboard