import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Counter, Employee, Notfound } from "../Pages";

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Counter} />
            <Route exact path="/employee" component={Employee} />
            <Route exact path="/not-found" component={Notfound} />
            <Redirect from="/*" to="/not-found" />
        </Switch>
    )
}

export default Routes
