import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearComparison } from "../slices/comparisonSlice";
import PageLoading from "../components/PageLoading";
import PopupModal from "../components/popupModal/PopupModal";
import ComparisonFirstPlayer from "../containers/ComparisonFirstPlayer";
import ComparisonSecondPlayer from "../containers/ComparisonSecondPlayer";
import ComparisonBarModal from "../components/popupModal/ComparisonBarModal";
import ComparisonRadarModal from "../components/popupModal/ComparisonRadarModal";
import { NavLink } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "../styles/comparison.scss";

/*** Comparison module: base component of "1 ON 1" page ***/
const Comparison = () => {
    const { firstPlayer, secondPlayer } = useSelector((state) => state.comparison);
    const countryList = useSelector((state) => state.country.countryList);
    const [showComparisonBar, setShowComparisonBar] = useState(false);
    const [showComparisonRadar, setShowComparisonRadar] = useState(false);
    const dispatch = useDispatch();

    return (
        <Container>
            <PageLoading />
            {
                firstPlayer && secondPlayer ? (
                    <div class="d-flex justify-content-center show-comparison-buttons-container">  
                        <Button className="comparison-buttons button-secondary" onClick={() => setShowComparisonBar(true)}>Comparison Bar</Button>
                        <Button className="comparison-buttons button-secondary" onClick={() => setShowComparisonRadar(true)}>Comparison Radar</Button>

                        <ComparisonBarModal 
                            show={showComparisonBar} 
                            setShowComparisonBar={setShowComparisonBar} 
                            firstPlayer={firstPlayer} 
                            secondPlayer={secondPlayer} 
                        />
                        <ComparisonRadarModal 
                            show={showComparisonRadar} 
                            setShowComparisonRadar={setShowComparisonRadar} 
                            firstPlayer={firstPlayer} 
                            secondPlayer={secondPlayer}
                        />
                    </div>
                ) : null
            }
            {
                firstPlayer ? (
                    <>
                        <div class="d-flex justify-content-end clear-comparison-button-container">
                            <Button className="clear-comparison-button button-secondary" onClick={() => dispatch(clearComparison())}>Clear Comparison Data</Button>
                        </div>
                        <ComparisonFirstPlayer player={firstPlayer} />
                    </>
                ) : (
                    <div className="no-player-container">
                        <span className="no-player-message">No player to compare against, please select a player from <b>RECRUIT</b> page to start comparing.</span>
                        <NavLink to="/recruit">
                            <Button className="no-player-navigation-button button-primary">
                                Find Player
                            </Button>
                        </NavLink>
                    </div>
                )
            }
            {
                firstPlayer && countryList ? <ComparisonSecondPlayer countryList={countryList} /> : null
            }
            <PopupModal />
        </Container>
    );
}

export default Comparison;