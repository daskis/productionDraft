import { classNames, useAppDispatch } from '@shared/lib';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { router, useTheme } from '@app/providers';
import { useEffect } from 'react';
import { setToken } from '@features/auth';


export const App = () => {
    const { theme } = useTheme();
    const token = localStorage.getItem('accessToken');
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (token) {
            dispatch(setToken(token));
        }
    }, [token, dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <ToastContainer
                style={{ zIndex: 10000000 }}
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme}
            />
            <RouterProvider router={router} />
        </div>
    );
};