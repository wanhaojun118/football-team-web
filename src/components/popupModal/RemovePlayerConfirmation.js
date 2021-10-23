import { Modal, Button } from "react-bootstrap";

const RemovePlayerConfirmation = (props) => {
    return (
        <Modal
            show={props.show}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Remove Player</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to remove this player?</Modal.Body>
            <Modal.Footer>
                <Button className="button-primary" onClick={props.confirmRemovePlayer}>OK</Button>
            </Modal.Footer>
        </Modal>
    )   
}

export default RemovePlayerConfirmation;