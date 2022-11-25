import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoutes = () => {
    const {user,loading}= useContext(AuthContext)
    const location =useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return Children;
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;