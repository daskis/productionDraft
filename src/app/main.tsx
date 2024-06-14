import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/global.scss';
import { App } from '@app/App.tsx';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@app/providers';
import { store } from '@shared/lib/store/store.ts';
import { LoadingProvider } from '@shared/lib/utils/context';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider>
            <LoadingProvider>
                <App />
            </LoadingProvider>
        </ThemeProvider>
    </Provider>,
);
