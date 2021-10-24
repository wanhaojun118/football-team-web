import CountryAndPlayerSelectionWrapper from "../containers/CountryAndPlayerSelectionWrapper";
import RecruitPlayer from "../components/playerDetails/RecruitPlayer";
import PageLoading from "../components/PageLoading";
import PopupModal from "../components/popupModal/PopupModal";
import Container from "react-bootstrap/Container";
import "../styles/common.scss";
import "../styles/normalizeBootstrap.scss";

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