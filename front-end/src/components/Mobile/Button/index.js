import React from 'react';
import useHistory from "react-router-dom"

const ButtonWithLink = ({ props }) => {

  const history = useHistory();
    const { pathname } = useLocation();

    const handleClick = () => history.push(`${pathname}/${itemName}`);

  return (

    <button onClick={() => history.push(path_to_page)}> </button >

  )

}
export default ButtonWithLink

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
