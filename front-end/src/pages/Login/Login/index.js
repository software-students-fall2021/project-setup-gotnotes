import React, { useState } from "react";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "../../../assets/GotNotes.jpg";
import "./styles.scss";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const handleEmailOrUsernameChange = (value) => {
    setEmailOrUsername(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
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
                className="show-pass-button"
                onClick={() => setShowPassword((x) => !x)}
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
