import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { RootState } from '@shared/lib';
import { IAuthResponse, logout, setToken } from '@features/auth';

export const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const accessToken = (getState() as RootState).auth.accessToken;
        if (accessToken) {
            headers.set('Authorization', `Bearer ${accessToken}`);
        }
        return headers;
    },
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery('/auth/refresh-tokens', api, extraOptions);

        if (refreshResult.data) {
            const { accessToken } = refreshResult.data as IAuthResponse;
            localStorage.setItem('accessToken', accessToken.split(' ')[1]);
            api.dispatch(setToken(accessToken.split(' ')[1]));
            result = await baseQuery(args, api, extraOptions);
        } else {
            localStorage.removeItem('accessToken');
            api.dispatch(logout());
        }
    }
    return result;
};
