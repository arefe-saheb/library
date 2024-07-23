import { NavLink, Outlet, useSearchParams, useLocation} from "react-router-dom";
import { getBlogs } from "../data/data";
import Blog from "./Blog";

const Blogs = () =>{
    const [searchParams, setSearchParams] = useSearchParams()
    const Location = useLocation()
    let Blogs = getBlogs()
    return(
        <div >
            <div className="Blogs">
                <input type="text" placeholder="search" value={searchParams.get("filter") || ''}
                    onChange={
                        event =>{
                            let filter = event.target.value

                            if(filter){
                                setSearchParams({filter})
                            }else{
                                setSearchParams({})
                            }
                        }
                    }
                />
                {
                    Blogs.filter((Blog) =>{
                        let filter = searchParams.get("filter")
                        if(!filter) return true
                        let Subject = Blog.Subject
                        return Subject.startsWith(filter)
                    })
                    .map(Blog =>(
                        <NavLink to={`${Blog.id}${location.search}`} key={Blog.id}>
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