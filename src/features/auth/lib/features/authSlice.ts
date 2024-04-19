import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@shared/lib";


interface initialState {
    accessToken: string,
    user: any
}

const intitialState: initialState = {
    accessToken: "",
    user: null
}
const authSlice = createSlice({
    name: "auth",
    initialState: intitialState,
    reducers: {
        setToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        logout: () => intitialState,
    },
})
export const {setToken, logout, setAuth} = authSlice.actions;
export default authSlice.reducer;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;