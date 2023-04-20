import { createBrowserRouter } from "react-router-dom";
import Login from "../AuthenticationPage/Login/Login";
import SignUP from "../AuthenticationPage/SignUP/SignUP";
import AddProduct from "../BookingDashBoard/AddProduct/AddProduct";
import AllSeller from "../BookingDashBoard/AllSeller/AllSeller";
import BookingDashBoard from "../BookingDashBoard/BookingDashBoard";
import BookingDashBoardLayout from "../BookingDashBoard/BookingDashBoardLayout/BookingDashBoardLayout";
import BookingUsers from "../BookingDashBoard/BookingUsers/BookingUsers";
import ManageProduct from "../BookingDashBoard/ManageProduct/ManageProduct";
import ProductReport from "../BookingDashBoard/ProductReport/ProductReport";
import ErrorPage from "../ErrorPage/ErrorPage";
import CategoryDetails from "../Home/CategoryDetails/CategoryDetails";
import Home from "../Home/Home";
import ServiceCenter from "../Home/ServiceCenter/ServiceCenter";
import Main from "../Layout/Main";
import Blog from "../Shered/Blog/Blog";
import AdminRout from "./AdminRout/AdminRout";
import MyBooking from "./MyBooking/MyBooking/MyBooking";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
import WhySell from "../Home/ServiceCenter/WhySell";
import ParticleBackgrang from "../Animation Design/ParticleBackgrang";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "whySell",
        element: <WhySell />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/ServiceCenter",
        element: <ServiceCenter />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Signup",
        element: <SignUP></SignUP>,
      },
      // {
      //   path: "/particleBackgrang",
      //   element: <ParticleBackgrang />,
      // },
      {
        path: "/homeCategory/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <CategoryDetails></CategoryDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-12-server-lac.vercel.app/homeCategory/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/bookingDashBoard",
    element: (
      <PrivateRoutes>
        <BookingDashBoardLayout></BookingDashBoardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/bookingDashBoard",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "/bookingDashBoard/bookingUsers",
        element: <BookingUsers></BookingUsers>,
      },
      {
        path: "/bookingDashBoard/allSeller",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/bookingDashBoard/productReport",
        element: <ProductReport></ProductReport>,
      },
      {
        path: "/bookingDashBoard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/bookingDashBoard/manageProduct",
        element: <ManageProduct></ManageProduct>,
      },
    ],
  },
]);
