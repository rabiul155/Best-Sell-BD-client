import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useRole from '../../hooks/useRole';
import Loading from '../../Shared/Loading/Loading';



const DashbordRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const [role, finidigRole] = useRole(user?.email)
    if (loading || finidigRole) {
        return <Loading></Loading>
    }

    if (user && role) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace > </Navigate>
    }

};

export default DashbordRoute;
