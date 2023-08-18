import { useState,useEffect } from 'react'
import * as C from './App.Styles'
import NavBar from '../../components/NavBar'
import SearchPost from '../../components/SearchPost'
import CardPost from '../../components/CardPost'
import posts from '../../Banco de Dados/PostsDoBlog'
import Post from '../../types/Post2'
import Pagination from '../../components/Pagination/Pagination'

function Home() {
  const [postsCard, setPostsCards] = useState<Post[]>([...posts])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = postsCard.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    postsCard.some((post) => new Date(post.date).toDateString() == new Date().toDateString()) ? document.title = "NEW POST TODAY" : "Blog do Paulo";
  }, []);

  function paginate(pageNumber : any) : void{
    setCurrentPage(pageNumber)
  }

  return (
    <C.Container>
      <NavBar />
      <SearchPost 
      setPostsCards={setPostsCards}
      />
      {currentItems.map((post)=>(
        <CardPost
         key={post.title}
         post={post}
        />
      ))}

        <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={postsCard.length}
        paginate={paginate}
      />
    </C.Container>
  )
}

export default Home
