import React, { useContext } from "react";
import "./styles.scss";

import { GlobalContext } from "../../../context/provider";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { fetchSingleCourse } from "../../../services/SearchTabServices/FetchCalls";
import { ListItem } from "../../../components/Mobile/ListItem";
import { GridItem } from "../../../components/Mobile/GridItem";

export const Files = () => {
  const {
    globalState: { currentLayout },
  } = useContext(GlobalContext);
  const { courseId } = useParams();
  const { data, error, isError, isLoading } = useQuery(
    ["course", courseId],
    fetchSingleCourse
  );

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {error}</div>;

  return (
    <div className={currentLayout === "grid" ? "files grid" : "files"}>
      {data.files.map(
        ({
          _id: itemId,
          name: itemName,
          itemLogoPath,
          type: fileType,
          likes,
          dislikes,
        }) =>
          currentLayout == "list" ? (
            <ListItem
              key={itemId}
              props={{
                itemId,
                itemName,
                itemLogoPath,
                itemType: "file",
                fileType,
                likeCount: likes.length,
                dislikeCount: dislikes.length,
              }}
            />
          ) : (
            <GridItem
              key={itemId}
              props={{
                itemId,
                itemName,
                itemLogoPath,
                itemType: "file",
                fileType,
                likeCount: likes.length,
                dislikeCount: dislikes.length,
              }}
            />
          )
      )}
    </div>
  );
};
