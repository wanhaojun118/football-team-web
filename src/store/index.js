import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../slices/countrySlice";
import countryPlayersReducer from "../slices/countryPlayersSlice";
import playerReducer from "../slices/playerSlice";
import loadingReducer from "../slices/loadingSlice";

export default configureStore({
    reducer: {
        country: countryReducer,
        countryPlayers: countryPlayersReducer,
        player: playerReducer,
        loading: loadingReducer
    }
});