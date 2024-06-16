import React from "react";
import  ReactDOM  from "react-dom/client";

import App from "./App"

import { BrowserRouter, Routes , Route } from "react-router-dom";

import "./App.css"
import Blogs from "./Components/Blogs";
import About from "./Components/About";
import Blog from "./Components/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/Blogs" element = {<Blogs />}>
                        <Route path={':BlogId'} element={<Blog />}></Route>
                    </Route>
                    <Route path="/About" element = {<About />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)