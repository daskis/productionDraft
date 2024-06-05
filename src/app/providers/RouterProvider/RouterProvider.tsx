import { createBrowserRouter, redirect } from 'react-router-dom';
import { LoginPage, MainPage, RegisterPage, RequireAuth } from '@pages/ui';
import { AuthProvider } from '../AuthProvider/AuthProvider.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: 'require',
                element: <AuthProvider />,
                children: [
                    {
                        index: true,
                        element: <RequireAuth />,
                    },
                ],
            },
        ],
    },
    {
        path: '/auth',
        children: [
            {
                index: true,
                loader: async () => redirect('/auth/login'),
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },
]);
