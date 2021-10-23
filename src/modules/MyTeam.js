import PageLoading from "../components/PageLoading";
import CurrentCrew from "../components/CurrentCrew";
import { Container } from "react-bootstrap";

const MyTeam = () => {
    return (
        <Container>
            <PageLoading />
            <CurrentCrew />
        </Container>
    )
}

export default MyTeam;