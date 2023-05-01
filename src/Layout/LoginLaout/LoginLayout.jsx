import React from 'react';
import NavigtionBar from '../../Shared/NavigationBar/NavigtionBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigtionBar></NavigtionBar>
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default LoginLayout;