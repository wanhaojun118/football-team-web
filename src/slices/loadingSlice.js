import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        isPageLoading: false
    },
    reducer: {
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