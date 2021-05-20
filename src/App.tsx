import { Router } from "react-router";
import { history } from "./components";
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css'
import HeadBar from "./components/HeadBar";

function App() {
  return (
    <div className="container">
      <Router history={history}>
        <HeadBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
