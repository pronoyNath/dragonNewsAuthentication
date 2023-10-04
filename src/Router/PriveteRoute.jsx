import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PriveteRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <div className="flex justify-center mt-24">
             <span className=" loading loading-spinner text-error w-[150px]"></span>
        </div>
    }

    if(user){
        return children;
    }


    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PriveteRoute;