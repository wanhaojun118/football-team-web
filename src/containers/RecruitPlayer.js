import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlayer } from "../slices/playerSlice";
import { setFirstCountry, setFirstPlayer, clearComparison } from "../slices/comparisonSlice";
import { showPopupModal, setTitle, setMessage } from "../slices/popupModalSlice";
import PlayerDetailsCard from "../components/playerDetails/PlayerDetailsCard";
import StepTitle from "../components/StepTitle";
import { Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const RecruitPlayer = () => {
    const selectedCountry = useSelector((state) => state.country.selectedCountry);
    const { currentPlayer, currentCrew } = useSelector((state) => state.player);
    const dispatch = useDispatch();
    const currentCrewMemberCount = useRef(currentCrew.length);
    const history = useHistory();

    useEffect(() => {
        if(currentCrewMemberCount.current !== currentCrew.length){
            const similarPlayer = currentCrew?.find(member => member.playerId === currentPlayer.playerId);

            if(similarPlayer){
                dispatch(setTitle("Recruit Successful"));
                dispatch(setMessage(`Congratulations, <b>${currentPlayer.name}</b> is now our team member! You may check current members in <b>MY TEAM</b> page.`));
    
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
                dispatch(setMessage(`Cannot add <b>${currentPlayer.name}</b> as this player is already our team member.`));

                dispatch(showPopupModal());
            }else{
                // Player is not existing member, proceed to add him into team
                dispatch(addPlayer(currentPlayer));
            }
        }
    }

    const setComparisonTarget = () => {
        // Clear comparison data
        dispatch(clearComparison());
        
        // Set targeted comparison player's country
        dispatch(setFirstCountry({...selectedCountry}));

        // Set targeted comparison player
        dispatch(setFirstPlayer({...currentPlayer}));

        // Redirect to comparison page
        history.push("/compare");
    }

    return (
        <>
            {
                currentPlayer ? (
                    <Row className="step-container">
                        <StepTitle title="Recruit This Player" />
                        <PlayerDetailsCard player={currentPlayer} />
                        <div className="recruit-button-container">
                            <Button className="compare-button button-secondary" onClick={setComparisonTarget}>Compare</Button>
                            <Button className="recruit-button button-primary" onClick={() => recruitPlayerHandler(currentPlayer)}>Recruit</Button>
                        </div>
                    </Row>
                ) : null
            }
        </>
    );
}

export default RecruitPlayer;