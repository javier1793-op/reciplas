
import Home from '../Components/Home'
import Nav from '../Components/Nav'
import '../css/dashboard.scss'
import { Outlet } from "react-router";
import Users from './Users';
import Sales from './Sales';


const Dashboard = () => {
  return (
    <>
    <div className="containerDash">
      <aside>
       <Nav/>
      </aside>
      <main>
        <Sales/>
        <Outlet></Outlet>
      </main>
    </div>
    </>
  )
}

export default Dashboard