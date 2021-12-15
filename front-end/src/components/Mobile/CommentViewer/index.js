import React, { useContext, useEffect, useState } from "react";
import "./styles.scss";

import { useQuery } from "react-query";

import { fetchCommentsByFileId } from "../../../services/SearchTabServices/FetchCalls";
//components
import Comment from "../Comment";
import { GlobalContext } from "../../../context/provider";

const CommentViewer = ({ props }) => {
  const { fileId } = props;
  const { set_comment_count } = useContext(GlobalContext);
  const { data, error, isError, isLoading } = useQuery(
    ["comments", fileId],
    fetchCommentsByFileId,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 24 * 60 * 60 * 1000,
    }
  );

  const [dataWithHierarchy, setDataWithHierarchy] = useState(null);

  useEffect(() => {
    data && set_comment_count(data.length);
    setDataWithHierarchy(
      data?.map((comment) => {
        comment.replies = data.filter(
          (reply) => reply.parentCommentId == comment._id
        );
        return comment;
      })
    );
  }, [data]);

  console.log("data with hierarchy: ", dataWithHierarchy);

  if (isError) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="comment-viewer-container">
      {dataWithHierarchy &&
        dataWithHierarchy.map(
          ({ _id, content, sharedBy, likes, shareDate, replies }) => (
            <>
              <Comment
                props={{
                  commentId: _id,
                  fileId,
                  content,
                  userData: sharedBy,
                  shareDate,
                  likes,
                  replies,
                }}
              />
              {replies && (
                <div className="replies">
                  {replies.map(
                    ({ _id, content, sharedBy, likes, shareDate }) => (
                      <Comment
                        props={{
                          commentId: _id,
                          fileId,
                          content,
                          userData: sharedBy,
                          shareDate,
                          likes,
                        }}
                      />
                    )
                  )}
                </div>
              )}
            </>
          )
        )}
    </div>
  );
};

export default CommentViewer;
