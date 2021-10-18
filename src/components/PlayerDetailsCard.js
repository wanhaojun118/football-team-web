import { useSelector } from "react-redux";
import StepTitleContainer from "./StepTitleContainer";
import OptionalDetail from "./OptionalDetail";
import { Row, Col } from "react-bootstrap";
import { playerPositions } from "../constants";
import "../styles/playerDetailsCard.scss";

const PlayerDetailsCard = () => {
    const selectedPlayer = useSelector((state) => state.player.currentPlayer);

    return (
        <>
            {
                selectedPlayer ? (
                    <Row className="step-container">
                        <StepTitleContainer title="Recruit This Player" />
                        <Col xs={12} className="player-details-card">
                            <Row>
                                <Col md={4} xs={12} className="d-flex flex-column justify-content-between">
                                    <div className="d-flex justify-content-center">
                                        <img src={selectedPlayer.imagePath} className="player-details-portrait" alt=""/>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        Rating: 
                                        <OptionalDetail value={selectedPlayer.rating} />
                                    </div>
                                </Col>
                                <Col md={8} xs={12} className="player-details">
                                    <div className="general-details-section">
                                        <Row>
                                            <Col>
                                                <OptionalDetail value={selectedPlayer.name} />
                                            </Col>
                                            <Col>
                                                <OptionalDetail value={selectedPlayer.age} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <OptionalDetail value={selectedPlayer.position} />
                                            </Col>
                                            <Col>
                                                <OptionalDetail value={selectedPlayer.weight} /> 
                                                / 
                                                <OptionalDetail value={selectedPlayer.height} />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="stastistics-details-section">
                                        <Row>
                                            <Col>
                                                <div>Appearences</div>
                                                <div>
                                                    <OptionalDetail value={selectedPlayer.appearences} />
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>Minutes Played</div>
                                                <div>
                                                    <OptionalDetail value={selectedPlayer.minutes} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div>Goals</div>
                                                <div>
                                                    <OptionalDetail value={selectedPlayer.goals} />
                                                </div>
                                            </Col>
                                            <Col>
                                                {
                                                    selectedPlayer.position === playerPositions(1) ? (
                                                        <>
                                                            <div>Saves</div>
                                                            <div>
                                                                <OptionalDetail value={selectedPlayer.saves} />
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div>Assists</div>
                                                            <div>
                                                                <OptionalDetail value={selectedPlayer.assists} />
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div>Yellow Cards</div>
                                                <div>
                                                    <OptionalDetail value={selectedPlayer.yellowCards} />
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>Red Cards</div>
                                                <div>
                                                    <OptionalDetail value={selectedPlayer.redCards} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                ) : null
            }
        </>
    )
}

export default PlayerDetailsCard;