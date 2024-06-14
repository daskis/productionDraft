import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@shared/lib';

interface initialState {
    sidebar: boolean;
}

const initialState: initialState = {
    sidebar: false,
};

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebar = !state.sidebar;
        },
    },
});

export const { toggleSidebar } = eventsSlice.actions;

export const selectSidebar = (state: RootState) => state.events.sidebar;