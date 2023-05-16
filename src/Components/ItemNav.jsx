import '../css/itemNav.scss'
import { FiUsers,FiShoppingCart,FiTruck,FiClipboard,FiBarChart2 } from "react-icons/fi";

const ItemNav = () => {
  return (
    <div className="containerItem">
        <section>
            <h3>Reciplas</h3>
            <span>business system</span>
        </section>
        <ul>
            <li className='active'>
            <FiUsers/>
            Usuarios</li>
            <li>
            <FiShoppingCart/>
            Ventas</li>
            <li>
            <FiTruck/>    
            Compras</li>
            <li>
            <FiClipboard/>
            Productos</li>
            <li>
            <FiBarChart2/>
            Estadísticas</li>
        </ul>
    </div>
  )
}

export default ItemNav