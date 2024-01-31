import React from "react";
import UserAvatar from "../UserAvatar";
import "./styles.scss";

const currentUser = { _id: 1 };

const ChatBubble = ({ props }) => {
  const { message, sender, dateSent } = props;
  const { senderId, senderAvatarUrl, senderName } = sender;


  //Sun Dec 12 2021 21:59:38 GMT-0500 (EST)
  const dateString = new Date(dateSent).toString().split(" ")[4];
  //21:59:38
  const time = dateString.substring(0, 5);
  //21:59


  const myMessage = senderId.toString() === currentUser._id.toString();
  return (
    <div
      className={myMessage ? "message-container" : "message-container received"}
    >
      <div className={"user-avatar-and-text-container"}>
        {!myMessage && (
          <div className="avatar-container">
            <UserAvatar
              props={{ userAvatarUrl: senderAvatarUrl, size: "small" }}
            />
          </div>
        )}
        <div className={myMessage ? "message-data-container":"message-data-container received"}>
          {!myMessage && (
            <div className="sender-name-container">{senderName}</div>
          )}
          <div className={!myMessage ? "message received" : "message"}>
            {message}
          </div>
          <div className="date-container">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
