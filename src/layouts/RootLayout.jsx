import { Outlet, NavLink} from "react-router-dom"
const RootLayout = () => {
    return (
       <div className ="root-layout">
        <header>
            <nav className="navbar">
                <img src="" alt="" className="logo" />
                <div className="nav-links">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="about">Om oss</NavLink>
                </div>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        </div>
    )
}

export default RootLayout