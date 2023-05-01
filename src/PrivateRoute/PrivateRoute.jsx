import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    // jekhan thke privete route login e pathiye diyeche sekhane back korar jnno
    const location =useLocation();
    console.log(location);
    // 
    if (user){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace ></Navigate>
};

export default PrivateRoute;
// 1steps
// 1.check user is logged in or not
// 2.if user is logged in then allow them to visit the route
// 3.else redirect the user to the login page
// 4.setup the route