import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../slices/countrySlice";
import countryPlayersReducer from "../slices/countryPlayersSlice";
import playerReducer from "../slices/playerSlice";
import comparisonReducer from "../slices/comparisonSlice";
import loadingReducer from "../slices/loadingSlice";
import popupModalReducer from "../slices/popupModalSlice";

// Combining all reducer slices into one single Redux store
export default configureStore({
    reducer: {
        country: countryReducer,
        countryPlayers: countryPlayersReducer,
        player: playerReducer,
        loading: loadingReducer,
        popupModal: popupModalReducer,
        comparison: comparisonReducer
    }
});