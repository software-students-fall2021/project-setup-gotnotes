import React, { useContext } from "react";
import "./styles.scss";

import { GlobalContext } from "../../../context/provider";

//imports
import { useHistory, useLocation } from "react-router-dom";

//icon
import { School } from "@mui/icons-material";
import { NotificationBell } from "../Icons/NotificationBell";
import { LikeIcon } from "../Icons/LikeIcon";
import { DislikeIcon } from "../Icons/DislikeIcon";
import { CommentIcon } from "../Icons/CommentIcon";

export const GridItem = ({ props }) => {
  const { set_current_course, set_current_uni } = useContext(GlobalContext);
  const {
    itemId,
    itemName,
    itemLogoPath,
    itemType,
    fileType,
    enrolledStudents,
    courseCount,
    likeCount,
    commentCount,
    dislikeCount,
  } = props;

  const history = useHistory();
  const { pathname } = useLocation();

  const handleClick = () => {
    history.push(`${pathname}/${itemId}`);
    if (itemType == "uni") set_current_uni(itemId, itemName);
    if (itemType == "course") set_current_course(itemId, itemName);
  };

  return (
    <div className="grid-item" onClick={() => handleClick()}>
      <div className="grid-img-container">
        {itemType === "uni" && (
          <img className="list-item-logo" src={itemLogoPath} alt="" />
        )}
        {itemType === "file" && (
          <img
            className="list-item-logo"
            src={`/fileLogos/${fileType}.png`}
            alt=""
          />
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
