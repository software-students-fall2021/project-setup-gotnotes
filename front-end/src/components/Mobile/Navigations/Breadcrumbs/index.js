import React, { useContext } from "react";
import "./styles.scss";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

//icons
import { ArrowRight } from "@mui/icons-material";
import { GlobalContext } from "../../../../context/provider";

export const Breadcrumbs = () => {
  const {
    globalState: { currentUniName, currentCourseName },
  } = useContext(GlobalContext);

  const { pathname } = useLocation();
  const parsedArray = pathname.split("/");
  const depth = parsedArray.length - 1;

  return (
    <div className="breadcrumb-container">
      {depth === 1 ? (
        <Link className="active" to="/unis">
          Unis
        </Link>
      ) : (
        <Link to="/unis">Unis</Link>
      )}
      {depth === 2 ? (
        <>
          <ArrowRight fontSize="large" />
          <Link className="active" to={`/unis/${parsedArray[2]}`}>
            {currentUniName}
          </Link>
        </>
      ) : depth === 3 ? (
        <>
          <ArrowRight fontSize="large" />
          <Link to={`/unis/${parsedArray[2]}`}>{currentUniName}</Link>
          <ArrowRight fontSize="large" />
          <Link
            className="active"
            to={`/unis/${parsedArray[2]}/${parsedArray[3]}`}
          >
            {currentCourseName}
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Breadcrumbs;
