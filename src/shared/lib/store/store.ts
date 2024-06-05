import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '@features/auth';
import { userSlice } from '@entities/user';
import mainApi from '@shared/lib/store/api/mainApi.ts';


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
