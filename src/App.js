import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Navbar, Footer } from "./components";
import Homepage from "./pages";
import "./app.scss";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/homepage" component={Homepage}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
