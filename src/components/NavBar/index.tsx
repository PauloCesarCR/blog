import * as NavBarStyles from './NavBar.Styles'
import logoPaulo from '../../assets/logoPaulo.png'
import linkedinBlackImg from '../../assets/linkedinBlack.jpg'
import linkedinWhiteImg from '../../assets/linkedinWhite.png'
import githubBlackImg from "../../assets/githubblack.jpg"
import githubWhiteImg from '../../assets/githubWhite.png'
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
        <NavBarStyles.NavBarContainer >
                 <ToogleTheme onClick={toggle} src={themeGlobal == "black" ? sol : lua}/>
            <NavBarStyles.ImgDiv>
                <NavBarStyles.Image src={logoPaulo} onClick={backToHome}/>
            </NavBarStyles.ImgDiv>
            <NavBarStyles.IconsDiv>
                <NavBarStyles.Link target="_blank" href="https://www.linkedin.com/in/paulocesaras">
                    <NavBarStyles.Image src={themeGlobal == "black" ? linkedinBlackImg : linkedinWhiteImg} />
                </NavBarStyles.Link>

                <NavBarStyles.Link target="_blank" href="https://github.com/PauloCesarCR">
                    <NavBarStyles.Image src={themeGlobal == "black" ? githubBlackImg : githubWhiteImg}/>
                </NavBarStyles.Link>
            </NavBarStyles.IconsDiv>
        </NavBarStyles.NavBarContainer>
    )
}

export default NavBar;