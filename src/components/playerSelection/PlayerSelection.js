import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { clearCurrentPlayer } from "../../slices/playerSlice";
import StepTitle from "../StepTitle";
import Carousel from "react-elastic-carousel";
import PlayerSelectionCard from "./PlayerSelectionCard";
import Row from "react-bootstrap/Row";
import { isEqual } from "lodash";
import { useMediaQuery } from "react-responsive";
import "../../styles/playerSelection.scss";

const PlayerSelection = (props) => {
    const dispatch = useDispatch();
    const selectedCountryRef = useRef();
    const toUseVerticalCarousel = useMediaQuery({ query: "(max-width: 1199px) "});
    const smallerVerticalCarousel = useMediaQuery({ query: "(max-width: 991px) "});

    useEffect(() => {
        if(props.selectedCountry){
            props.fetchPlayers();

            if(!isEqual(props.selectedCountry !== selectedCountryRef.current)){
                dispatch(clearCurrentPlayer());

                selectedCountryRef.current = {...props.selectedCountry};
            }
        }
    }, [props.selectedCountry]);

    return (
        <>
            {
                props.selectedCountry ? 
                    props.countryPlayers?.length > 0 ? (
                        <Row className="step-container">
                            <StepTitle title="Select A Player" />
                            <Carousel 
                                itemsToShow={toUseVerticalCarousel ? (smallerVerticalCarousel ? 1 : 2 ) : 3} 
                                itemsToScroll={toUseVerticalCarousel ? (smallerVerticalCarousel ? 1 : 2 ) : 3}
                                renderPagination={() => <></>}
                                verticalMode={toUseVerticalCarousel}
                            >
                                {
                                    props.countryPlayers.map(player => (
                                        <PlayerSelectionCard 
                                            key={`player-selection-card-${player.playerId}`} 
                                            details={player}
                                            selectPlayerHandler={props.selectPlayerHandler}
                                            isVertical={toUseVerticalCarousel}
                                        />
                                    ))
                                }
                            </Carousel>
                        </Row>
                    ) : (<div className="country-no-player-container">No player found from this country</div>)
                : null
            }
        </>
    )
}

export default PlayerSelection;