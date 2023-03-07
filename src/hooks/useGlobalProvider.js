import { useState, useEffect } from "react";
import posts from '../posts'
function useGlobalProvider(){
    const [postsCard, setPostsCards] = useState([...posts])

    return {
        postsCard,
        setPostsCards
    }
}

export default useGlobalProvider;