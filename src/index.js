import ReactDOM from "react-dom";
import Home from "./modules/Home";
import MyTeam from "./modules/MyTeam";
import NavigationBar from "./components/general/NavigationBar";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <NavigationBar />
            <Switch>
                <Route path="/team" exact component={MyTeam} />
                <Route path="/home" exact component={Home} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);