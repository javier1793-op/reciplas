import { useState } from 'react';
import '../css/itemNav.scss'
import { FiUsers,FiShoppingCart,FiTruck,FiClipboard,FiBarChart2 } from "react-icons/fi";
import { Link } from 'react-router-dom'

const ItemNav = () => {

  const [item, setItem] = useState('')
  
  const handleChange=(e)=>{
    setItem(e)
  }

  return (
    <div className="containerItem">
        <section>
            <h3>Reciplas</h3>
            <span>business system</span>
        </section>
        <ul>
            <Link to='/usuarios' className='link'>
              <li
              onClick={()=>handleChange('usarios')}
              className={item === 'usarios'?'active':''}
              >
              <FiUsers/>
              Usuarios</li>
            </Link>
            
            <Link to='/ventas' className='link'>
            <li
            onClick={()=>handleChange('ventas')}
            className={item === 'ventas'?'active':''}
            >
            <FiShoppingCart/>
            Ventas</li>
            </Link>
            <li
            onClick={()=>handleChange('compras')}
            className={item === 'compras'?'active':''}
            >
            <FiTruck/>    
            Compras</li>
            <li
            onClick={()=>handleChange('productos')}
            className={item === 'productos'?'active':''}
            >
            <FiClipboard/>
            Productos</li>
            <li
            onClick={()=>handleChange('estadisticas')}
            className={item === 'estadisticas'?'active':''}
            >
            <FiBarChart2/>
            Estadísticas</li>
        </ul>

      
    </div>
  )
}

export default ItemNav