import ReactDOM from "react-dom";
import Home from "./module/Home";
import store from "./store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>,
    document.getElementById("root")
);