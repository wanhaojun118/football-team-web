import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlayer } from "../../slices/playerSlice";
import { showPopupModal, setTitle, setMessage } from "../../slices/popupModalSlice";
import PlayerDetailsCard from "./PlayerDetailsCard";
import StepTitle from "../StepTitle";
import { Row, Button } from "react-bootstrap";

const RecruitPlayer = () => {
    const { currentPlayer, currentCrew } = useSelector((state) => state.player);
    const dispatch = useDispatch();
    const currentCrewMemberCount = useRef(currentCrew.length);

    useEffect(() => {
        if(currentCrewMemberCount.current !== currentCrew.length){
            const similarPlayer = currentCrew?.find(member => member.playerId === currentPlayer.playerId);

            if(similarPlayer){
                dispatch(setTitle("Recruit Successful"));
                dispatch(setMessage(`Congratulations, <b>${currentPlayer.name}</b> is now our team member!`));
    
                dispatch(showPopupModal());
            }

            currentCrewMemberCount.current = currentCrew.length;
        }
        
    }, [currentCrew]);

    const recruitPlayerHandler = (currentPlayer) => {
        if(currentCrew.length >= 11){
            // If team is full, don't allow to add new member

            dispatch(setTitle("Error"));
            dispatch(setMessage(`Sorry we cannot recruit <b>${currentPlayer.name}</b> as the team is already full.`));

            dispatch(showPopupModal());
        }else{
            // Team slot available

            const similarPlayer = currentCrew?.find(member => member.playerId === currentPlayer.playerId);

            if(similarPlayer){
                // Not allow to add same member into team
                dispatch(setTitle("Error"));
                dispatch(setMessage(`Cannot add <b>${currentPlayer.name}</b> as this player is already in our team.`));

                dispatch(showPopupModal());
            }else{
                // Player is not existing member, proceed to add him into team
                dispatch(addPlayer(currentPlayer));
            }
        }
    }

    return (
        <>
            {
                currentPlayer ? (
                    <Row className="step-container">
                        <StepTitle title="Recruit This Player" />
                        <PlayerDetailsCard player={currentPlayer} />
                        <div className="recruit-button-container">
                            <Button className="recruit-button button-primary" onClick={() => recruitPlayerHandler(currentPlayer)}>Recruit</Button>
                        </div>
                    </Row>
                ) : null
            }
        </>
    );
}

export default RecruitPlayer;