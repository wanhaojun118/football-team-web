import { createSlice } from "@reduxjs/toolkit";

const comparisonSlice = createSlice({
    name: "comparison",
    initialState: {
        firstPlayer: undefined,
        secondPlayer: undefined,
    },
    reducers: {
        setFirstPlayer: (state, action) => {
            state.firstPlayer = action.payload;
        },
        setSecondPlayer: (state, action) => {
            state.secondPlayer = action.payload;
        },
        clearComparison: (state) => {
            state.firstPlayer = undefined,
            state.secondPlayer = undefined
        }
    }
});

export const { setFirstPlayer, setSecondPlayer, clearComparison } = comparisonSlice.actions;

export default comparisonSlice.reducer;