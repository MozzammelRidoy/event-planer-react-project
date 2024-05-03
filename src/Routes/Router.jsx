import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Component/Pages/Shared/Home/Home";
import ServiceDetails from "../Component/Pages/Shared/Service/ServiceDetails/ServiceDetails";
import Login from "../Component/Pages/Shared/Login/Login";
import Register from "../Component/Pages/Shared/Register/Register";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>, 
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/service.json'),
               
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader : () => fetch('/service.json')
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