import "../styles/stepContainer.scss";

const StepTitleContainer = (props) => (
    <div className="step-container">
        <div className="step-title">
            <span className="title-line">&emsp;</span>
            <span className="title">{props.title}</span>
            {
                [...Array(5)].map((element, index) => <span className="title-line" key={`title-line-${index}`}>&emsp;</span>)
            }
        </div>
    </div>
)

export default StepTitleContainer;