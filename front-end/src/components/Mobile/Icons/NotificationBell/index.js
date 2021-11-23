import React, { useState, useEffect } from "react";

import "./styles.scss";

import { mockUserData, currentUserID } from "../../../../assets/mocks/mockData";

import {
  NotificationsActive,
  NotificationsNoneOutlined,
} from "@mui/icons-material";

export const NotificationBell = ({ props }) => {
  //TODO gotta refactor this logic out to a helper function later

  const [isActive, setIsActive] = useState(0);
  const { itemID, fontSize } = props;

  useEffect(() => {
    mockUserData
      .filter((user) => user.userID === currentUserID)[0]
      .userSubscribed.includes(itemID)
      ? setIsActive(1)
      : setIsActive(0);
  }, [itemID]);

  //checking if the current user has subscribed to this class

  //TODO create a middleware that adds the item to Subscribed lsit of the User
  //upon clicking on the bell
  return (
    <div className="notificationBell">
      {isActive ? (
        <NotificationsActive fontSize={fontSize} />
      ) : (
        <NotificationsNoneOutlined fontSize={fontSize} />
      )}
    </div>
  );
};
