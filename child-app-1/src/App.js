import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import ViewOrder from "./ViewOrder";
import Home from "./Home";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <Route exact path="/app2/:orderId" component={ViewOrder} />
    </Router>
  );
}

export default App;