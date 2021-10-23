import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCountryList, setCountry } from "../slices/countrySlice";
import { startPageLoading, stopPageLoading } from "../slices/loadingSlice";
import { showPopupModal, hidePopupModal, setTitle, setMessage } from "../slices/popupModalSlice";
import { fetchGet } from "../utils/GeneralFunctions";
import { apiUrls } from "../constants";
import CountrySelection from "./CountrySelection";
import PlayerSelection from "./playerSelection/PlayerSelection";

const CountryAndPlayerSelectionWrapper = () => {
    const countryList = useSelector((state) => state.country.countryList);
    const selectedCountry = useSelector((state) => state.country.selectedCountry);
    const dispatch = useDispatch();

    const fetchAllCountries = async () => {
        dispatch(startPageLoading());

        const response = await fetchGet(apiUrls.GET_ALL_COUNTRIES());

        if(response.success){
            const countryData = response.data?.data?.map(country => (
                {
                    countryId: country.id,
                    name: country.name,
                    imagePath: country.image_path
                }
            ));

            dispatch(setCountryList(countryData));
            dispatch(stopPageLoading());
        }else{
            dispatch(setTitle("Error"));
            dispatch(setMessage("Cannot get country list."));

            dispatch(stopPageLoading());

            dispatch(showPopupModal());
        }
    }

    const selectCountry = (countryData) => dispatch(setCountry(countryData)); 

    return (
        <>
            <CountrySelection 
                countryList={countryList}
                fetchAllCountries={fetchAllCountries}
                selectedCountry={selectedCountry}
                selectCountry={selectCountry} />
            <PlayerSelection />
        </>
    )
}

export default CountryAndPlayerSelectionWrapper;