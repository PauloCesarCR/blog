import './style.css';
import NavBar from '../../components/NavBar/index.js';
import CardPost from '../../components/CardPost/index.js';
import SearchPost from '../../components/SearchPost/index.js';
import {useState} from 'react';
import posts from '../../posts';
import React from "react"

function Main() {
  const [postsCard, setPostsCards] = useState([...posts])
  return (
    <div className={`container`}>
      <NavBar/>
      <SearchPost
      setPostsCards={setPostsCards}
      postsCard={postsCard}
      />
      <div className='cards-container'>
      {postsCard.map((post)=>(
        <CardPost
         key={post.id}
         post={post}
        />
      ))}
      </div>
    </div>
  );
}

export default Main;
