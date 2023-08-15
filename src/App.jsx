import { RouterProvider } from "react-router-dom"
import router from "./routes"
import { StockContextProvider } from "./contexts/stockContent"
const App = () =>{
  return(
    <>
    <StockContextProvider>
    <RouterProvider router={router}/>
    </StockContextProvider>
    </>
  )
}
export default App