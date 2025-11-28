import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({children}) => {
    const {user , loading } = useAuth()
    const location = useLocation()
    if(loading) {
        return <p>Loading</p>
    }
    if(!user) {
        return <Navigate to={"/login"} state={location.pathname}></Navigate>
    }
    return children
};

export default PrivetRouter;