import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { GlobalContext } from "../../../context/provider";
import { useMutation } from "react-query";

import "./styles.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "../../../assets/logo-login.png";

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
        process.env.BASE_URL + "/api/auth/login",
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
            <input
              className="text-input"
              type="text"
              placeholder="Email or Username"
              value={emailOrUsername}
              onChange={(e) => handleEmailOrUsernameChange(e.target.value)}
            />
          </div>
          <div className="password-container">
            <input
              className="text-input"
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
          <div className="button-container">
            <button className="action-button" type="submit" value={"Login"}>
              LOGIN
            </button>

            <button
              type="text"
              className="action-button"
              onClick={() => history.push("/signup")}
            >
              SIGN UP
            </button>

            <button
              type="text"
              className="action-button dark"
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
