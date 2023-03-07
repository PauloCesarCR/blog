import './style.css'
import whatsappImg from "../../assets/whatsapp.png"
import linkedinImg from "../../assets/linkedin.png"
import githubImg from "../../assets/github.jpg"
import eu from '../../assets/im.jpg'
function SideBar(){
    return (
        <div className='sidebar'>
            <a target="_blank" href="https://www.google.com.br/">
                <img src={eu} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/paulocesaras">
                <img src={linkedinImg} />
            </a>
            <a target="_blank" href="https://github.com/PauloCesarCR">
                <img src={githubImg} />
            </a>
        </div>
    )
}

export default SideBar;