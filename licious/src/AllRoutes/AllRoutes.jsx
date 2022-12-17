import React from "react"
import {Route,Routes} from "react-router-dom"
import VerifyEmailForm from "../Components/MailVerify"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import SingleCategory from "../Pages/SingleCategory"
import VerifyMail from "../Pages/VerifyMail"
import Contact from "../Pages/Contact"
function AllRoutes()
{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/Category" element={<SingleCategory/>}></Route>
            <Route path="verifymail" element={<VerifyMail/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            
        </Routes>

    )
}
export default AllRoutes