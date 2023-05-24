import { useNavigate } from 'react-router-dom'
import CardPostProps from '../../types/Post'
import * as Card from './CardPost.Styles'


function CardPost({ post }: CardPostProps){
    const navigate = useNavigate()

       
    function openPost() : void{
        navigate(`/post/${post.title.replace(/\s+|\?/g, "_")}`)
    }
    return (
    <Card.CardContainer>
        <Card.CardPostInfo>
            <Card.TitleCard onClick={openPost}>{post.title}</Card.TitleCard>
            <Card.infoCard>[{post.type}] [{post.date}]</Card.infoCard>
        </Card.CardPostInfo>
            <Card.descriptionCard>{post.description}</Card.descriptionCard>
    </Card.CardContainer>
    )
}

export default CardPost