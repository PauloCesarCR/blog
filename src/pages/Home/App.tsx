import { useState } from 'react'
import * as C from './App.Styles'
import NavBar from '../../components/NavBar'
import SearchPost from '../../components/SearchPost'
import CardPost from '../../components/CardPost'
import posts from '../../Banco de Dados/PostsDoBlog'
import Post from '../../types/Post2'


function Home() {
  const [postsCard, setPostsCards] = useState<Post[]>([...posts])

  return (
    <C.Container>
      <NavBar />
      <SearchPost 
      setPostsCards={setPostsCards}
      />
      {postsCard.map((post)=>(
        <CardPost
         key={post.title}
         post={post}
        />
      ))}
    </C.Container>
  )
}

export default Home
