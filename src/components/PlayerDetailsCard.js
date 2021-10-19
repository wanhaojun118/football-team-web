import { useSelector, useDispatch } from "react-redux";
import { addPlayer } from "../slices/playerSlice";
import StepTitleContainer from "./StepTitleContainer";
import OptionalDetail from "./OptionalDetail";
import ReactStars from "react-rating-stars-component";
import { Row, Col, Button } from "react-bootstrap";
import { playerPositions } from "../constants";
import "../styles/playerDetailsCard.scss";

const PlayerDetailsCard = () => {
    const selectedPlayer = useSelector((state) => state.player.currentPlayer);
    const dispatch = useDispatch();

    return (
        <>
            {
                selectedPlayer ? (
                    <Row className="step-container">
                        <StepTitleContainer title="Recruit This Player" />
                        <Col xs={12} className="player-details-card">
                            <Row>
                                <Col lg={4} xs={12} className="d-flex flex-column justify-content-between player-portrait-and-rating">
                                    <div className="d-flex justify-content-center player-portrait-container">
                                        <img src={selectedPlayer.imagePath} className="player-portrait" alt=""/>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="player-rating-label">Overall Rating: </span>
                                        {
                                            true ? (
                                                <ReactStars 
                                                    count={5} 
                                                    // value={(parseFloat(selectedPlayer.rating) / 2).toFixed(2)}
                                                    value={3.5}
                                                    size={30}
                                                    edit={false}
                                                    isHalf={true}
                                                />
                                            ) : (
                                                <OptionalDetail value={selectedPlayer.rating} className="player-rating-value" />
                                            )
                                        }
                                    </div>
                                </Col>
                                <Col lg={8} xs={12} className="player-details">
                                    <div className="general-details-section">
                                        <Row className="player-details-row">
                                            <Col>
                                                <OptionalDetail value={selectedPlayer.name} className="player-details-name" />
                                            </Col>
                                        </Row>
                                        <Row className="player-details-row">
                                            <Col>
                                                <OptionalDetail value={selectedPlayer.position} className="general-details-value" />
                                            </Col>
                                            <Col>
                                                <OptionalDetail value={selectedPlayer.age} className="general-details-value" />
                                            </Col>
                                            <Col>
                                                <OptionalDetail value={selectedPlayer.weight} className="general-details-value weight" /> 
                                                / 
                                                <OptionalDetail value={selectedPlayer.height} className="general-details-value height" />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="details-separator"></div>
                                    <div className="statistics-details-section">
                                        <Row className="player-details-row">
                                            <Col>
                                                <div className="statistics-title">Appearences</div>
                                                <div>
                                                    <OptionalDetail value={selectedPlayer.appearences} className="statistics-value" />
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="statistics-title">Minutes Played</div>
                                                <div>
                                                    <OptionalDetail value={selectedPlayer.minutes} className="statistics-value" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="player-details-row">
                                            <Col>
                                                <div className="statistics-title">Goals</div>
                                                <div>
                                                    <OptionalDetail value={selectedPlayer.goals} className="statistics-value" />
                                                </div>
                                            </Col>
                                            <Col>
                                                {
                                                    selectedPlayer.position === playerPositions(1) ? (
                                                        <>
                                                            <div className="statistics-title">Saves</div>
                                                            <div>
                                                                <OptionalDetail value={selectedPlayer.saves} className="statistics-value" />
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="statistics-title">Assists</div>
                                                            <div>
                                                                <OptionalDetail value={selectedPlayer.assists} className="statistics-value" />
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </Col>
                                        </Row>
                                        <Row className="player-details-row">
                                            <Col>
                                                <div className="statistics-title">Yellow Cards</div>
                                                <div>
                                                    <OptionalDetail value={selectedPlayer.yellowCards} className="statistics-value" />
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="statistics-title">Red Cards</div>
                                                <div>
                                                    <OptionalDetail value={selectedPlayer.redCards} className="statistics-value" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <div className="recruit-button-container">
                            <Button className="recruit-button button-primary" onClick={() => dispatch(addPlayer(selectedPlayer))}>Recruit</Button>
                        </div>
                    </Row>
                ) : null
            }
        </>
    )
}

export default PlayerDetailsCard;