import ComparisonRadarChart from "../ComparisonRadarChart";
import { Modal, Button } from "react-bootstrap";
import "../../styles/popupModal.scss";

const ComparisonBarModal = (props) => {
    return (
        <Modal
            show={props.show}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Comparison Radar Chart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ComparisonRadarChart firstPlayer={props.firstPlayer} secondPlayer={props.secondPlayer} />
            </Modal.Body>
            <Modal.Footer>
                <Button className="button-primary" onClick={() => props.setShowComparisonRadar(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ComparisonBarModal;