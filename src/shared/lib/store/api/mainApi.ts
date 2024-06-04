import { RootState } from '@shared/lib';
import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react'; // Убедитесь, что этот путь правильный

export interface RefreshResponse {
    accessToken: string;
    refreshToken?: string; // Опционально, если не всегда присутствует
}

const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const accessToken = (getState() as RootState).auth.accessToken;
        if (accessToken) {
            headers.set('Authorization', `${accessToken}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
        const refreshResult = await baseQuery('/auth/refresh-tokens', api, extraOptions);

        if (refreshResult.data) {
            const { accessToken } = refreshResult.data as RefreshResponse;
            localStorage.setItem('accessToken', accessToken);
            result = await baseQuery(args, api, extraOptions);
        } else {
            localStorage.removeItem('accessToken');
        }
    }
    return result;
};


export const mainApi = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (_builder) => ({}),
    tagTypes: ['User'],
});
