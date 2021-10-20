import { useSelector, useDispatch } from "react-redux";
import { hidePopupModal } from "../../slices/popupModalSlice";
import { Modal, Button } from "react-bootstrap";
import "../../styles/popupModal.scss";

const PopupModal = () => {
    const { show, title, message } = useSelector((state) => state.popupModal);
    const dispatch = useDispatch();

    return (
        <Modal
            show={show}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>
            <Modal.Body dangerouslySetInnerHTML={{__html: message}}></Modal.Body>
            <Modal.Footer>
                <Button className="button-primary" onClick={() => dispatch(hidePopupModal())}>OK</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PopupModal;