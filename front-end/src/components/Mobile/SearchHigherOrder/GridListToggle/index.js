import React from "react";

import "./styles.scss";

//icons
import GridViewIcon from "@mui/icons-material/GridView";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";

import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import ViewListIcon from "@mui/icons-material/ViewList";

export const GridListToggle = ({ props }) => {
  const { currentLayout, setCurrentLayout } = props;

  const changeLayout = () =>
    setCurrentLayout(currentLayout === "grid" ? "list" : "grid");

  return (
    <div className="grid-list-toggle">
      <div className="grid-icon-container" onClick={() => changeLayout()}>
        {currentLayout === "grid" ? <GridViewSharpIcon /> : <GridViewIcon />}
      </div>

      <div className="list-icon-container" onClick={() => changeLayout()}>
        {currentLayout === "list" ? <ViewListIcon /> : <ViewListOutlinedIcon />}
      </div>
    </div>
  );
};
