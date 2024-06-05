import mainApi from '@shared/lib/store/api/mainApi.ts';

export const userApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getMe: build.query({
            query: () => ({
                url: `/user`,
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetMeQuery } = userApi;