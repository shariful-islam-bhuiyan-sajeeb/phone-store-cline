import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import BookingUsedAdmin from '../../Hook/BookingUsedAdmin/BookingUsedAdmin';
import Loading from '../../Loading/Loading';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AdminRout = () => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, adminIsLoading]=BookingUsedAdmin(user?.email)
    const location = useLocation()

    if (loading || adminIsLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return Children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRout;