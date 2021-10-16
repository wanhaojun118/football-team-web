import { createSlice } from "@reduxjs/toolkit";

const countryPlayersSlice = createSlice({
    name: "countryPlayer",
    initialState: {
        countryPlayers: undefined
    },
    reducer: {
        setCountryPlayers: (state, action) => {
            state.countryPlayers = action.payload
        }
    }
});

export const { setCountryPlayers } = countryPlayersSlice.actions;

export default countryPlayersSlice.reducer;