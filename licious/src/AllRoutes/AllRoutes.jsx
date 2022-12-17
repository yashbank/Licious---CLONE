import React from "react"
import {Route,Routes} from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import SingleCategory from "../Pages/SingleCategory"
function AllRoutes()
{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/Category" element={<SingleCategory/>}></Route>
            
        </Routes>

    )
}
export default AllRoutes