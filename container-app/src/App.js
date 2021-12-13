import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_PRODUCE_HOST: app1Host,
  REACT_APP_MEAT_HOST: app2Host,
} = process.env;

function Header() {
  return (
    <h3 className="title">Main Container</h3>
  );
}

function App1({ history }) {
  return <MicroFrontend history={history} host={app1Host} name="App1" />;
}

function App2({ history }) {
  return <MicroFrontend history={history} host={app2Host} name="App2" />;
}

function ViewOrderApp2({ history }) {
  return (
    <div>
      <div className="home">
        <MicroFrontend history={history} host={app2Host} name="App2" />
      </div>
    </div>
  );
}

function Home({ history }) {
  const [input, setInput] = useState("");

  const handleOnClick = () => {
    history.push(`/app2/${input}`);
  };

  return (
    <div>
      <div className="home">
        <input
          placeholder="Enter Order ID"
          defaultValue={input}
          onBlur={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClick}>Submit</button>
      </div>

      <div className="home">
        <div className="content">
          <div className="app1">
            <App1 />
          </div>
          <div className="app2">
            <App2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/app2/:orderId" component={ViewOrderApp2} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
