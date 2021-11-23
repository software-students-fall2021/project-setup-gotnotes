import React from "react";
import { likeDislikeFile } from "../../../services/SearchTabServices/FileInteractionHandler";

import "./styles.scss";
import { mockFileData } from "../../../assets/mocks/mockData";

export const Files = ({ ViewComponent, activeClass }) => {
  return (
    <div className={activeClass === "grid" ? "files grid" : "files"}>
      {mockFileData.map(
        ({
          itemID,
          itemName,
          itemLogoPath,
          itemType,
          fileType,
          likeCount,
          commentCount,
          dislikeCount,
        }) => (
          <ViewComponent
            key={itemID}
            props={{
              itemID,
              itemName,
              itemLogoPath,
              itemType,
              fileType,
              likeCount,
              commentCount,
              dislikeCount,
              interactionHandler: likeDislikeFile,
            }}
          />
        )
      )}
    </div>
  );
};
