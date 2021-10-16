import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCountryList, setCountry } from "../slices/countrySlice";
import { fetchGet } from "../utils/GeneralFunctions";
import { apiUrls } from "../constants";
import Select, { components } from "react-select";
import "../styles/countrySelection.scss";

const IconValue = (props) => (
    <components.SingleValue {...props}>
        <img 
            src={props.data.image}
            className="country-dropdown-image"
        />
        { props.data.label }
    </components.SingleValue>
);

const IconOption = (props) => (
    <components.Option {...props}>
        <img 
            src={props.data.image}
            className="country-dropdown-image"
        />
        { props.data.label }
    </components.Option>
);

const CountrySelection = () => {
    const countryList = useSelector((state) => state.country.countryList);
    const dispatch = useDispatch();
    const [countryOptions, setCountryOptions] = useState();

    useEffect(() => {
        fetchAllCountries();
    }, []);

    useEffect(() => {
        if(countryList && countryList.length > 0){
            const countryOptions = countryList.map(country => (
                {
                    value: country.id,
                    label: country.name,
                    image: country.image_path
                }
            ));

            setCountryOptions(countryOptions);
        }
    }, [countryList]);

    const fetchAllCountries = async () => {
        const response = await fetchGet(apiUrls.GET_ALL_COUNTRIES);

        if(response.success){
            const countryData = response.data.data.map(country => (
                {
                    id: country.id,
                    name: country.name,
                    image_path: country.image_path
                }
            ));

            dispatch(setCountryList(countryData));
        }
    }

    return (
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
                    />
                ) : null
            }
        </div>
    )
}

export default CountrySelection;