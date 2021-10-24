import CountryAndPlayerSelectionWrapper from "../containers/CountryAndPlayerSelectionWrapper";
import RecruitPlayer from "../containers/RecruitPlayer";
import PageLoading from "../components/PageLoading";
import PopupModal from "../components/popupModal/PopupModal";
import Container from "react-bootstrap/Container";

/*** Recruit module: base component of "RECRUIT" page ***/
const Recruit = () => {
    return (
        <Container>
            <PageLoading />
            <CountryAndPlayerSelectionWrapper />
            <RecruitPlayer />
            <PopupModal />
        </Container>
    );
}

export default Recruit;