
import Home from '../Components/Home'
import Nav from '../Components/Nav'
import '../css/dashboard.scss'

const Dashboard = () => {
  return (
    <>
    <div className="containerDash">
      <aside>
       <Nav/>
      </aside>
      <main>
        <Home/>
      </main>
    </div>
    </>
  )
}

export default Dashboard