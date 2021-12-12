import React, { useState, useEffect, useContext } from "react";

import "./styles.scss";

import { useMutation } from "react-query";
import { queryClient } from "../../../../App";

import { ThumbUpOutlined, ThumbUp } from "@mui/icons-material";
import { GlobalContext } from "../../../../context/provider";
import { postLikeDislikeFile, postLikeComment } from "./../../../../services/SearchTabServices/FetchCalls";

export const LikeIcon = ({ props }) => {
  //TODO gotta refactor this logic out to a helper function later
  const {
    globalState: { currentUser, userToken },
    setError
  } = useContext(GlobalContext);

  const [isLiked, setIsLiked] = useState(0);
  const { commentId, fileId, likes, fontSize, type } = props;
  console.log("likeButton: ", props)

  useEffect(() => {
    likes?.includes(currentUser?._id) ? setIsLiked(1) : setIsLiked(0);
  }, [currentUser]);

  const likeFile = useMutation(
    ({ fileId, likeDislike, type, userToken }) => {
      postLikeDislikeFile(fileId, likeDislike, type, userToken);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["file", fileId]);
      },
    }
  );
  const likeComment = useMutation(({ commentId, type, userToken }) =>
    postLikeComment(commentId, type, userToken),
    {onSuccess: () => {
      queryClient.invalidateQueries(["comments", fileId]);
    }}
  );

  const handleClick = () => {
    if (!currentUser) {
      console.log("you must be logged in")
    } else if (type == "file") {
      const actionType = isLiked ? "remove" : "add";
      likeFile.mutate({fileId, likeDislike:"like", type: actionType, userToken});
    } else if (type == "comment") {
      const actionType = isLiked ? "remove" : "add";
      likeComment.mutate({commentId, type: actionType, userToken});
    }
  };
  return (
    <div className="notificationBell" onClick={() => handleClick()}>
      {isLiked ? (
        <ThumbUp fontSize={fontSize} />
      ) : (
        <ThumbUpOutlined fontSize={fontSize} />
      )}
    </div>
  );
};
