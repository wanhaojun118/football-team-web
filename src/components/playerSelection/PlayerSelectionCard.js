import OptionalDetail from "../OptionalDetail";
import { Row, Col } from "react-bootstrap";

const PlayerSelectionCard = (props) => {
    return (
        <div className="player-selection-card d-flex flex-column" onClick={() => props.selectPlayerHandler(props.details.playerId)}>
            <img className="player-selection-card-image" src={props.details.imagePath} alt="" />
            <div className="player-selection-card-details">
                <Row>
                    <Col xs={4}>Name: </Col>
                    <Col className="details-value">
                        <OptionalDetail value={props.details.name} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>Age: </Col>
                    <Col className="details-value">
                        <OptionalDetail value={props.details.age} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>Weight:</Col>
                    <Col className="details-value">
                        <OptionalDetail value={props.details.weight} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>Height:</Col>
                    <Col className="details-value">
                        <OptionalDetail value={props.details.height} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>Position: </Col>
                    <Col className="details-value">
                        <OptionalDetail value={props.details.position} />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default PlayerSelectionCard;