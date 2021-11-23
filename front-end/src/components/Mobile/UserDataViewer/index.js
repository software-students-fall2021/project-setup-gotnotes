import React from "react";

import "./styles.scss";

//components
import UserAvatar from "../UserAvatar";

const UserDataViewer = ({ props }) => {
  const { userData, shareDate, avatarSize } = props;
  const {
    // userID,
    userAvatarUrl,
    username,
  } = userData[0];

  return (
    <div className="user-data-viewer-container">
      <UserAvatar props={{ userAvatarUrl, size: avatarSize }} />

      <div
        className={`username-share-date-container ${shareDate && "share-date"}`}
      >
        <span className="username">{username}</span>
        {shareDate && <span className="file-share-date">{shareDate}</span>}
      </div>
    </div>
  );
};

export default UserDataViewer;
