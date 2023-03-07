import './style.css'
import { useEffect, useState } from 'react';

function SearchPost({setPostsCards, postsCard}){
    
let fullPosts = [...postsCard]

function InputValueVerify(value){
    let postsFilter = []

    if(value){
        postsFilter = postsCard.filter((post)=>{
            return post.title.toLowerCase().includes(value)
        })
        setPostsCards(postsFilter)
        return;
    }
    setPostsCards(fullPosts)
}

    return (
        <div className='input-post'>
            <input
                type="text"
                placeholder='Search for article by title'
                onChange={(e)=> InputValueVerify(e.target.value)}
            />
        </div>
    )
}

export default SearchPost;