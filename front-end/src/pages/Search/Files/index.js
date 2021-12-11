import React from "react";
import "./styles.scss";

import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

import { fetchSingleCourse } from "../../../services/SearchTabServices/FetchCalls";
import { likeDislikeFile } from "../../../services/SearchTabServices/FileInteractionHandler";

export const Files = ({ ViewComponent, activeClass }) => {
  const courseId = useLocation().pathname.split("/").pop();
  const { data, error, isError, isLoading } = useQuery(
    ["course", courseId],
    fetchSingleCourse
  );

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {error}</div>;

  return (
    <div className={activeClass === "grid" ? "files grid" : "files"}>
      {data.files.map(
        ({
          _id: itemID,
          name: itemName,
          itemLogoPath,
          type: fileType,
          likes,
          dislikes,
        }) => (
          <ViewComponent
            key={itemID}
            props={{
              itemID,
              itemName,
              itemLogoPath,
              itemType: "file",
              fileType,
              likeCount: likes.length,
              dislikeCount: dislikes.length,
              interactionHandler: likeDislikeFile,
            }}
          />
        )
      )}
    </div>
  );
};
