import { createBrowserRouter } from "react-router-dom";
import Dashbord from "../layout/Dashbord";
import Main from "../layout/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyBuyer from "../Pages/MyBuyer/MyBuyer";
import MyOrder from "../Pages/MyOrder/MyOrder";
import MyProduct from "../Pages/MyProduct/MyProduct";
import MySeller from "../Pages/MySeller/MySeller";
import SignUp from "../Pages/SignUp/SignUp";
import DashbordRoute from "./DashbordRoute/DashbordRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
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
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.brand}`),
                element: <PrivateRoute><Category></Category></PrivateRoute>

            },
            // {
            //     path: '/myOrder',
            //     element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
            // },
            // {
            //     path: '/addProduct',
            //     element: <AddProduct></AddProduct>
            // }

        ]
    },
    {
        path: '/dashbord',
        element: <Dashbord></Dashbord>,
        children: [
            {
                path: '/dashbord/myOrder',
                element: <DashbordRoute><MyOrder></MyOrder></DashbordRoute>
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