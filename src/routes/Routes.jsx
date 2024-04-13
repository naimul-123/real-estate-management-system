import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    }
])

export default routes;