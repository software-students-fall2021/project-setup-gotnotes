import React from "react";
import "./styles.scss";

//imports
import { useHistory, useLocation } from "react-router-dom";

//icon
import { School } from "@mui/icons-material";
import { NotificationBell } from "../Icons/NotificationBell";
import { LikeIcon } from "../Icons/LikeIcon";
import { DislikeIcon } from "../Icons/DislikeIcon";
import { CommentIcon } from "../Icons/CommentIcon";

export const GridItem = ({ props }) => {
  const {
    itemId,
    itemName,
    itemLogoPath,
    itemType,
    enrolledStudents,
    courseCount,
    likeCount,
    commentCount,
    dislikeCount,
  } = props;

  const history = useHistory();
  const { pathname } = useLocation();

  const handleClick = () => history.push(`${pathname}/${itemId}`);

  return (
    <div className="grid-item" onClick={() => handleClick()}>
      <div className="grid-img-container">
        {(itemType === "uni" || itemType === "file") && (
          <img className="grid-item-logo" src={itemLogoPath} alt="" />
        )}
      </div>

      <div className="grid-item-name-container">
        <span className="grid-item-name">{itemName}</span>
      </div>

      <div className="grid-info-container">
        <div
          className={`grid-info${
            itemType === "uni" || itemType === "class" ? " single" : ""
          }`}
        >
          {itemType === "uni" && (
            <div className="grid-icon-set">
              <School fontSize="large" />
              <span>{courseCount}</span>
            </div>
          )}
          {itemType === "class" && (
            <div className="grid-icon-set">
              <NotificationBell props={{ itemId, fontSize: "large" }} />
              <span>{enrolledStudents}</span>
            </div>
          )}
          {itemType === "file" && (
            <>
              <div className="grid-icon-set">
                <LikeIcon props={{ itemId, fontSize: "large" }} />
                <span>{likeCount}</span>
              </div>
              <div className="grid-icon-set">
                <DislikeIcon props={{ itemId, fontSize: "large" }} />
                <span>{dislikeCount}</span>
              </div>
              <div className="grid-icon-set">
                <CommentIcon props={{ itemId, fontSize: "large" }} />
                <span>{commentCount}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
