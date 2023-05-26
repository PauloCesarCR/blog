import * as NavBarStyles from './NavBar.Styles'
import logoPaulo from '../../assets/logoPaulo.png'
import linkedinImg from "../../assets/linkedin.jpg"
import githubImg from "../../assets/github.jpg"
import { useNavigate } from 'react-router-dom'
import { ToogleTheme } from '../../App.Styles'
import useGlobal from '../../hooks/useGlobal'
import lua from '../../assets/lua.png'
import sol from '../../assets/sol.png'

function NavBar(){
    const {themeGlobal, toggle} : any = useGlobal()
    const navigate = useNavigate()
    function backToHome() : void{
        navigate('/')
    }
    return(
        <NavBarStyles.NavBarContainer>
                 <ToogleTheme onClick={toggle} src={themeGlobal == "black" ? sol : lua}/>
            <NavBarStyles.ImgDiv>
                <NavBarStyles.Image src={logoPaulo} onClick={backToHome}/>
            </NavBarStyles.ImgDiv>
            <NavBarStyles.IconsDiv>
                <NavBarStyles.Link target="_blank" href="https://www.linkedin.com/in/paulocesaras">
                    <NavBarStyles.Image src={linkedinImg} />
                </NavBarStyles.Link>

                <NavBarStyles.Link target="_blank" href="https://github.com/PauloCesarCR">
                    <NavBarStyles.Image src={githubImg} />
                </NavBarStyles.Link>
            </NavBarStyles.IconsDiv>
        </NavBarStyles.NavBarContainer>
    )
}

export default NavBar;