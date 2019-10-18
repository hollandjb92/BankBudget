import React from "react";
import "./signup.styles.scss";
import CustomButton from "../custombutton/custombutton.component";
import FormInput from "../forminput/forminput.component";
import API from "../../utils/API";
// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      value:  ""
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.getUser()
      .then(res =>
        this.setState({ displayName: res.data, email: "", password: "", confirmPassword: "" })
      )
      .catch(err => console.log(err));
  };
  
  handleInputChange = event => {
    const { displayName, value } = event.target;
    this.setState({
      [displayName]: value, 
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.displayName) {
      API.saveUser({
        title: this.state.displayName
      })
        .then(res => this.loadUser())
        .catch(err => console.log(err));
    }
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="test"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
