import { Link, Outlet } from "react-router-dom"

const RootLayout = ()=>{
    return(
        <>
        <header>
            <Link to="/" className ="logo">React Stock </Link>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/items">Items</Link>
            </nav>
        </header>
        <div>
            <Outlet/>
        </div>
        <footer>
            <p>Feito com React e React Router</p>
        </footer>
        </>
    )
}
export default RootLayout