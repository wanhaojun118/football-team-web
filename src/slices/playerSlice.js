import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "selectedPlayer",
    initialState: {
        currentPlayer: undefined,
        currentCrew: []
    },
    reducers: {
        setCurrentPlayer: (state, action) => {
            state.currentPlayer = action.payload;
        },
        addPlayer: (state, action) => {
            state.currentCrew.push(action.payload);
        }
    }
});

export const { setCurrentPlayer, addPlayer } = playerSlice.actions;

export default playerSlice.reducer;