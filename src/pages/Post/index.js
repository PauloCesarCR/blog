import './style.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import voltarImg from '../../assets/voltar.png'
import useGlobal from '../../hooks/useGlobal';
import formatDate from '../../utility/formatDate'
function Post(){
    const {postsCard} = useGlobal()
    const navigate = useNavigate()
    const {id} = useParams()
    let postAtual = JSON.parse(localStorage.getItem('post'))
    function backtoHome(){
        navigate("/")
    }

    useEffect(()=>{

        let findPost = postsCard.find((post)=>{
            return post.id == Number(id);
        })
    
        if(!findPost){
            return;
        }
        let postJson = JSON.stringify(findPost)
        localStorage.setItem('post',postJson)
    },[])

    return (
        <div className='container-post'>
            <NavBar/>
            <SideBar/> 
            <div className='post'>
                <div className='post-details'>
                    <h1 className='post-title'>{postAtual.title}</h1>
                    <span className='post-description'>{postAtual.description}</span>
                    <span className='post-writer'><b>Paulo César</b>, {postAtual.date}</span>

                </div>
            </div>
        <img className='back-img' src={voltarImg} onClick={()=> backtoHome() } />
        </div>
    )
}

export default Post;