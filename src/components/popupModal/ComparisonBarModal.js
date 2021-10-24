import ComparisonBarChart from "../ComparisonBarChart";
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
                <Modal.Title>Comparison Bar Chart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ComparisonBarChart firstPlayer={props.firstPlayer} secondPlayer={props.secondPlayer} />
            </Modal.Body>
            <Modal.Footer>
                <Button className="button-primary" onClick={() => props.setShowComparisonBar(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ComparisonBarModal;