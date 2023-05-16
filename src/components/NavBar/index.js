import './style.css'
import logPaulo from '../../assets/logoPaulo.png'
import linkedinImg from "../../assets/linkedin.jpg"
import githubImg from "../../assets/github.jpg"
import lua from '../../assets/lua.png'
import sol from '../../assets/sol.png'
import React, { useEffect, useState } from "react"
import { useLocalStorage } from 'react-use';
import { useNavigate } from 'react-router-dom'

function NavBar(){
    const navigate = useNavigate()
    function backtoHome(){
        navigate("/")
    }


    const [theme, setTheme] = useLocalStorage('theme', "");

    function setThemeClick(){

       if (theme == "light" || theme == ""){
            return setTheme("black") 
       } else {
            return setTheme("light") 
        }
    }

    function applyTheme(){
        const nav = document.querySelector(".nav-bar-container")
        const body = document.querySelector("body")
        if(theme == "black"){
            body.style.backgroundColor = "black"
            body.style.color = "white"
            nav.style.borderBottom = "1px solid white"

        }   else {
            body.style.backgroundColor = "white"
            body.style.color = "black"
            nav.style.borderBottom = "1px solid black"

        }
    }

    useEffect(()=>{
        applyTheme()
    },[theme])

    return(
        <div className={`nav-bar-container`}>
            <div>
                <img className='img-logo' src={logPaulo} onClick={()=> backtoHome()} />
            </div>
            <div>
                <img onClick={()=> setThemeClick()} className='img-sol-lua' src={theme == "light" ? lua : sol } />
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