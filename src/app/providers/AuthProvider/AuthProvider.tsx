import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch } from '@shared/lib';
import { useEffect, useState } from 'react';
import { removeUser, setUser, useGetMeQuery } from '@entities/user';
import { logout, setToken } from '@features/auth';

export const AuthProvider = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const [accessTokenFromStore, setAccessTokenFromStore] = useState<string | null>('');
    const [accessTokenFromLocalStorage, setAccessTokenFromLocalStorage] = useState<string | null>('');
    const { data } = useGetMeQuery(null);

    useEffect(() => {
        // Получение accessToken из store
        const storeAccessToken = localStorage.getItem('accessToken');
        setAccessTokenFromStore(storeAccessToken);

        // Проверка accessToken из store
        if (storeAccessToken) {
            dispatch(setToken(storeAccessToken));
        }

        // Получение accessToken из localStorage
        const localStorageAccessToken = localStorage.getItem('accessToken');
        setAccessTokenFromLocalStorage(localStorageAccessToken);

        // Установка accessToken в store
        if (localStorageAccessToken) {
            dispatch(setToken(localStorageAccessToken));
        }
    }, [dispatch]);

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [accessTokenFromLocalStorage]);

    if (accessTokenFromLocalStorage || accessTokenFromStore) {
        return <Outlet />;
    } else {
        dispatch(logout());
        dispatch(removeUser());
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }
};
