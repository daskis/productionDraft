import { createBrowserRouter, redirect } from 'react-router-dom';
import { LoginPage, MainPage, RegisterPage } from '@pages/ui';
import { AuthProvider } from '@app/providers/AuthProvider.tsx';
import { SidebarProvider } from '@widgets/lib/utils/SidebarProvider';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProvider />,
        children: [
            {
                index: true,
                element: <SidebarProvider><MainPage /></SidebarProvider>,
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
