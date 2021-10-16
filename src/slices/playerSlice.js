import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "selectedPlayer",
    initialState: {
        currentPlayer: {
            playerId: undefined,
            image_path: undefined,
            name: undefined,
            age: undefined,
            weight: undefined,
            height: undefined,
            position: undefined,
            appearances: undefined,
            minutes: undefined,
            goals: undefined,
            assists: undefined,
            yellow_cards: undefined,
            red_cards: undefined,
            rating: undefined,
        },
        currentCrew: []
    },
    reducer: {
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