import axios from "axios";
import * as Constants from "../constants";

// For fetching GET request use, can be import and use by all components
export const fetchGet = async (url, extraParams = null) => {
    let params = {
        api_token: "scgB8O3cQRD2L8HG1frysaY4lqG4m4fVbj3pywOdfjGmwY5tlzYM3rmVVNak",
        ...extraParams
    };
    let result;

    const axiosInstance = axios.create({
        baseURL: url,
        method: Constants.httpMethodConstants.GET,
        params,
        timeout: 30000,
    });

    try {
        const response = await axiosInstance();

        if(response && response.status === 200){
            result = {
                success: true,
                status: response.status,
                data: response.data
            }
        }else{
            result = {
                success: false,
                status: response.status,
                data: response.data,
                statusMessage: response.statusMessage
            }
        }
    }catch(error){
        result = {
            success: false,
            errorMessage: error.message
        }

        console.error("[Fetch data error] error message: ", result.errorMessage);
    }

    return result;
}