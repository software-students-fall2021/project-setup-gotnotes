import React from "react";

import "./styles.scss";

import { Reply } from "@mui/icons-material";

export const ReplyIcon = ({ props }) => {
  //TODO needs logic for reply auto focus and comment id
  //for auto post req with related high level comment
  return (
    <div className="notificationBell">
      <Reply fontSize="large" />
    </div>
  );
};
