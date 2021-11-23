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
  //TODO in the future we will fetch these data from the api, for now we use mock data
  //with a similar format to the actual api that we will design
  const {
    itemID,
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

  const handleClick = () => history.push(`${pathname}/${itemID}`);

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
              <NotificationBell props={{ itemID, fontSize: "large" }} />
              <span>{enrolledStudents}</span>
            </div>
          )}
          {itemType === "file" && (
            <>
              <div className="grid-icon-set">
                <LikeIcon props={{ itemID, fontSize: "large" }} />
                <span>{likeCount}</span>
              </div>
              <div className="grid-icon-set">
                <DislikeIcon props={{ itemID, fontSize: "large" }} />
                <span>{dislikeCount}</span>
              </div>
              <div className="grid-icon-set">
                <CommentIcon props={{ itemID, fontSize: "large" }} />
                <span>{commentCount}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
