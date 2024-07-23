import Blog from "../Components/Blog";

let Blogs = [
    {
        Subject : "vacation Blog",
        Date : "5/13",
        Location : "Italy",
        id : "01"
    },
    {
        Subject : "school Blog",
        Date : "4/23",
        Location : "USA",
        id : "02"
    },
    {
        Subject : "Food Blog",
        Date : "12/12",
        Location : "Seol",
        id : "03"
    },
    {
        Subject : "sopping Blog",
        Date : "3/9",
        Location : "UA",
        id : "04"
    },
    {
        Subject : "nightRoutin Blog",
        Date : "6/28",
        Location : "Home",
        id : "05"
    }
]

export const getBlogs = () =>{
    return Blogs;
}

export const getBlog = (id) =>{
    return Blogs.find (Blog => Blog.id === id)
}

export const deletBlog = id =>{
    Blogs = Blogs.filter (
        Blog => Blog.id != id
    )
}