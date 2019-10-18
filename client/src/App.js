import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import Registration from "./pages/registration/registration.component";
import Registration_GS from "./pages/registration_GS/registration.component";
import HomePage from "./pages/homepage/homepage.component";
import AccountPage from "./pages/account_page/account_page.component";
import SpotlightTile from "./components/spotlightTile/spotlightTile";
import Navbar from "./components/navbar/navbar";
import Contact from "./pages/contact_page/contact_page"
import About from "./pages/about_page/about_page"
import Budget from"./pages/budget_page/budget_page"

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
        <Navbar/>  
        <div>
        
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/registrationGS" component={Registration_GS} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/budget" component={Budget} />
          </Switch>
          <SpotlightTile/>
        </div>
      </Router>
    );
  }
}

export default App;
