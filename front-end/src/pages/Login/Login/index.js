import React from "react";
import Form from "../../../components/Mobile/Forms";

import Button from "../../../components/Mobile/Button";
import logo from "../../../assets/GotNotes.jpg";
import "./styles.scss";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className="whole">
      <img src={logo} className="image" alt="logo" />
      <h2 className="login"> Login</h2>
      <div>
        <text enableBackground="false"> Don't have an account? </text>
        <text>
          <a href="/signup">
            <Button text="Sign up" />{" "}
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
