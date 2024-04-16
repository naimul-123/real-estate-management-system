import { Route, createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import EstateDetails from "../pages/EstateDetails";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: ()=> fetch('./data.json'),
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: ()=> fetch('./testimonials.json')
            },
            {
                path: '/estate/:id',
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>

            },
            {
                path: '/updateprofile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>

            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            
        ]

    }
])

export default routes;