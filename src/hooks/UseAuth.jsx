import { useContext } from "react"
import AuthContex from "../contex/authcontex/AuthContex"

const UseAuth =()=>{
    const usecontex = useContext(AuthContex)
    return usecontex
}
export default UseAuth