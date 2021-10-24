import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removePlayer } from "../slices/playerSlice";
import { startPageLoading, stopPageLoading } from "../slices/loadingSlice";
import PlayerDetailsCard from "./playerDetails/PlayerDetailsCard";
import RemovePlayerConfirmation from "./popupModal/RemovePlayerConfirmation";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/currentCrew.scss";

const CurrentCrew = () => {
    const teamPlayers = useSelector((state) => state.player.currentCrew);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [removePlayerId, setRemovePlayerId] = useState();

    const removePlayerHandler = (playerId) => {
        setShowModal(true);
        setRemovePlayerId(playerId);
    }

    const confirmRemovePlayer = () => {
        dispatch(startPageLoading());

        if(removePlayerId){
            dispatch(removePlayer(removePlayerId));
            setShowModal(false);
        }

        dispatch(stopPageLoading());
    }

    return (
        <>
            <div className="team-formation-status">
                {
                    teamPlayers && teamPlayers.length >= 11 
                        ? "Congratulations, a team of 11 members is ready!"
                        : `Team available slot(s): ${11 - teamPlayers.length }`
                } 
            </div>
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
                ) : (
                    <div className="no-player-container">
                        <span className="no-player-message">There is no member at the team now.</span>
                        <NavLink to="/recruit">
                            <Button className="no-player-navigation-button button-primary">
                                Recruit Player
                            </Button>
                        </NavLink>
                    </div>
                )
            }
            <RemovePlayerConfirmation 
                show={showModal} 
                playerId={removePlayerId}
                confirmRemovePlayer={confirmRemovePlayer} 
                closeModal={() => setShowModal(false)}
            />
        </>
    )
}

export default CurrentCrew;