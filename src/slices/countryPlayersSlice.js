import { createSlice } from "@reduxjs/toolkit";

/*** Redux store used by country players selection dropdown ***/
const countryPlayersSlice = createSlice({
    name: "countryPlayers",
    initialState: {
        countryPlayers: undefined
    },
    reducers: {
        setCountryPlayers: (state, action) => {
            state.countryPlayers = action.payload
        }
    }
});

export const { setCountryPlayers } = countryPlayersSlice.actions;

export default countryPlayersSlice.reducer;