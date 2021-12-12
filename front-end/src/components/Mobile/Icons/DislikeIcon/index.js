import React, { useState, useEffect, useContext } from "react";

import "./styles.scss";

import { useMutation } from "react-query";
import { queryClient } from "../../../../App";

import { ThumbDown, ThumbDownOutlined } from "@mui/icons-material";
import { GlobalContext } from "../../../../context/provider";
import {
  postLikeDislikeFile,
  postLikeDislikeComment,
} from "./../../../../services/SearchTabServices/FetchCalls";

export const DislikeIcon = ({ props }) => {
  //TODO gotta refactor this logic out to a helper function later
  const {
    globalState: { currentUser, userToken },
    set_error,
  } = useContext(GlobalContext);

  const [isDisliked, setIsDisliked] = useState(0);
  const { commentId, fileId, likes, fontSize, type } = props;

  useEffect(() => {
    likes?.includes(currentUser?._id) ? setIsDisliked(1) : setIsDisliked(0);
  }, [currentUser]);

  const dislikeFile = useMutation(
    ({ fileId, likeDislike, type, userToken }) => {
      postLikeDislikeFile(fileId, likeDislike, type, userToken);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["file", fileId]);
      },
    }
  );
  const dislikeComment = useMutation(
    ({ commentId, likeDislike, type, userToken }) =>
      postLikeDislikeComment(commentId, likeDislike, type, userToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", fileId]);
      },
    }
  );

  const handleClick = () => {
    if (!currentUser) {
      set_error("You Must Be Logged in");
    } else if (type == "file") {
      const actionType = isDisliked ? "remove" : "add";
      dislikeFile.mutate({
        fileId,
        likeDislike: "dislike",
        type: actionType,
        userToken,
      });
    } else if (type == "comment") {
      const actionType = isDisliked ? "remove" : "add";
      dislikeComment.mutate({
        commentId,
        likeDislike: "dislike",
        type: actionType,
        userToken,
      });
    }
  };
  return (
    <div
      className="notificationBell"
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      {isDisliked ? (
        <ThumbDown fontSize={fontSize} />
      ) : (
        <ThumbDownOutlined fontSize={fontSize} />
      )}
    </div>
  );
};
