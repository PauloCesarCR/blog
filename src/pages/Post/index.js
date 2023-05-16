import './style.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import NavBar from '../../components/NavBar/index.js';
import posts from '../../posts';
import React from "react";
import { useLocalStorage } from 'react-use';

function Post(){
    const [post,setPost] = useState([])
    const [theme, setTheme] = useLocalStorage('theme')
    const [descriptionFormat,setDescriptionFormat]  = useState([])
    const {id} = useParams()

    function findPostAtual(){
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
        <div className={`container-post`}>
            <NavBar/>
            <div className='post'>
                <div className='post-details'>
                    <h1 className='post-title'>{post.title == "" ? "" : post.title}</h1>
                    {descriptionFormat.map((description)=>
                    <span className='post-description'>{description == "" ? "" : description}</span>
                    )}
                    {post.image &&
                        <>
                        <img className='post-img' src={post.image == "" ? "" : post.image} />
                        <span className='img-description'>{post.image_description == "" ? "" : post.image_description}</span>
                        </>
                    }
                    <span className='post-writer'><b>Paulo César</b>, {post.date == "" ? "" : post.date}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;