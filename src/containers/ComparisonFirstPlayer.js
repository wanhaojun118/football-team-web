import PlayerDetailsCard from "../components/playerDetails/PlayerDetailsCard";

const ComparisonFirstPlayer = (props) => {
    return (
        <>
            <PlayerDetailsCard player={props.player} isComparisonPage={true} />
            <div className="vs-label">VS</div>
        </>
    );
}

export default ComparisonFirstPlayer;