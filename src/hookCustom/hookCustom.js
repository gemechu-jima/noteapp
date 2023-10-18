import {useContext} from "react"
import NoteContext from "../Context/Context"

 function CustomHook(){
    return useContext(NoteContext)
}
export default CustomHook;