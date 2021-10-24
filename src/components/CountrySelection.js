import { useState, useEffect } from "react";
import Select, { components } from "react-select";
import "../styles/countrySelection.scss";
import StepTitle from "./StepTitle";
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
    const [countryOptions, setCountryOptions] = useState();

    useEffect(() => {
        if(props.countryList && props.countryList.length > 0){
            // Format and sort country list
            const countryOptions = props.countryList.map(country => (
                {
                    value: {
                        countryId: country.countryId,
                        countryName: country.name,
                        countryImage: country.imagePath
                    },
                    label: country.name,
                    imagePath: country.imagePath
                }
            )).sort((countryA, countryB) => countryA.label > countryB.label ? 1 : -1);

            // Update country options for React-Select library use
            setCountryOptions(countryOptions);
        }
    }, [props.countryList]);

    return (
        <Row className="step-container">
            <StepTitle title="Select A Country" />
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
                            onChange={(e) => props.selectCountry(e.value)}
                            value={props.selectedCountry ? {
                                label: props.selectedCountry.countryName,
                                value: props.selectedCountry.countryId,
                                imagePath: props.selectedCountry.countryImage,
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