import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import '@styles/global.scss';
import { App } from '@app/App.tsx';
import { Provider } from 'react-redux';
import { router, ThemeProvider } from '@app/providers';
import { store } from '@shared/lib';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider>
            <App>
                <RouterProvider router={router} />
            </App>
        </ThemeProvider>
    </Provider>,
);
