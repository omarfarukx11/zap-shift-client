import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';


const AdminRoute = ({children}) => {
    const { loading } = useAuth()
    const {role , roleLoading} = useRole()

    if(loading || roleLoading) {
        return <p>Loading</p>
    }
    if(role !== "admin") {
        return <p>Forbidden 403</p>
    }
    return children
};

export default AdminRoute;