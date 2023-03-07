import { useState, useEffect } from "react";
function useGlobalProvider(){
    const [postsCard, setPostsCards] = useState([])

    return {
        postsCard,
        setPostsCards
    }
}

export default useGlobalProvider;