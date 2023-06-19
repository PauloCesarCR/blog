import useLocalStorage from 'react-use/lib/useLocalStorage'


function useGlobalProvider(){
    const [themeGlobal, setThemeGlobal] = useLocalStorage<String>("theme", "light")

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