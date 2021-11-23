import React from "react";
import Button from "../../../components/Mobile/Button";
import logo from "../../../assets/GotNotes.jpg";
import "./styles.scss";

export const ResetPass = () => {
  return (
    <div className="whole">
      <img src={logo} className="image" alt="logo" />
      <h2 className="login">Reset Password</h2>
      <form>
        <label>
          <input
            className="form"
            placeholder="Email"
            onSubmit={console.log("Submit")}
          />
        </label>
      </form>
      <div className="button">
        <a href="/login">
          <Button text="Reset Password" />
        </a>
      </div>
    </div>
  );
};
