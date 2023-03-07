import './style.css';
import NavBar from '../../components/NavBar';
import CardPost from '../../components/CardPost';
import SearchPost from '../../components/SearchPost';
import SideBar from '../../components/SideBar';
import { useEffect , useState} from 'react';
import posts from '../../posts';
function Main() {
  const [postsCard, setPostsCards] = useState([...posts])

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
