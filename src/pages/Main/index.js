import './style.css';
import NavBar from '../../components/NavBar';
import CardPost from '../../components/CardPost';
import SearchPost from '../../components/SearchPost';
import api from '../../api'
import SideBar from '../../components/SideBar';
import { useEffect } from 'react';
import useGlobal from '../../hooks/useGlobal';
function Main() {
  const {postsCard,setPostsCards} = useGlobal()
  
  // async function getPosts(){
  //   const {data} = await api.get('/posts',{
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   });


  //   setPostsCards([...data])
  // }
  
  // useEffect(()=>{
  //   getPosts()
  // },[])

  return (
    <div className="container">
      <NavBar/>
      <SearchPost
      setPostsCards={setPostsCards}
      postsCard={postsCard}
      />
      <SideBar/>
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
