import axios from "axios";
import * as Constants from "../constants";

export const fetchGet = async (url, extraParams = null) => {
    let params = {
        api_token: process.env.REACT_APP_API_TOKEN,
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