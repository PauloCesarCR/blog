import { useNavigate } from 'react-router-dom'
import './style.css'
import formatDate from '../../utility/formatDate'
function CardPost({post}){
    const navigate = useNavigate()
    
    function openPost(){
        navigate(`/post/${post.title.replace(/\s+|\?/g, "-")}`)
    }
    return (
        
        <div className='card-post-container'>
            <div className='card-post-infos'>
            <span onClick={openPost} className='title-card'>{post.title}</span>
            <span className='info-card'>[{post.type}] [{post.date}] </span>
            </div>
            <p className='p-card'>{post.description}</p>
        </div>
    )
}

export default CardPost