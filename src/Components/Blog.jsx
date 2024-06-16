import { useParams } from "react-router-dom";
import { getBlog } from "../data/data";
const Blog = () =>{
   const params = useParams()
   const Blog = getBlog(params.BlogId)
    return (
        <div>
            <p>{Blog.Subject}</p>
            <p>{Blog.Date}</p>
            <p>{Blog.Location}</p>
        </div>
    )
}

export default Blog;