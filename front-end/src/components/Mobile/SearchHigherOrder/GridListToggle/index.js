import React, { useContext } from "react";

import "./styles.scss";

//icons
import GridViewIcon from "@mui/icons-material/GridView";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";

import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import ViewListIcon from "@mui/icons-material/ViewList";
import { GlobalContext } from "../../../../context/provider";

export const GridListToggle = () => {
  const {
    globalState: { currentLayout },
    set_current_layout,
  } = useContext(GlobalContext);

  const changeLayout = () =>
    currentLayout == "list" ? set_current_layout("grid") : set_current_layout("list");

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
