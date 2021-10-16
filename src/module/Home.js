import CountrySelection from "../components/CountrySelection";
import PageLoading from "../components/PageLoading";

const Home = () => {
    return (
        <>
            <PageLoading />
            <CountrySelection />
        </>
    );
}

export default Home;