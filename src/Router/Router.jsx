import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MainLayout from "../layouts/MainLayout";
import About from "../Components/About/About";
import Career from "../Components/Career/Career";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/career',
            element: <Career></Career>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
        ]

    }
])

export default router;