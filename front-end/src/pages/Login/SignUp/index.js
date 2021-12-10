import React from "react";
import Form from "../../../components/Mobile/Forms";

import Button from "../../../components/Mobile/Button";
import logo from "../../../assets/GotNotes.jpg";
import "./styles.scss";
import { NavLink } from "react-router-dom";

var axios = require('axios');
var data = JSON.stringify({
  "email": "test1@test.com",
  "username": "testUser",
  "password": "Test_1234",
  "confirmPassword": "Test_1234"
});

var config = {
  method: 'post',
  url: 'localhost:4000/signup',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


export const SignUp = () => {
  return (
    <div className="whole">
      <img src={logo} className="image" alt="logo" />
      <h2 className="login"> Sign Up</h2>
      <div>
        <text enableBackground="false"> Have an account? </text>
        <text>
          <a href="/login">
            <Button text="Login" />{" "}
          </a>
        </text>
      </div>
      <div className="reset">
        <NavLink to="/resetpass">
          <Button text="Reset Password" />
        </NavLink>
      </div>
      <Form placeholder1="Email" placeholder2="Password" />
    </div>
  );
};
