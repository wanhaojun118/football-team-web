const OptionalDetail = (props) => {
    let className = props.className ? props.className : "";
    className += !props.value ? " unknown-details" : "";

    return (
        <span className={className}>
            { props.value || "Unknown" }
        </span>
    );
}

export default OptionalDetail;