import {Link,Outlet} from "react-router-dom"
const App = () =>{
    return(
        <div className="App">
            <h2>Blog Library</h2>
            <nav>
                <Link to ="/About">About Blog</Link>
                <Link to ="/Blogs">Blogs</Link>
            </nav>
            <hr></hr>
            <Outlet></Outlet>
        </div>
    )
}

export default App;