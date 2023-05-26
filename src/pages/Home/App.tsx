import { useState } from 'react'
import * as C from './App.Styles'
import NavBar from '../../components/NavBar'
import SearchPost from '../../components/SearchPost'
import CardPost from '../../components/CardPost'
import posts from '../../Banco de Dados/PostsDoBlog'
import { ToogleTheme } from '../../App.Styles' 
import lua from '../../assets/lua.png'
import sol from '../../assets/sol.png'
import Post from '../../types/Post2'

function Home({toggle, theme} : any) {
  const [postsCard, setPostsCards] = useState<Post[]>([...posts])
  return (
    <C.Container>
        <ToogleTheme onClick={toggle} src={theme == "black" ? sol : lua}/>
      <NavBar />
      <SearchPost 
      postsCard= {postsCard}
      setPostsCards={setPostsCards}
      />
      {postsCard.map((post)=>(
        <CardPost
         key={post.id}
         post={post}
        />
      ))}
    </C.Container>
  )
}

export default Home
