const OptionalDetail = (props) => (
    <span className={props.value ? "" : "unknown-details"}>
        { props.value || "Unknown" }
    </span>
)

export default OptionalDetail;