import '../css/home.scss'
import { RiHandHeartLine } from "react-icons/ri";
import Welcome from '../img/welcome.svg'

const Home = () => {
  return (
   <div className="containerHome">
    <div className="contentHome">
      <div className="welcome">
        <h1>Hola!</h1>
        <h2>Bienvenido <span>Javier</span><RiHandHeartLine/></h2>
      </div>
       
    <img src={Welcome} alt="welcome" />
    lorem*30
    </div>
   </div>
  )
}

export default Home