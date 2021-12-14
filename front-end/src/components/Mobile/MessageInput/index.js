import React, { useState } from "react";
import "./styles.scss";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const MessageInput = ({ props }) => {
  //const { queryFn } = props;
  const [input, setInput] = useState("");
  const [rows, setRows] = useState(1);
  const minRows = 1;
  const maxRows = 10;

  const handleSend = () => {
    //queryFn(input);
    setInput("");
  };

  const handleChange = (event) => {
    const textareaLineHeight = 24;

    const previousRows = event.target.rows;
    event.target.rows = minRows;

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    setInput(event.target.value);
    setRows(currentRows < maxRows ? currentRows : maxRows);
  };

  return (
    <div className="message-input-wrapper">
      <div className="message-input-container">
        <div className="message-input-button-rounded">
          <textarea
            rows={rows}
            className="message-input"
            type="text"
            value={input}
            onChange={(e) => handleChange(e)}
            placeholder="Type Message..."
          />
          <button
            className="message-send-button"
            type="text"
            onClick={() => handleSend()}
          >
            <ArrowUpwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
