import { useContext } from "react"
import { StockContext } from "../contexts/stockContent"



const useStock =  () =>{

    return useContext(StockContext)
     
}

export default useStock