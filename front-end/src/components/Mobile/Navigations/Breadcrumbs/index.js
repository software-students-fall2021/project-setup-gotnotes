import React, { useContext } from "react";
import "./styles.scss";

import { Link } from "react-router-dom";

//icons
import { ArrowRight } from "@mui/icons-material";
import { GlobalContext } from "../../../../context/provider";

export const Breadcrumbs = () => {
  const { globalState } = useContext(GlobalContext);

  const { currentUni, currentCourse } = globalState;

  const path = ["/unis"];
  const text = ["Unis"];

  if (currentUni) {
    path.push(path[0] + `/${currentUni}`);
    text.push(currentUni);
  }
  if (currentCourse && currentUni) {
    path.push(path[1] + `/${currentCourse}`);
    text.push(currentCourse);
  }

  return (
    <div className="breadcrumb-container">
      {path.map((path, idx) => {
        return (
          <>
            {idx != 0 && <ArrowRight fontSize="large" />}
            <Link to={`${path}`}>{text[idx]}</Link>
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
