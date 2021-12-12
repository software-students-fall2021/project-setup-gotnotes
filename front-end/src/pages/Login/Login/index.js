import React, { useState } from "react";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "../../../assets/GotNotes.jpg";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../context/provider";
import { useMutation } from "react-query";
import axios from "axios";

export const Login = () => {
  const { set_error, login_user } = useContext(GlobalContext);
  const history = useHistory();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const login = useMutation(
    async ({ emailOrUsername, password }) => {
      const postData = JSON.stringify({
        usernameOrEmail: emailOrUsername,
        password: password,
      });
      const { data } = await axios.post(
        "http://localhost:4000/login",
        postData,
        {
          crossdomain: true,
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
    login.mutate({ emailOrUsername, password });
  };
  const handleEmailOrUsernameChange = (value) => {
    setEmailOrUsername(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  if (login.isLoading) return <div>Loading...</div>;
  return (
    <div className="login-container">
      <div className="logo-container">
        <img className="login-logo" src={logo} alt="got-notes-logo" />
      </div>
      <div className="form-container">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="email-container">
            <label htmlFor="input">Email or Username</label>
            <input
              type="text"
              placeholder="Email or Usename"
              value={emailOrUsername}
              onChange={(e) => handleEmailOrUsernameChange(e.target.value)}
            />
          </div>
          <div className="password-container">
            <label htmlFor="input">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
              />
              <button
                type="button"
                className="show-pass-button"
                onClick={() => {
                  setShowPassword((x) => !x);
                }}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
            </div>
          </div>
          <div className="login-button-continer">
            <input type="submit" value={"Login"} />
          </div>
        </form>
      </div>
      <div className="signup-button-continer">
        <button onClick={() => history.push("/signup")}>Sign Up</button>
      </div>
      <div className="resetpass-button-container">
        <button onClick={() => history.push("/resetpass")}>
          Forgot Password
        </button>
      </div>
    </div>
  );
};
