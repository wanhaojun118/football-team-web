import { createSlice } from "@reduxjs/toolkit";

/*** Redux store used by Loading component ***/
const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        isPageLoading: false
    },
    reducers: {
        startPageLoading: (state) => {
            state.isPageLoading = true;
        },
        stopPageLoading: (state) => {
            state.isPageLoading = false;
        }
    }
});

export const { startPageLoading, stopPageLoading } = loadingSlice.actions;

export default loadingSlice.reducer;