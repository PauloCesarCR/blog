import posts from '../../Banco de Dados/PostsDoBlog';
import Post from '../../types/Post2';
import * as SearchStyle from './SearchPost.Styles'

function SearchPost({setPostsCards, postsCard}: any){

    function InputValueVerify(value: String){
        let postsFilter = []
        if(value){
            postsFilter = postsCard.filter((post : Post)=>{
                return post.title.toLowerCase().includes(value.toLowerCase())
            })
            setPostsCards(postsFilter)
            return;
        }
        setPostsCards(posts)
    }

    return (
        <SearchStyle.ContainerSearch>

            <SearchStyle.InputSearch type='text' placeholder='Search' onChange={(e)=> InputValueVerify(e.target.value)}></SearchStyle.InputSearch>

        </SearchStyle.ContainerSearch>
    )
}

export default SearchPost;