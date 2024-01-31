import React, { useContext } from "react";
import "./styles.scss";

import { GlobalContext } from "../../../context/provider";
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
    fileDownloads,
  } = props;
  const {
    globalState: { commentCount },
  } = useContext(GlobalContext);

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
          <LikeIcon
            props={{ fileId: fileID, likes: fileLikes, type: "file", fontSize: "large" }}
          />
          <span>{fileLikes.length}</span>
        </div>
        <div className="icon-set">
          <DislikeIcon
            props={{
              fileId: fileID,
              dislikes: fileDislikes,
              type: "file",
              fontSize: "large",
            }}
          />
          <span>{fileDislikes.length}</span>
        </div>
        <div className="icon-set">
          <CommentIcon props={{ itemID: fileID, fontSize: "large" }} />
          <span>{commentCount}</span>
        </div>
        <div className="icon-set">
          <DownloadIcon props={{ itemID: fileID, fontSize: "large" }} />
          <span>{fileDownloads}</span>
        </div>
      </div>
    </div>
  );
};
