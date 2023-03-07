import './style.css'
import { useEffect, useState } from 'react';
import posts from '../../posts'

function SearchPost({setPostsCards, postsCard}){

    function InputValueVerify(value){
        let postsFilter = []

        if(value){
            postsFilter = postsCard.filter((post)=>{
                return post.title.toLowerCase().includes(value.toLowerCase())
            })
            setPostsCards(postsFilter)
            return;
        }
        setPostsCards(posts)
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