import React, { useState } from "react";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "../../../assets/GotNotes.jpg";
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
    <div className="login-container">
      <div className="logo-container">
        <img className="login-logo" src={logo} alt="got-notes-logo" />
      </div>
      <div className="form-container">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="email-container">
            <label htmlFor="input">Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          </div>
          <div className="email-container">
            <label htmlFor="input">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => handleUsernameChange(e.target.value)}
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
                onClick={() => setShowPassword((x) => !x)}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
            </div>
          </div>
          <div className="password-container">
            <label htmlFor="input">Confirm Password</label>
            <div className="password-input-container">
              <input
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
          </div>
          <div className="login-button-continer">
            <input type="submit" value={"Sign Up"} />
          </div>
        </form>
      </div>
      <div className="signup-button-continer">
        <button onClick={() => history.push("/login")}>Login</button>
      </div>
      <div className="resetpass-button-container">
        <button onClick={() => history.push("/resetpass")}>
          Forgot Password
        </button>
      </div>
    </div>
  );
};
