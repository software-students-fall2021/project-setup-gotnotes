import React from "react";
import "./styles.scss";

//components
import UserDataViewer from "../UserDataViewer";

//icons
import { LikeIcon } from "../Icons/LikeIcon";
import { ReplyIcon } from "../Icons/ReplyIcon";

const Comment = ({ props }) => {
  const { comment, user, likes, date, replies } = props;
  return (
    <div className="comment-container">
      <div className="comment-user-data-container">
        <UserDataViewer
          props={{ userData: user, shareDate: date, avatarSize: "small" }}
        />
      </div>
      <div className="comment">
        <span className="comment-text">{comment}</span>
      </div>
      <div className="comment-interaction-data">
        <div className="icon-set">
          <LikeIcon props={{ itemID: 1, fontSize: "large" }} />
          <span>{likes}</span>
        </div>
        {replies && (
          <div className="icon-set">
            <ReplyIcon props={{ itemID: 1, fontSize: "large" }} />
            <span>{replies.length}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
