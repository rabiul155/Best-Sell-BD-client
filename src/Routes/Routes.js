import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home/Home";

import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
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

            }

        ]
    }
])

export default router;