import {mainApi} from "@shared/lib/store/api";

export const authApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (data) => ({
                url: `/auth/login/`,
                method: "POST",
                body: data
            })
        }),
        register: build.mutation({
            query: (data) => ({
                url: `/auth/register/`,
                method: "POST",
                body: data
            })
        }),
        logout: build.query({
            query: () => ({
                url: `/auth/logout`,
                method: "GET",
            })
        })
    })
})
export const {useLoginMutation, useRegisterMutation, useLazyLogoutQuery} = authApi