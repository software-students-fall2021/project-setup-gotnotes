import React, { useState } from "react";
import "./styles.scss";

export const MessageInput = ({ props }) => {
  //const { queryFn } = props;
  const [input, setInput] = useState("");

  const handleSend = () => {
    //queryFn(input);
    setInput("");
  };

  const handleChange = (value) => setInput(value);

  return (
    <div className="message-input-container">
      <input
        className="message-input"
        type="text"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Type Message..."
      />
      <button
        className="message-send-button"
        type="text"
        onClick={() => handleSend()}
      ></button>
    </div>
  );
};
