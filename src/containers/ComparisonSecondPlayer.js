import { useSelector, useDispatch } from "react-redux";
import { setSecondCountry, setSecondCountryPlayers, setSecondPlayer } from "../slices/comparisonSlice";
import { setTitle, setMessage, showPopupModal } from "../slices/popupModalSlice";
import { startPageLoading, stopPageLoading } from "../slices/loadingSlice";
import { fetchGet } from "../utils/GeneralFunctions";
import { apiUrls, playerPositions } from "../constants";
import CountrySelection from "../components/CountrySelection";
import PlayerSelection from "../components/playerSelection/PlayerSelection";
import PlayerDetailsCard from "../components/playerDetails/PlayerDetailsCard";

const ComparisonSecondPlayer = (props) => {
    const { secondCountry, secondCountryPlayers, secondPlayer } = useSelector((state) => state.comparison);
    const dispatch = useDispatch();

    const selectCountry = (countryData) => dispatch(setSecondCountry(countryData));

    const fetchPlayers = async () => {
        dispatch(startPageLoading());

        const playersResponse = await fetchGet(apiUrls.GET_PLAYERS_FROM_COUNTRY(secondCountry.countryId));

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
                    countryImagePath: secondCountry.countryImage
                }
            ));

            dispatch(setSecondCountryPlayers(countryPlayersData))
            dispatch(stopPageLoading());
        }else{
            // Show error popup
            dispatch(setTitle("Error"));
            dispatch(setMessage("Cannot get players from this country."));
            dispatch(showPopupModal());

            dispatch(stopPageLoading());
        }
    }

    const getPlayerAge = (birthDate) => {
        const year = birthDate?.substr(birthDate?.lastIndexOf("/") + 1);
        
        return new Date().getFullYear() - year;
    }

    const selectPlayerHandler = async (playerId) => {
        dispatch(startPageLoading());
        const playerStatsResponse = await fetchGet(apiUrls.GET_PLAYER_STATISTICS(playerId), { include: "stats"});

        if(playerStatsResponse.success){
            const playerGeneralStats = secondCountryPlayers.find(player => playerStatsResponse.data?.data?.player_id === player.playerId);
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

            dispatch(setSecondPlayer(playerStats));

            dispatch(stopPageLoading());
        }else{
            // Show error popup
            dispatch(setTitle("Error"));
            dispatch(setMessage("Cannot get player's statistics data."));
            dispatch(showPopupModal());

            dispatch(stopPageLoading());
        }
    }

    return (
        <>
        {
            secondPlayer ? (
                <PlayerDetailsCard player={secondPlayer} isComparisonPage={true} />
            ) : (
                <>
                    <CountrySelection 
                        countryList={props.countryList}
                        selectedCountry={secondCountry}
                        selectCountry={selectCountry} 
                    />
                    <PlayerSelection 
                        selectedCountry={secondCountry}
                        countryPlayers={secondCountryPlayers}
                        fetchPlayers={fetchPlayers}
                        selectPlayerHandler={selectPlayerHandler}
                    />
                </>
            )
        }
        </>
    );
}

export default ComparisonSecondPlayer;