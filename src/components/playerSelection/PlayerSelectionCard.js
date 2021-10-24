import OptionalDetail from "../OptionalDetail";
import { Row, Col } from "react-bootstrap";

const PlayerSelectionCard = (props) => {
    return (
        <div className="player-selection-card d-flex" onClick={() => props.selectPlayerHandler(props.details.playerId)}>
            <div className="d-flex justify-content-center">
                <img className="player-selection-card-image" src={props.details.imagePath} alt="" />
            </div>
            <div className="player-selection-card-details w-100">
                <Row>
                    <Col xl={12} className="row vertical-details">
                        { !props.isVertical ? <Col xl={4} xs={12}>Name: </Col> : null }
                        <Col className="details-value player-name">
                            <OptionalDetail value={props.details.name} />
                        </Col>
                    </Col>

                    {
                        !props.isVertical ? (
                            <>
                                <Col xl={12} className="row">
                                    { !props.isVertical ? <Col xl={4} xs={12}>Age: </Col> : null }
                                    <Col className="details-value">
                                        <OptionalDetail value={props.details.age} />
                                    </Col>
                                </Col>

                                <Col xl={12} className="row">
                                    { !props.isVertical ? <Col xl={4} xs={12}>Weight:</Col> : null }
                                    <Col className="details-value">
                                        <OptionalDetail value={props.details.weight} />
                                    </Col>
                                </Col>

                                <Col xl={12} className="row">
                                    { !props.isVertical ? <Col xl={4} xs={12}>Height:</Col> : null }
                                    <Col className="details-value">
                                        <OptionalDetail value={props.details.height} />
                                    </Col>
                                </Col>
                            </>
                        ) : null
                    }

                    <Col xl={12} className="row vertical-details">
                        { !props.isVertical ? <Col xl={4} xs={12}>Position: </Col> : null }
                        <Col className="details-value player-position">
                            <OptionalDetail value={props.details.position} />
                        </Col>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default PlayerSelectionCard;