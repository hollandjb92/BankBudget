import React from "react";

import "./registration.styles.scss";
import SignIn from "../../components/signup/signin.component";
import SignUp from "../../components/signin/signup.component";

const Registration = () => {
  return (
    <div className="register">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Registration;
