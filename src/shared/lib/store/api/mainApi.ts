import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { logout, RefreshResponse, setToken } from '@features/auth';
import { RootState } from '@shared/lib';

const baseQuery = fetchBaseQuery({
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

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
        const refreshResult = await baseQuery('/auth/refresh-tokens', api, extraOptions);
        if (refreshResult.data !== undefined) {
            const { accessToken } = refreshResult.data as RefreshResponse;
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

const mainApi = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (_builder) => ({}),
    tagTypes: ['User'],
});
export default mainApi;