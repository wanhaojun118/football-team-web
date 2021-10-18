import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountryPlayers } from "../../slices/countryPlayersSlice";
import { setCurrentPlayer } from "../../slices/playerSlice";
import { startPageLoading, stopPageLoading } from "../../slices/loadingSlice";
import { fetchGet } from "../../utils/GeneralFunctions";
import { apiUrls, playerPositions } from "../../constants";
import StepTitleContainer from "../StepTitleContainer";
import Carousel from "react-elastic-carousel";
import PlayerSelectionCard from "./PlayerSelectionCard";
import Row from "react-bootstrap/Row";
import "../../styles/playerSelection.scss";

const PlayerSelection = () => {
    const isCountrySelected = useSelector((state) => state.country.selectedCountry);
    const countryPlayers = useSelector((state) => state.countryPlayers.countryPlayers)
    const dispatch = useDispatch();

    useEffect(() => {
        if(isCountrySelected){
            fetchPlayers();
        }
    }, [isCountrySelected]);

    const fetchPlayers = async () => {
        dispatch(startPageLoading());

        const playersResponse = await fetchGet(apiUrls.GET_PLAYERS_FROM_COUNTRY(isCountrySelected));

        if(playersResponse.success){
            const countryPlayersData = playersResponse.data?.data?.map(player => (
                {
                    playerId: player.player_id,
                    imagePath: player.image_path, 
                    name: player.fullname,
                    age: getPlayerAge(player.birthdate),
                    weight: player.weight,
                    height: player.height,
                    position: playerPositions(player.position_id)
                }
            ));

            // for(let player of playersResponse.data.data){
            //     const playerStatsResponse = await fetchPlayerStatics(player.player_id);

            //     if(playerStatsResponse.success){

            //     }else{

            //     }
            // }
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

            console.log("playerDetailsStats: ", playerDetailsStats);

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
            {
                isCountrySelected && countryPlayers?.length > 0 ? (
                    <Row className="step-container">
                        <StepTitleContainer title="Select A Player" />
                        <Carousel 
                            itemsToShow={3} 
                            itemsToScroll={3}
                            renderPagination={() => <></>}
                        >
                            {
                                countryPlayers.map(player => (
                                    <PlayerSelectionCard 
                                        key={`player-selection-card-${player.playerId}`} 
                                        details={player}
                                        selectPlayerHandler={selectPlayerHandler}
                                    />
                                ))
                            }
                        </Carousel>
                    </Row>
                ) : null
            }
        </>
    )
}

export default PlayerSelection;