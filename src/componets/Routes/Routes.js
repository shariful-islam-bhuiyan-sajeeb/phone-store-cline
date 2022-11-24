import { createBrowserRouter } from "react-router-dom";
import Login from "../AuthenticationPage/Login/Login";
import SignUP from "../AuthenticationPage/SignUP/SignUP";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
       element: <Main></Main>,
       errorElement: <ErrorPage></ErrorPage>,
       children:[
        {
            path: '/',
            element : <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/Signup',
            element: <SignUP></SignUP>
        },

       ]
    }
])