import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo6.svg"

import "./header.styles.scss";
const Header = ({ currentUser }) => {
  return (
    <Router>
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo style={{ width: "2000%" }} className="logo" />
        </Link>

        <div className="options">
          {currentUser ? (
            <div className="option btn btn-primary">SIGN OUT</div>
          ) : (
            <Link className="option btn-primary" to="/registration">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
    </Router>
  );
};

export default Header;
