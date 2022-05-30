import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
// import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Share/Loading/Loading';
// import Loading from '../Share/Loading/Loading';


const RequireNurmaluser = ({children}) => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    const location = useLocation();
    if(adminLoading) {
        return <Loading></Loading>
    }

    if(admin) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    return children;
};

export default RequireNurmaluser;