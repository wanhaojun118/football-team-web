import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlayer } from "../../slices/playerSlice";
import { showPopupModal, setTitle, setMessage } from "../../slices/popupModalSlice";
import PlayerDetailsCard from "./PlayerDetailsCard";
import StepTitleContainer from "../StepTitleContainer";
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
        const similarPlayer = currentCrew?.find(member => member.playerId === currentPlayer.playerId);

        if(similarPlayer){
            // Player already in crew
            dispatch(setTitle("Error"));
            dispatch(setMessage("This player is already in our team."));

            dispatch(showPopupModal());
        }else{
            // Player not found
            dispatch(addPlayer(currentPlayer));
        }
    }

    return (
        <>
            {
                currentPlayer ? (
                    <Row className="step-container">
                        <StepTitleContainer title="Recruit This Player" />
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