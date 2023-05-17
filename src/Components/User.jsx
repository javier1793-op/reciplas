import '../css/user.scss'
import Avatar from '../img/avatar.png'

const user = () => {
  return (
    <div className="containerUser">
      <div className="contentUser">
      <div className="avatar">
            <img src={Avatar} alt="avatar" />
        </div>
        <span className='booth'>
          Administrador
        </span>
        <div className="detallUser">
          <span>Ruiz Diaz Javier A.</span>
          <span>javier17utn@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default user