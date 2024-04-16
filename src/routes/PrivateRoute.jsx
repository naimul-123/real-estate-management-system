import {  useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import {Navigate, useLocation} from "react-router-dom"


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const loaction = useLocation();
    // console.log(loaction);
    if (loading) {
        return <div className="min-h-screen flex flex-col items-center justify-center"><span className="loading loading-lg loading-spinner text-secondary "></span></div>
    }
    if (user) {
        return children;
    }

    return (
        <Navigate state={loaction.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;