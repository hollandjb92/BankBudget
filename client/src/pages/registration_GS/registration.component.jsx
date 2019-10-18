import React, { Component } from "react";

import "./registration.styles.scss";
import CustomButton from "../../components/custombutton/custombutton.component";
import FormInput from "../../components/forminput/forminput.component";
import API from "../../utils/API";

class Registration extends Component {
    constructor(props) {
      super(props);
      this.state = {
        FirstName: '',
        lastName: '',
        amount: '',
        deposit: '',
        withdrawal: ''
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      if (nam === "amount") {
        if (!Number(val)) {
          alert("Your amount must be a number");
        }
      }
      if (nam === "Deposit_Indicator") {
        if ((val !== 'W') || (val !== 'D')) {
          alert("Must be 'D' or 'W'");
        }
      }
      this.setState({[nam]: val});
    }

    mySubmitHandler = (event) => {
      event.preventDefault();
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
      if (nam === "D")
      {
        //this.state.deposit == this.state.amount
      }
      API.saveUser({
        FirstName: this.state.FirstName,
        lastName: this.state.lastName,
        deposit: this.state.deposit,
        withdrawal: this.state.withdrawal
      })
      alert("You are submitting " + this.state.FirstName
);
    }

    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.FirstName
} {this.state.age}</h1>
        <p>Enter your First Name:</p>
        <input
          type='text'
          name='FirstName'
          onChange={this.myChangeHandler}
        />
        <p>Enter your Last Name:</p>
        <input
          type='text'
          name='lastName'
          onChange={this.myChangeHandler}
        />
        <p>What Type of Transaction would you like to make? 
        ("W" for withdrawal, "D" for deposit)
        </p>
        <input
          type='text'
          name='Deposit_Indicator'
          onChange={this.myChangeHandler}
        />
        <p>Enter the Amount you wish to withdrawal/deposit. Leave blank if viewing balance</p>
        <input
          type='text'
          name='amount'
          onChange={this.myChangeHandler}
        />
      <br/>
      <br/>
      <input type='submit' />
        </form>
      );
    }
  }
/*
class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
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


*/
export default Registration;
