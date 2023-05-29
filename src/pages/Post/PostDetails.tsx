import * as PostStyles from './PostDetails.Styles'
import posts from '../../Banco de Dados/PostsDoBlog';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../types/Post2';
import NavBar from '../../components/NavBar';

export default function OnePost(){
    const [post,setPost] = useState<Post>()
    const [descriptionFormat,setDescriptionFormat]  = useState<Array<String>>([])
    const {id} = useParams()

    function findPostAtual() : void {
        let findPost = posts.find((post)=>{
            return post.title.replace(/\s+|\?/g, "_") == id?.replace(/\s+|\?/g, "_");
        })
        if(!findPost){
            return;
        }
        let postJson = JSON.stringify(findPost)
        localStorage.setItem('post',postJson)
        let postAtual = JSON.parse(localStorage.getItem('post') || '{}')
        setPost(postAtual) 
        setDescriptionFormat(postAtual.description.split("|"))
    }
    
    useEffect(()=>{
        findPostAtual()
    },[])
    
    return (
        <PostStyles.PostContainer>
            <NavBar />
            <PostStyles.Post>
                <PostStyles.PostDetails>
                    <PostStyles.PostTitle>{post?.title}</PostStyles.PostTitle>
                    {descriptionFormat.map((description)=>(
                        <PostStyles.PostDescription>{description ? description : ""}</PostStyles.PostDescription>
                    ))}
                    
                    {/* esses dois só vai se existir o post.image, thanks */}
                    <PostStyles.PostImage loading='lazy'  src={post?.image} />
                    <PostStyles.ImageDescription>{post?.image_description}</PostStyles.ImageDescription>

                    <PostStyles.PostWriter><em> Paulo César - </em> {post?.date}</PostStyles.PostWriter>
                </PostStyles.PostDetails>

            </PostStyles.Post>
        </PostStyles.PostContainer>
    )
}
