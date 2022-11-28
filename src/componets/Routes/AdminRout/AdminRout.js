import React, {useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hook/BookingUsedAdmin/useAdmin';
import BookingUsedAdmin from '../../Hook/BookingUsedAdmin/useAdmin';
import Loading from '../../Loading/Loading';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AdminRout = ({Children}) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, adminIsLoading]=useAdmin(user?.email)
    const location = useLocation()

    if (loading || adminIsLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return Children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRout;