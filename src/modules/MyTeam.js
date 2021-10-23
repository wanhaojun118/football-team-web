import PageLoading from "../components/PageLoading";
import CurrentCrew from "../components/CurrentCrew";
import { Container } from "react-bootstrap";
// import "../styles/common.scss";
// import "../styles/normalizeBootstrap.scss";

const MyTeam = () => {
    return (
        <Container>
            <PageLoading />
            <CurrentCrew />
        </Container>
    )
}

export default MyTeam;