import React, { useState, useEffect } from "react";

import "./styles.scss";

import { mockUserData, currentUserID } from "../../../../assets/mocks/mockData";

import { ThumbDown, ThumbDownOutlined } from "@mui/icons-material";

export const DislikeIcon = ({ props }) => {
  //TODO gotta refactor this logic out to a helper function later

  const [isDisliked, setisDisliked] = useState(0);
  const { itemID, fontSize } = props;

  useEffect(() => {
    mockUserData
      .filter((user) => user.userID === currentUserID)[0]
      .userSubscribed.includes(itemID)
      ? setisDisliked(1)
      : setisDisliked(0);
  }, [itemID]);

  //checking if the current user has disliked this

  //TODO create a middleware that adds the item to disliked list of user
  return (
    <div className="notificationBell">
      {isDisliked ? (
        <ThumbDown fontSize={fontSize} />
      ) : (
        <ThumbDownOutlined fontSize={fontSize} />
      )}
    </div>
  );
};
