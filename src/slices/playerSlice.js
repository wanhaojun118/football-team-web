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
        // updateTeamPlayer: (state, action) => {
        //     state.currentCrew = action.payload;
        // }
        removePlayer: (state, action) => {
            console.log("state current crew: ", ...state.currentCrew);
            state.currentCrew = [...state.currentCrew].filter(player => player.playerId !== action.payload);
        }
    }
});

export const { setCurrentPlayer, addPlayer, removePlayer } = playerSlice.actions;

export default playerSlice.reducer;