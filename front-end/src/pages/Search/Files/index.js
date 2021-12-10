import React from "react";
import { likeDislikeFile } from "../../../services/SearchTabServices/FileInteractionHandler";
import {useQuery} from "react-query"
import axios from "axios";

import "./styles.scss";
//import { mockFileData } from "../../../assets/mocks/mockData";

const fetchAllFiles = async () => {
  const {data} = await axios.get('localhost:4000/files')
  return data
} 

export const Files = ({ ViewComponent, activeClass }) => {

  const {data, error, isLoading,isError} = useQuery("files", fetchAllFiles)

  return (
    <div className={activeClass === "grid" ? "files grid" : "files"}>
      {data.map(
        ({
          _id: itemID,
          name: itemName,
          uri: itemLogoPath,
          itemType,
          type,
          likes,
          dislikes,
        }) => (
          <ViewComponent
            key={itemID}
            props={{
              itemID,
              itemName,
              itemLogoPath,
              itemType,
              fileType: type,
              likeCount: likes.length,
              commentCount: 0,
              dislikeCount: dislikes.length,
            }}
          />
        )
      )}
    </div>
  );
};
