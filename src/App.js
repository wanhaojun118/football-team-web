import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
    useEffect(() => {
        axios.get("https://soccer.sportmonks.com/api/v2.0/countries", {
            params: {
                api_token: "scgB8O3cQRD2L8HG1frysaY4lqG4m4fVbj3pywOdfjGmwY5tlzYM3rmVVNak"
            }
        })
        .then(response => console.log("response data: ", response.data))
        .catch(error => console.log("error: ", error));
    }, []);

    return (
        <div>App</div>
    );
}

export default App;