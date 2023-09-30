
import { Navigate, Outlet } from 'react-router-dom'

import { useSelector } from 'react-redux';

const Protected = () => {

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/sign-in" />
    } else {
        return <Outlet />
    }
}

export default Protected
