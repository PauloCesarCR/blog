import './style.css'
import logPaulo from '../../assets/logoPaulo.png'

function NavBar(){
    return(
        <div className='nav-bar-container'>
            <img className='img-logo' src={logPaulo} />
        </div>
    )
}

export default NavBar;