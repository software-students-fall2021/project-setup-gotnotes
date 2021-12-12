import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import ChatBubble from "../../../components/Mobile/ChatBubble/index";
import { MessageInput } from "../../../components/Mobile/MessageInput";
import UserDataViewer from "../../../components/Mobile/UserDataViewer";

const image =
  "http://www.bradfordwhite.com/sites/default/files/images/corporate_imgs/iStock_000012107870XSmall.jpg";

const messages = [
  {
    chatID: 1,
    chatContent: {
      message: "This is my test!",
      messageBy: 1,
      messageDate: "11/10/2020",
    },
  },
  {
    chatID: 2,
    chatContent: {
      message: "Right back at you",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 1,
    chatContent: {
      message: "yup",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 2,
    chatContent: {
      message: "yes",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 1,
    chatContent: {
      message: "im still testing",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 2,
    chatContent: {
      message: "this is a long test",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 1,
    chatContent: {
      message: "yes it is",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 2,
    chatContent: {
      message: "do you think we can scroll yet?",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 1,
    chatContent: {
      message: "yeah hopefully",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 2,
    chatContent: {
      message: "okay we need a few more",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 1,
    chatContent: {
      message: "were almost there",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 2,
    chatContent: {
      message: "maybe i should just make the bubbles bigger",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 1,
    chatContent: {
      message: "hmm yeah that moght work",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 2,
    chatContent: {
      message: "maybe i should just make the bubbles bigger",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 1,
    chatContent: {
      message: "hmm yeah that moght work",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 2,
    chatContent: {
      message: "maybe i should just make the bubbles bigger",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 1,
    chatContent: {
      message: "hmm yeah that moght work",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 2,
    chatContent: {
      message: "maybe i should just make the bubbles bigger",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
  {
    chatID: 1,
    chatContent: {
      message: "hmm yeah that moght work",
      messageBy: 2,
      messageDate: "11/11/2021",
    },
  },
];

const userID = 1;

export const ChatMessages = ({ props }) => {


  return (
    <div className="chat-messages-container">
      <div className="chat-bubbles-container">
        {messages.map((message) => (
          <ChatBubble props={{ message, userID }} />
        ))}
        <view>{console.log("My Message:", messages[0].chatContent.message)}</view>
      </div>
      <div className="message-input-container">
        <MessageInput></MessageInput>
      </div>
    </div>
  );
};