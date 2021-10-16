import ReactDOM from "react-dom";
import App from "./module/Home";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);