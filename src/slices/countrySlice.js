import { createSlice } from "@reduxjs/toolkit";

/*** Redux store used by Country selection component ***/
const countrySlice = createSlice({
    name: "country",
    initialState: {
        countryList: undefined,
        selectedCountry: undefined
    },
    reducers: {
        setCountryList: (state, action) => {
            state.countryList = action.payload
        },
        setCountry: (state, action) => {
            state.selectedCountry = action.payload
        }
    }
});

export const { setCountryList, setCountry } = countrySlice.actions;

export default countrySlice.reducer;