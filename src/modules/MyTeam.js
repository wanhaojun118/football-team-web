import PageLoading from "../components/PageLoading";
import CurrentCrew from "../containers/CurrentCrew";
import { Container } from "react-bootstrap";

/*** MyTeam module: base component of "MY TEAM" page ***/
const MyTeam = () => {
    return (
        <Container>
            <PageLoading />
            <CurrentCrew />
        </Container>
    )
}

export default MyTeam;