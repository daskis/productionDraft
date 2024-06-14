import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@shared/lib';


interface initialState {
    user: never | null,
}

const initialState: initialState = {
    user: null,
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: () => initialState,
    },
});

export const { setUser, removeUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
