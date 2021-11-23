import React from "react";

import "./styles.scss";

import { CommentOutlined } from "@mui/icons-material";

export const CommentIcon = ({ props }) => {
  //TODO gotta refactor this logic out to a helper function later

  const { fontSize } = props;

  return (
    <div className="notificationBell">
      <CommentOutlined fontSize={fontSize} />
    </div>
  );
};
