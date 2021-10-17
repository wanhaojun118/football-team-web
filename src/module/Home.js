import CountrySelection from "../components/CountrySelection";
import PlayerSelection from "../components/playerSelection/PlayerSelection";
import PageLoading from "../components/PageLoading";
import Container from "react-bootstrap/Container";
import "../styles/normalizeBootstrap.scss";

const Home = () => {
    return (
        <Container>
            <PageLoading />
            <CountrySelection />
            <PlayerSelection />
        </Container>
    );
}

export default Home;