import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getBlog } from "../data/data";
import { deletBlog } from "../data/data";
const Blog = () =>{
    let location = useLocation()
    let navigate = useNavigate()
   const params = useParams()

   const Blog = getBlog(params.BlogId)
    return (
        <div>
            <p>{Blog.Subject}</p>
            <p>{Blog.Date}</p>
            <p>{Blog.Location}</p>
            <button onClick={()=>{
                deletBlog (Blog.id)
                navigate ("/Blogs" + location.search)
            }}>Delet</button> 
        </div>
    )
}

export default Blog;