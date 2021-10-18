import CountrySelection from "../components/CountrySelection";
import PlayerSelection from "../components/playerSelection/PlayerSelection";
import PlayerDetailsCard from "../components/PlayerDetailsCard";
import PageLoading from "../components/PageLoading";
import Container from "react-bootstrap/Container";
import "../styles/common.scss";
import "../styles/normalizeBootstrap.scss";

const Home = () => {
    return (
        <Container>
            <PageLoading />
            <CountrySelection />
            <PlayerSelection />
            <PlayerDetailsCard />
        </Container>
    );
}

export default Home;