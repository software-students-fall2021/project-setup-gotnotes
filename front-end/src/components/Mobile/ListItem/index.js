import React, { useContext } from "react";
import "./styles.scss";

//imports
import { useHistory, useLocation } from "react-router-dom";

//icon
import { School } from "@mui/icons-material";
import { NotificationBell } from "../Icons/NotificationBell";
import { LikeIcon } from "../Icons/LikeIcon";
import { DislikeIcon } from "../Icons/DislikeIcon";
import { CommentIcon } from "../Icons/CommentIcon";
import { GlobalContext } from "../../../context/provider";

export const ListItem = ({ props }) => {
  const {set_current_course, set_current_uni} = useContext(GlobalContext)
  const {
    itemId,
    itemName,
    itemLogoPath,
    itemType,
    fileType,
    subscribed,
    courses,
    likes,
    commentCount,
    dislikes,
  } = props;

  const history = useHistory();
  const { pathname } = useLocation();

  const handleClick = () => {
    history.push(`${pathname}/${itemId}`)
    if(itemType === "uni") set_current_uni(itemId, itemName)
    if(itemType === "course") set_current_course(itemId, itemName)
  };

  return (
    <div className="list-item" onClick={() => handleClick()}>
      <div className="img-container">
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

      <div className="item-name-container">
        <span className="list-item-name">{itemName}</span>
      </div>

      <div className="info-container">
        <div
          className={`info${
            itemType === "uni" || itemType === "class" ? " single" : ""
          }`}
        >
          {itemType === "uni" && (
            <div className="icon-set">
              <School fontSize="large" />
              <span>{courses.length}</span>
            </div>
          )}
          {itemType === "course" && (
            <div className="icon-set">
              <NotificationBell props={{ itemId: itemId, fontSize: "large" }} />
              <span>{subscribed.length}</span>
            </div>
          )}
          {itemType === "file" && (
            <>
              <div className="icon-set">
                <LikeIcon props={{ itemId: itemId, fontSize: "large" }} />
                <span>{likes.length}</span>
              </div>
              <div className="icon-set">
                <DislikeIcon props={{ itemId: itemId, fontSize: "large" }} />
                <span>{dislikes.length}</span>
              </div>
              <div className="icon-set">
                <CommentIcon props={{ itemId: itemId, fontSize: "large" }} />
                <span>{commentCount}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
