import "./styles.scss";
import React from "react";
import Button from "@mui/material/Button";

const newButton = ({ color, text, onClick }) => {
  return (
    <Button
      className="Button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </Button>
  );
};

newButton.defaultProps = {
  color: "grey",
  text: "Button",
};

export default newButton;
