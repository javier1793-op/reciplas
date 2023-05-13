
import Home from '../Components/Home'
import Nav from '../Components/Nav'
import User from '../Components/User'
import '../css/dashboard.scss'

const Dashboard = () => {
  return (
    <div className="containerDash">
        <Nav/>
        <Home/>
        <User/>
    </div>
  )
}

export default Dashboard