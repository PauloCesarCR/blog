import posts from '../../Banco de Dados/PostsDoBlog';
import Post from '../../types/Post2';
import * as SearchStyle from './SearchPost.Styles'
import useGlobal from '../../hooks/useGlobal';

function SearchPost({setPostsCards}: any){
    const {themeGlobal} = useGlobal()

    function InputValueVerify(value: String){
        let postsFilter = []
        if(value){
           
            postsFilter = posts.filter((post : Post)=>{
                return post.title.toLowerCase().includes(value.toLowerCase())
            })
            setPostsCards(postsFilter)
            return;
        }
        setPostsCards(posts)
    }

    return (
        <SearchStyle.ContainerSearch>

            <SearchStyle.InputSearch themeSearch={themeGlobal == "black" ? "black" : "white"} type='text' placeholder='Search' onChange={(e)=> InputValueVerify(e.target.value)}></SearchStyle.InputSearch>

        </SearchStyle.ContainerSearch>
    )
}

export default SearchPost;