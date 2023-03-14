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

 
  return (
    <div className="container">
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
