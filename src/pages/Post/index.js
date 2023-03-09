import './style.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import voltarImg from '../../assets/voltar.png'
import useGlobal from '../../hooks/useGlobal';
import formatDate from '../../utility/formatDate'
import posts from '../../posts';
function Post(){
    const [post,setPost] = useState([])
    const navigate = useNavigate()
    const {id} = useParams()

    function backtoHome(){
        navigate("/")
    }

    function findPostAtual(){
        let findPost = posts.find((post)=>{
            return post.id == Number(id);
        })
        if(!findPost){
            return;
        }
        let postJson = JSON.stringify(findPost)
        localStorage.setItem('post',postJson)
        let postAtual = JSON.parse(localStorage.getItem('post'))
        setPost(postAtual)
    }
    
    useEffect(()=>{
        findPostAtual()
    },[])

    return (
        <div className='container-post'>
            <NavBar/>
            <SideBar/> 
            <div className='post'>
                <div className='post-details'>
                    <h1 className='post-title'>{post.title == "" ? "" : post.title}</h1>
                    <span className='post-description'>{post.description == "" ? "" : post.description}</span>
                    <span className='post-writer'><b>Paulo César</b>, {post.date == "" ? "" : post.date}</span>
                </div>
            </div>
        <img className='back-img' src={voltarImg} onClick={()=> backtoHome() } />
        </div>
    )
}

export default Post;