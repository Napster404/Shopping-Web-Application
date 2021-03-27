import Main_page from "./components/main_page.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Layout from "./components/layout.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main_page />
        </Route>

        <Route path="/product">
          <Layout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
