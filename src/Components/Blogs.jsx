import { NavLink, Outlet } from "react-router-dom";
import { getBlogs } from "../data/data";

const Blogs = () =>{
    let Blogs = getBlogs()
    return(
        <div >
            <div className="Blogs">
                {
                    Blogs.map(Blog =>(
                        <NavLink to={Blog.id} key={Blog.id}>
                            {Blog.Subject}
                        </NavLink>
                    ))
                }
            </div>
            <Outlet />  
        </div>
    )
}

export default Blogs;