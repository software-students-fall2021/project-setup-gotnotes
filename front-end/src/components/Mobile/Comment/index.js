import React from "react";
import "./styles.scss";

//components
import UserDataViewer from "../UserDataViewer";

//icons
import { LikeIcon } from "../Icons/LikeIcon";
import { ReplyIcon } from "../Icons/ReplyIcon";

const Comment = ({ props }) => {
  const { fileId, commentId, content, userData, likes, shareDate, replies } = props;
  return (
    <div className="comment-container">
      <div className="comment-user-data-container">
        <UserDataViewer props={{ userData, shareDate, avatarSize: "small" }} />
      </div>
      <div className="comment">
        <span className="comment-text">{content}</span>
      </div>
      <div className="comment-interaction-data">
        <div className="icon-set">
          <LikeIcon props={{ commentId, fileId, likes:likes, type: "comment", fontSize: "large" }} />
          <span>{likes.length}</span>
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
