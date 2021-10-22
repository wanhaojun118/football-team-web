import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removePlayer } from "../slices/playerSlice";
import PlayerDetailsCard from "./playerDetails/PlayerDetailsCard";

const CurrentCrew = () => {
    const teamPlayers = useSelector((state) => state.player.currentCrew);
    const dispatch = useDispatch();

    const removePlayerHandler = (playerId) => {
        dispatch(removePlayer(playerId));
    }

    return (
        <>
            {
                teamPlayers && teamPlayers.length > 0 ? (
                    teamPlayers.map(player => (
                        <PlayerDetailsCard 
                            key={`team-player-${player.playerId}`} 
                            player={player} 
                            removable={true} 
                            removePlayerHandler={() => removePlayerHandler(player.playerId)} 
                            isCurrentCrewPage={true}
                        />
                    ))
                ) : null
            }
        </>
    )
}

export default CurrentCrew;