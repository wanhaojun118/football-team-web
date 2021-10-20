import { useState } from "react";
import CountrySelection from "../components/CountrySelection";
import PlayerSelection from "../components/playerSelection/PlayerSelection";
import RecruitPlayer from "../components/playerDetails/RecruitPlayer";
import PageLoading from "../components/PageLoading";
import PopupModal from "../components/popupModal/PopupModal";
import Container from "react-bootstrap/Container";
import "../styles/common.scss";
import "../styles/normalizeBootstrap.scss";

const Home = () => {
    return (
        <Container>
            <PageLoading />
            <CountrySelection />
            <PlayerSelection />
            <RecruitPlayer />
            <PopupModal />
        </Container>
    );
}

export default Home;