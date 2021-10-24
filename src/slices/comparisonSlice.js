import { createSlice } from "@reduxjs/toolkit";

const comparisonSlice = createSlice({
    name: "comparison",
    initialState: {
        firstCountry: undefined,
        firstPlayer: undefined,
        secondCountry: undefined,
        secondCountryPlayers: undefined,
        secondPlayer: undefined,
    },
    reducers: {
        setFirstCountry: (state, action) => {
            state.firstCountry = action.payload;
        },
        setFirstPlayer: (state, action) => {
            state.firstPlayer = action.payload;
        },
        setSecondCountry: (state, action) => {
            state.secondCountry = action.payload;
        },
        setSecondCountryPlayers: (state, action) => {
            state.secondCountryPlayers = action.payload;
        },
        setSecondPlayer: (state, action) => {
            state.secondPlayer = action.payload;
        },
        clearComparison: (state,) => {
            state.firstCountry = null;
            state.firstPlayer = null;
            state.secondCountry = null;
            state.secondPlayer = null;
        }
    }
});

export const { setFirstCountry, setFirstPlayer, setSecondCountry, 
    setSecondCountryPlayers, setSecondPlayer, clearComparison } = comparisonSlice.actions;

export default comparisonSlice.reducer;