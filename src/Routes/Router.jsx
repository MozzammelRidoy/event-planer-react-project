import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Component/Pages/Shared/Home/Home";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>, 
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/service.json')
            }
        ]
    }
        

])

export default router; 