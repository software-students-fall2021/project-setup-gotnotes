import React from "react";
import "./styles.scss";

//components
import UserDataViewer from "../UserDataViewer";

//icons
import { LikeIcon } from "../Icons/LikeIcon";
import { DislikeIcon } from "../Icons/DislikeIcon";
import { CommentIcon } from "../Icons/CommentIcon";
import { DownloadIcon } from "../Icons/DownloadIcon";

export const FileData = ({ props }) => {
  const {
    fileID,
    fileShareDate,
    fileSharedBy,
    fileLikes,
    fileDislikes,
    fileCommentsCount,
    fileDownloads,
  } = props;

  return (
    <div className="file-data-container">
      <div className="user-share-data">
        <UserDataViewer
          props={{
            userData: fileSharedBy,
            shareDate: fileShareDate,
            avatarSize: "med",
          }}
        />
      </div>

      <div className="file-interaction-data">
        <div className="icon-set">
          <LikeIcon props={{ itemID: fileID, fontSize: "large" }} />
          <span>{fileLikes}</span>
        </div>
        <div className="icon-set">
          <DislikeIcon props={{ itemID: fileID, fontSize: "large" }} />
          <span>{fileDislikes}</span>
        </div>
        <div className="icon-set">
          <CommentIcon props={{ itemID: fileID, fontSize: "large" }} />
          <span>{fileCommentsCount}</span>
        </div>
        <div className="icon-set">
          <DownloadIcon props={{ itemID: fileID, fontSize: "large" }} />
          <span>{fileDownloads}</span>
        </div>
      </div>
    </div>
  );
};
