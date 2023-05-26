import {useState} from 'react'

function useGlobalProvider(){
    const [themeGlobal, setThemeGlobal] = useState("light")

    function toggle() : String{
        if(themeGlobal == "light"){
          setThemeGlobal("black")
          return "black"
        } 
        setThemeGlobal("light")
        return "light"
      }

      
    return {
        themeGlobal,
        toggle
    }
}

export default useGlobalProvider;