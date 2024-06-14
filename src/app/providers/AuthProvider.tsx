import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch } from '@shared/lib';
import { useEffect } from 'react';
import { removeUser, setUser, useGetMe } from '@entities/user';
import { logout } from '@features/auth';

export const AuthProvider = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const token = localStorage.getItem('accessToken');
    const data = useGetMe();
    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data]);
    if (token) {
        return <Outlet />;
    } else {
        dispatch(logout());
        dispatch(removeUser());
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }
};
