import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "player",
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
        },
        clearCurrentPlayer: (state) => {
            state.currentPlayer = undefined;
        },
        removePlayer: (state, action) => {
            state.currentCrew = [...state.currentCrew].filter(player => player.playerId !== action.payload);
        }
    }
});

export const { setCurrentPlayer, addPlayer, clearCurrentPlayer, 
    removePlayer } = playerSlice.actions;

export default playerSlice.reducer;