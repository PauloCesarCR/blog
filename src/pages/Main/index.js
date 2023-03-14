import './style.css';
import NavBar from '../../components/NavBar';
import CardPost from '../../components/CardPost';
import SearchPost from '../../components/SearchPost';
import { useEffect , useState} from 'react';
import posts from '../../posts';
import Pagination from 'react-js-pagination';
function Main() {
  const [postsCard, setPostsCards] = useState([...posts])
  const [statePag,setStatePag] = useState({currentPage: 1, itemsPerPage: 10})

  function handlePageChange(pageNumber){
    setStatePag({currentPage: pageNumber})
  }

  const indexOfLastItem = statePag.currentPage * statePag.itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - statePag.itemsPerPage;
  const currentItems = postsCard.slice(indexOfFirstItem, indexOfLastItem)

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(postsCard.length / statePag.itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="container">
      <NavBar/>
      <SearchPost
      setPostsCards={setPostsCards}
      postsCard={postsCard}
      />
      <div className='cards-container'>
      {currentItems.map((post)=>(
        <CardPost
         key={post.id}
         post={post}
        />
      ))}
      </div>
      <div className='pags-container'>
        <Pagination
          activePage={statePag.currentPage}
          itemsCountPerPage={statePag.itemsPerPage}
          totalItemsCount={postsCard.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Main;
