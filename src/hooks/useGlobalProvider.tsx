import { useState } from "react";

function useGlobalProvider(){
    const [theme, setTheme] = useState("light")

    return {
        theme,
        setTheme
    }
}

export default useGlobalProvider;