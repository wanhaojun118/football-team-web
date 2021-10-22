import removeIcon from "../../assets/images/remove-icon.png";

const RemovePlayerIcon = (props) => {
    return (
        <div className="remove-icon-container">
            <img src={removeIcon} className="remove-icon" onClick={props.removePlayerHandler} />
        </div>
    );
}

export default RemovePlayerIcon;