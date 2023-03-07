import GlobalContext from "../contexts/GlobalContext";
import { useContext } from "react";

function useGlobal(){
    return useContext(GlobalContext)
}

export default useGlobal;