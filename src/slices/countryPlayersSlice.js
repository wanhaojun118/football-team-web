import { createSlice } from "@reduxjs/toolkit";

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