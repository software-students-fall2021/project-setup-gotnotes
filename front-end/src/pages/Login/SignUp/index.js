import React, { useState } from "react";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "../../../assets/logo-login.png";
import "./styles.scss";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
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
