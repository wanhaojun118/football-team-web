import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCountryList, setCountry } from "../slices/countrySlice";
import { setCountryPlayers } from "../slices/countryPlayersSlice";
import { setCurrentPlayer, clearCurrentPlayer } from "../slices/playerSlice";
import { startPageLoading, stopPageLoading } from "../slices/loadingSlice";
import { showPopupModal, hidePopupModal, setTitle, setMessage } from "../slices/popupModalSlice";
import { fetchGet } from "../utils/GeneralFunctions";
import { apiUrls, playerPositions } from "../constants";
import CountrySelection from "./CountrySelection";
import PlayerSelection from "./playerSelection/PlayerSelection";

const CountryAndPlayerSelectionWrapper = () => {
    const countryList = useSelector((state) => state.country.countryList);
    const selectedCountry = useSelector((state) => state.country.selectedCountry);
    const countryPlayers = useSelector((state) => state.countryPlayers.countryPlayers);
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

    const fetchPlayers = async () => {
        dispatch(startPageLoading());

        const playersResponse = await fetchGet(apiUrls.GET_PLAYERS_FROM_COUNTRY(selectedCountry.countryId));

        if(playersResponse.success){
            const countryPlayersData = playersResponse.data?.data?.map(player => (
                {
                    playerId: player.player_id,
                    imagePath: player.image_path, 
                    name: player.fullname,
                    age: getPlayerAge(player.birthdate),
                    weight: player.weight,
                    height: player.height,
                    position: playerPositions(player.position_id),
                    countryImagePath: selectedCountry.countryImage
                }
            ));

            dispatch(setCountryPlayers(countryPlayersData))
            dispatch(stopPageLoading());
        }else{
            dispatch(stopPageLoading());
        }
    }

    const getPlayerAge = (birthDate) => {
        const year = birthDate?.substr(birthDate?.lastIndexOf("/") + 1);
        
        return new Date().getFullYear() - year;
    }

    const selectPlayerHandler = async (playerId) => {
        dispatch(startPageLoading());
        const playerStatsResponse = await fetchGet(apiUrls.GET_PLAYER_STATISTICS(playerId), { include: "stats"} );

        if(playerStatsResponse.success){
            const playerGeneralStats = countryPlayers.find(player => playerStatsResponse.data?.data?.player_id === player.playerId);
            const playerDetailsStats = playerStatsResponse.data?.data?.stats?.data[0];

            const playerStats = {
                ...playerGeneralStats,
                appearences: playerDetailsStats?.appearences ?? null,
                minutes: playerDetailsStats?.minutes ?? null,
                goals: playerDetailsStats?.goals ?? null,
                assists: playerDetailsStats?.assists ?? null,
                saves: playerDetailsStats?.saves ?? null,
                yellowCards: playerDetailsStats?.yellowcards ?? null,
                redCards: playerDetailsStats?.redcards ?? null,
                rating: playerDetailsStats?.rating ?? null
            };

            dispatch(setCurrentPlayer(playerStats));

            dispatch(stopPageLoading());
        }else{
            dispatch(stopPageLoading());
        }
    }

    return (
        <>
            <CountrySelection 
                countryList={countryList}
                fetchAllCountries={fetchAllCountries}
                selectedCountry={selectedCountry}
                selectCountry={selectCountry} />
            <PlayerSelection 
                selectedCountry={selectedCountry}
                countryPlayers={countryPlayers}
                fetchPlayers={fetchPlayers}
                selectPlayerHandler={selectPlayerHandler}
            />
        </>
    )
}

export default CountryAndPlayerSelectionWrapper;