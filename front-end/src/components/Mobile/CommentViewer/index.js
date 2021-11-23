import React from "react";
import "./styles.scss";

//components
import Comment from "../Comment";
//icons

const CommentViewer = ({ props }) => {
  const { fileComments } = props;
  return (
    <div className="comment-viewer-container">
      {fileComments.map(({ comment, user, likes, date, replies }) => (
        <>
          <Comment
            props={{
              comment,
              user,
              date,
              likes,
              replies,
            }}
          />
          {replies && (
            <div className="replies">
              {replies.map(({ comment, user, likes, date }) => (
                <Comment
                  props={{
                    comment,
                    user,
                    date,
                    likes,
                  }}
                />
              ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default CommentViewer;
