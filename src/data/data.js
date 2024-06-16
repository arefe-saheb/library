import Blog from "../Components/Blog";

const Blogs = [
    {
        Subject : "Vacation Blog",
        Date : "5/13",
        Location : "Italy",
        id : "01"
    },
    {
        Subject : "School Blog",
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
        Subject : "Sopping Blog",
        Date : "3/9",
        Location : "UA",
        id : "04"
    },
    {
        Subject : "NightRoutin Blog",
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