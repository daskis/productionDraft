import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQuery.ts';


export const mainApi = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (_builder) => ({}),
    tagTypes: ['User'],
});
