import { createBrowserRouter } from "react-router-dom";
import Dashbord from "../layout/Dashbord";
import Main from "../layout/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import ErroePage from "../Pages/ErrorPage/ErroePage";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyBuyer from "../Pages/MyBuyer/MyBuyer";
import MyOrder from "../Pages/MyOrder/MyOrder";
import MyProduct from "../Pages/MyProduct/MyProduct";
import MySeller from "../Pages/MySeller/MySeller";
import MyWishlist from "../Pages/MyWishlist/MyWishlist";
import SignUp from "../Pages/SignUp/SignUp";
import DashbordRoute from "./DashbordRoute/DashbordRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErroePage></ErroePage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/category/:brand',
                loader: ({ params }) => fetch(`https://78-laptop-resalse-server.vercel.app/category/${params.brand}`),
                element: <PrivateRoute><Category></Category></PrivateRoute>

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }


        ]
    },
    {
        path: '/dashbord',
        errorElement: <ErroePage></ErroePage>,
        element: <Dashbord></Dashbord>,
        children: [
            {
                path: '/dashbord/myOrder',
                element: <DashbordRoute><MyOrder></MyOrder></DashbordRoute>
            },
            {
                path: '/dashbord/myWishlist',
                element: <DashbordRoute><MyWishlist></MyWishlist></DashbordRoute>
            },
            {
                path: '/dashbord/addProduct',
                element: <DashbordRoute><AddProduct></AddProduct></DashbordRoute>
            },
            {
                path: '/dashbord/myProduct',
                element: <DashbordRoute><MyProduct></MyProduct></DashbordRoute>
            },
            {
                path: '/dashbord/myBuyer',
                element: <DashbordRoute><MyBuyer></MyBuyer></DashbordRoute>
            },
            {
                path: '/dashbord/mySeller',
                element: <DashbordRoute><MySeller></MySeller></DashbordRoute>
            },

        ]
    }
])

export default router;