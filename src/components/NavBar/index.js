import './style.css'
import logPaulo from '../../assets/logoPaulo.png'
import linkedinImg from "../../assets/linkedin.jpg"
import githubImg from "../../assets/github.jpg"
function NavBar(){
    return(
        <div className='nav-bar-container'>
            <div>
                <img className='img-logo' src={logPaulo} />
            </div>
            <div>
                <a target="_blank" href="https://www.linkedin.com/in/paulocesaras">
                    <img className='icons-img' src={linkedinImg} />
                </a>
                <a target="_blank" href="https://github.com/PauloCesarCR">
                    <img className='icons-img' src={githubImg} />
                </a>
            </div>
        </div>
    )
}

export default NavBar;