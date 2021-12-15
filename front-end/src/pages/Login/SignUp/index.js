import React, { useState, useContext } from "react";

import axios from "axios";

import { useMutation } from "react-query";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "../../../assets/logo-login.png";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../../context/provider";

export const SignUp = () => {
  const { set_error, login_user } = useContext(GlobalContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const signup = useMutation(
    async ({ username, email, password, confirmPassword }) => {
      const postData = JSON.stringify({
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      const { data } = await axios.post(
        process.env.BASE_URL + "/auth/signup",
        postData,
        {
          crossdomain: true,
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (!data.token) throw new Error(data.error);
      return data;
    },
    {
      onSuccess: (data) => {
        login_user(data.token, data.user);
        history.push("/unis");
      },
      onError: (error) => {
        set_error(error.message);
      },
    }
  );

  const submitHandler = (e) => {
    e.preventDefault();
    signup.mutate({ username, email, password, confirmPassword });
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handleUsernameChange = (value) => {
    setUsername(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };
  return (
    <div className="signup-container">
      <div className="logo-container">
        <img className="login-logo" src={logo} alt="got-notes-logo" />
      </div>
      <div className="form-container">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="email-container">
            <input
              autoComplete="none"
              className="text-input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          </div>
          <div className="username-container">
            <input
              autoComplete="none"
              className="text-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => handleUsernameChange(e.target.value)}
            />
          </div>
          <div className="password-container">
            <input
              autoComplete="none"
              className="text-input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <button
              type="button"
              className="show-pass-button"
              onClick={() => setShowPassword((x) => !x)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
          <div className="password-container">
            <input
              autoComplete="none"
              className="text-input"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
            />
            <button
              type="button"
              className="show-pass-button"
              onClick={() => setShowPassword((x) => !x)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
          <div className="button-container">
            <button className="action-button" type="submit" value={"SIGN UP"}>
              SIGN UP
            </button>

            <button
              className="action-button"
              type="text"
              onClick={() => history.push("/login")}
            >
              LOGIN
            </button>

            <button
              className="action-button dark"
              type="text"
              onClick={() => history.push("/resetpass")}
            >
              FORGOT PASSWORD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
