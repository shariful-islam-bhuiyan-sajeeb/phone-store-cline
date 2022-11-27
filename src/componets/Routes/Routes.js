import { createBrowserRouter } from "react-router-dom";
import Login from "../AuthenticationPage/Login/Login";
import SignUP from "../AuthenticationPage/SignUP/SignUP";
import AllSeller from "../BookingDashBoard/AllSeller/AllSeller";
import BookingDashBoard from "../BookingDashBoard/BookingDashBoard";
import BookingDashBoardLayout from "../BookingDashBoard/BookingDashBoardLayout/BookingDashBoardLayout";
import BookingUsers from "../BookingDashBoard/BookingUsers/BookingUsers";
import ProductReport from "../BookingDashBoard/ProductReport/ProductReport";
import ErrorPage from "../ErrorPage/ErrorPage";
import CategoryDetails from "../Home/CategoryDetails/CategoryDetails";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Blog from "../Shered/Blog/Blog";
import AdminRout from "./AdminRout/AdminRout";
import MyBooking from "./MyBooking/MyBooking/MyBooking";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";

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
            path: '/blog',
            element : <Blog></Blog>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/Signup',
            element: <SignUP></SignUP>
        },
        {
            path: '/home/category/:id',
            element: <CategoryDetails></CategoryDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/home/category/${params.id}`)

        }

       ]
    },
    {
        path:'/bookingDashBoard',
        element:<BookingDashBoardLayout></BookingDashBoardLayout> ,
        children:[
            {
                path:'/bookingDashBoard',
                element: <MyBooking></MyBooking>
            },
            {
                path:'/bookingDashBoard/bookingUsers',
                element: <BookingUsers></BookingUsers>
            },
            {
                path:'/bookingDashBoard/allSeller',
                element: <AllSeller></AllSeller>
            },
            {
                path:'/bookingDashBoard/productReport',
                element: <ProductReport></ProductReport>
            },
        ]
    }
])