import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import Registration from "./pages/registration/registration.component";
import HomePage from "./pages/homepage/homepage.component";
import AccountPage from "./pages/account_page/account_page.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/registration" component={Registration} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
