import React from "react";

import "./styles.scss";

import { DownloadOutlined } from "@mui/icons-material";

export const DownloadIcon = ({ props }) => {
  //TODO gotta refactor this logic out to a helper function later

  //   const { itemID, fontSize } = props;
  const { fontSize } = props;

  return (
    <div className="notificationBell">
      <DownloadOutlined fontSize={fontSize} />
    </div>
  );
};
