import { configureStore } from '@reduxjs/toolkit';
import { mainApi } from '@shared/lib';
import { authSlice } from '@features/auth';
import { userSlice } from '@entities/user';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        [mainApi.reducerPath]: mainApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware),
    devTools: true,
});
