import "./styles.scss";
import Button from "../Button/index.js";
import React, { useState } from "react";

const Form = ({ placeholder1, placeholder2, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const printCon = () => {
    console.log(email, pass);
  };
  onSubmit = printCon;
  return (
    <form className="EmailPassword" onSubmit={onSubmit}>
      <label className="email">
        <input
          type="text"
          placeholder={placeholder1}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="password">
        <input
          type="text"
          placeholder={placeholder2}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </label>
      <Button onClick={onSubmit} text="Submit" />
    </form>
  );
};

export default Form;
