import { useSelector } from "react-redux";
import "../styles/pageLoading.scss";
import pageLoadingGif from "../assets/images/page-loading-graphic3.gif";

const PageLoading = () => {
    const isPageLoading = useSelector((state) => state.loading.isPageLoading);

    return (
        <>
            {
                isPageLoading ? (
                    <div className="page-loading-overlay">
                        <div className="loading-graphic-container">
                            <div className="loading-graphic"></div>
                            <img className="loading-graphic-image" src={pageLoadingGif} alt="page loading gif" />
                        </div>
                        <div className="loading-text">Loading ...</div>
                    </div>
                ) : null
            }
        </>
    )
};

export default PageLoading;