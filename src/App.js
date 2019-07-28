import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/app.scss";
import ToastContainer from "./Components/toast";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" component={ToastContainer} exact />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
