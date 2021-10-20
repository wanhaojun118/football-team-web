import { useSelector } from "react-redux";
import OptionalDetail from "../OptionalDetail";
import ReactStars from "react-rating-stars-component";
import { Row, Col,  } from "react-bootstrap";
import { playerPositions } from "../../constants";
import "../../styles/playerDetailsCard.scss";

const PlayerDetailsCard = (props) => {
    const selectedCountry = useSelector((state) => state.country.selectedCountry);

    return (
        <Col xs={12} className="player-details-card">
            <Row>
                <Col lg={4} xs={12} className="d-flex flex-column justify-content-between player-portrait-and-rating">
                    <div className="d-flex justify-content-center player-portrait-container">
                        <img src={props.player.imagePath} className="player-portrait" alt=""/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <span className="player-rating-label">Overall Rating: </span>
                        {
                            true ? (
                                <ReactStars 
                                    count={5} 
                                    // value={(parseFloat(props.player.rating) / 2).toFixed(2)}
                                    value={3.5}
                                    size={30}
                                    edit={false}
                                    isHalf={true}
                                />
                            ) : (
                                <OptionalDetail value={props.player.rating} className="player-rating-value" />
                            )
                        }
                    </div>
                </Col>
                <Col lg={8} xs={12} className="player-details">
                    <div className="general-details-section">
                        <Row className="player-details-row">
                            <Col>
                                <OptionalDetail value={props.player.name} className="player-details-name" />
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center">
                                <div className="player-details-country-name">{selectedCountry.countryName}</div>
                                <div>
                                    <img src={selectedCountry.countryImage} className="player-details-country-flag" alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="player-details-row">
                            <Col>
                                <OptionalDetail value={props.player.position} className="general-details-value" />
                            </Col>
                            <Col>
                                <OptionalDetail value={props.player.age} className="general-details-value" />
                            </Col>
                            <Col>
                                <OptionalDetail value={props.player.weight} className="general-details-value weight" /> 
                                / 
                                <OptionalDetail value={props.player.height} className="general-details-value height" />
                            </Col>
                        </Row>
                    </div>
                    <div className="details-separator"></div>
                    <div className="statistics-details-section">
                        <Row className="player-details-row">
                            <Col>
                                <div className="statistics-title">Appearences</div>
                                <div>
                                    <OptionalDetail value={props.player.appearences} className="statistics-value" />
                                </div>
                            </Col>
                            <Col>
                                <div className="statistics-title">Minutes Played</div>
                                <div>
                                    <OptionalDetail value={props.player.minutes} className="statistics-value" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="player-details-row">
                            <Col>
                                <div className="statistics-title">Goals</div>
                                <div>
                                    <OptionalDetail value={props.player.goals} className="statistics-value" />
                                </div>
                            </Col>
                            <Col>
                                {
                                    props.player.position === playerPositions(1) ? (
                                        <>
                                            <div className="statistics-title">Saves</div>
                                            <div>
                                                <OptionalDetail value={props.player.saves} className="statistics-value" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="statistics-title">Assists</div>
                                            <div>
                                                <OptionalDetail value={props.player.assists} className="statistics-value" />
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
                                    <OptionalDetail value={props.player.yellowCards} className="statistics-value" />
                                </div>
                            </Col>
                            <Col>
                                <div className="statistics-title">Red Cards</div>
                                <div>
                                    <OptionalDetail value={props.player.redCards} className="statistics-value" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Col>
    );
}

export default PlayerDetailsCard;