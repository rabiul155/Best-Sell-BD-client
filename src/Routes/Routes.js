import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            {
                path: '/login',
                element: <LogIn></LogIn>
            }
        ]
    }
])

export default router;