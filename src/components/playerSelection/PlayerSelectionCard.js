import { Row, Col } from "react-bootstrap";

const PlayerSelectionCard = (props) => {
    return (
        <div className="player-selection-card d-flex flex-column">
            <img className="player-selection-card-image" src={props.details.imagePath} />
            <div className="player-selection-card-details">
                <Row>
                    <Col xs={4}>Name: </Col>
                    <Col className="details-value">
                        <span className={props.details.name ? "" : "unknown-details"}>
                            { props.details.name || "Unknown" }
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>Age: </Col>
                    <Col className="details-value">
                        <span className={props.details.age ? "" : "unknown-details"}>
                            { props.details.age || "Unknown" }
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>Weight:</Col>
                    <Col className="details-value">
                        <span className={props.details.weight ? "" : "unknown-details"}>
                            { props.details.weight || "Unknown" }
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>Height:</Col>
                    <Col className="details-value">
                        <span className={props.details.height ? "" : "unknown-details"}>
                            { props.details.height || "Unknown" }
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>Position: </Col>
                    <Col className="details-value">
                        <span className={props.details.position ? "" : "unknown-details"}>
                            { props.details.position || "Unknown" }
                        </span>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default PlayerSelectionCard;