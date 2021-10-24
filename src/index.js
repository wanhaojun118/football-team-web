import ReactDOM from "react-dom";
import Recruit from "./modules/Recruit";
import MyTeam from "./modules/MyTeam";
import Comparison from "./modules/Comparison";
import NavigationBar from "./components/general/NavigationBar";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/common.scss";
import "./styles/normalizeBootstrap.scss";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <NavigationBar />
            <Switch>
                <Route path="/recruit" exact component={Recruit} />
                <Route path="/compare" exact component={Comparison} />
                <Route path="/team" exact component={MyTeam} />
                <Route path="/" exact component={MyTeam} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);