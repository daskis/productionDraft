import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@shared/lib';


interface initialState {
    accessToken: string,
}

const intitialState: initialState = {
    accessToken: '',
};
export const authSlice = createSlice({
    name: 'auth',
    initialState: intitialState,
    reducers: {
        setToken: (state, action) => {
            state.accessToken = action.payload;
        },
        logout: () => intitialState,
    },
});
export const { setToken, logout } = authSlice.actions;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
