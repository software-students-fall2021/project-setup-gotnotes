import React, { useState, useEffect } from "react";

import "./styles.scss";

import { mockUserData, currentUserID } from "../../../../assets/mocks/mockData";

import { ThumbUpOutlined, ThumbUp } from "@mui/icons-material";

export const LikeIcon = ({ props }) => {
  //TODO gotta refactor this logic out to a helper function later

  const [isLiked, setisLiked] = useState(0);
  const { itemID, fontSize } = props;

  useEffect(() => {
    mockUserData
      .filter((user) => user.userID === currentUserID)[0]
      .userSubscribed.includes(itemID)
      ? setisLiked(1)
      : setisLiked(0);
  }, [itemID]);

  //checking if the current user has liked this class

  //needs refactoring for different like checking components

  //TODO create a middleware that adds the item to liked list of user
  return (
    <div className="notificationBell">
      {isLiked ? (
        <ThumbUp fontSize={fontSize} />
      ) : (
        <ThumbUpOutlined fontSize={fontSize} />
      )}
    </div>
  );
};
