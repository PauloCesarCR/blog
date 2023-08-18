import { useState } from 'react'
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
  const [itemsPerPage] = useState(5); // Quantidade de itens por página


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = postsCard.sort(function(a,b) {
  return new Date(a.date) > new Date(b.date) ? 1 : -1;
  }).slice(indexOfFirstItem, indexOfLastItem);
  
  
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
