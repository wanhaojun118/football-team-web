import { useEffect } from "react";
import { useSelector } from "react-redux";
import PlayerDetailsCard from "./playerDetails/PlayerDetailsCard";

const CurrentCrew = () => {
    const teamPlayers = useSelector((state) => state.player.currentCrew);

    useEffect(() => {
        console.log("team players: ", teamPlayers);
    }, []);

    return (
        <>
            {
                teamPlayers && teamPlayers.length > 0 ? (
                    teamPlayers.map(player => (
                        <PlayerDetailsCard key={`team-player-${player.playerId}`} player={player} />
                    ))
                ) : null
            }
        </>
    )
}

export default CurrentCrew;