import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCountryList, setCountry } from "../slices/countrySlice";
import { startPageLoading, stopPageLoading } from "../slices/loadingSlice";
import { showPopupModal, hidePopupModal, setTitle, setMessage } from "../slices/popupModalSlice";
import { fetchGet } from "../utils/GeneralFunctions";
import { apiUrls } from "../constants";
import Select, { components } from "react-select";
import "../styles/countrySelection.scss";
import StepTitleContainer from "./StepTitleContainer";
import Row from "react-bootstrap/Row";

const IconValue = (props) => (
    <components.SingleValue {...props}>
        <img 
            src={props.data.imagePath}
            className="country-dropdown-image"
            alt=""
        />
        { props.data.label }
    </components.SingleValue>
);

const IconOption = (props) => (
    <components.Option {...props}>
        <img 
            src={props.data.imagePath}
            className="country-dropdown-image"
            alt=""
        />
        { props.data.label }
    </components.Option>
);

const CountrySelection = (props) => {
    const countryList = useSelector((state) => state.country.countryList);
    const selectedCountry = useSelector((state) => state.country.selectedCountry);
    const dispatch = useDispatch();
    const [countryOptions, setCountryOptions] = useState();

    useEffect(() => {
        fetchAllCountries();
    }, []);

    useEffect(() => {
        if(countryList && countryList.length > 0){
            const countryOptions = countryList.map(country => (
                {
                    value: {
                        countryId: country.countryId,
                        countryName: country.name,
                        countryImage: country.imagePath
                    },
                    label: country.name,
                    imagePath: country.imagePath
                }
            ));

            setCountryOptions(countryOptions);
        }
    }, [countryList]);

    const fetchAllCountries = async () => {
        dispatch(startPageLoading());

        const response = await fetchGet(apiUrls.GET_ALL_COUNTRIES());

        if(response.success){
            const countryData = response.data?.data?.map(country => (
                {
                    countryId: country.id,
                    name: country.name,
                    imagePath: country.image_path
                }
            ));

            dispatch(setCountryList(countryData));
            dispatch(stopPageLoading());
        }else{
            dispatch(setTitle("Error"));
            dispatch(setMessage("Cannot get country list."));

            dispatch(stopPageLoading());

            dispatch(showPopupModal());
        }
    }

    return (
        <Row className="step-container">
            <StepTitleContainer title="Select A Country" />
            <div className="country-dropdown">
                {
                    countryOptions && countryOptions.length > 0 ? (
                        <Select 
                            options={countryOptions}
                            components={{
                                Option: IconOption,
                                SingleValue: IconValue
                            }}
                            isSearchable={false}
                            onChange={(e) => dispatch(setCountry(e.value))}
                            value={selectedCountry ? {
                                label: selectedCountry.countryName,
                                value: selectedCountry.countryId,
                                imagePath: selectedCountry.countryImage,
                            } : null}
                            placeholder={"Please select a country"}
                        />
                    ) : null
                }
            </div>
        </Row>
    )
}

export default CountrySelection;