import React, { useState, useRef, useEffect, useCallback } from "react";
import "./styles.scss";

import useIsElementVisible from "./../../../Hooks/useIsElementVisible";
import PageTitle from "../../../components/Mobile/Navigations/PageTitle";
import ChatBubble from "../../../components/Mobile/ChatBubble/index";
import { MessageInput } from "../../../components/Mobile/MessageInput";

const initialMessages = [
  {
    sender: {
      senderId: 1,
      senderAvatarUrl:
        process.env.BASE_URL + "/api/files/uploads/51aca822eb87969fc2eef8ad6f405633.jpg",
      senderName: "John1998",
    },
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    dateSent: 1630904378188,
    likes: [2, 3],
  },
  {
    sender: {
      senderId: 2,
      senderAvatarUrl:
        process.env.BASE_URL + "/api/files/uploads/cf9fd311e90f8089b17029d68bfddc0d.jpg",
      senderName: "Kaan",
    },
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. ",
    dateSent: 1631364378288,
    likes: [1, 4],
  },
  {
    sender: {
      senderId: 3,
      senderAvatarUrl:
        process.env.BASE_URL + "/api/files/uploads/cf9fd311e90f8089b17029d68bfddc0d.jpg",
      senderName: "Julie",
    },
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. Earum itaque sed, adipisci officia excepturi harum temporibus dicta, exercitationem fuga natus incidunt iste.",
    dateSent: 1832364378488,
    likes: [],
  },
  {
    sender: {
      senderId: 4,
      senderAvatarUrl:
        process.env.BASE_URL + "/api/files/uploads/cf9fd311e90f8089b17029d68bfddc0d.jpg",
      senderName: "Matthew",
    },
    message: "Lorem ipsum dolor sit amet ",
    dateSent: 1635364378688,
    likes: [3],
  },
  {
    sender: {
      senderId: 5,
      senderAvatarUrl:
        process.env.BASE_URL + "/api/files/uploads/cf9fd311e90f8089b17029d68bfddc0d.jpg",
      senderName: "Mark",
    },
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. Earum itaque sed, adipisci officia excepturi harum temporibus dicta, exercitationem fuga natus incidunt iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. Earum itaque sed, adipisci officia excepturi harum temporibus dicta, exercitationem fuga natus incidunt iste.",
    dateSent: 1634364978888,
    likes: [],
  },
  {
    sender: {
      senderId: 4,
      senderAvatarUrl:
        process.env.BASE_URL + "/api/files/uploads/cf9fd311e90f8089b17029d68bfddc0d.jpg",
      senderName: "Julie",
    },
    message: "Lorem ipsum",
    dateSent: 1635364179088,
    likes: [5],
  },
  {
    sender: {
      senderId: 1,
      senderAvatarUrl:
        process.env.BASE_URL + "/api/files/uploads/51aca822eb87969fc2eef8ad6f405633.jpg",
      senderName: "John1998",
    },
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    dateSent: 1636064379092,
    likes: [2, 3],
  },
  {
    sender: {
      senderId: 1,
      senderAvatarUrl:
        process.env.BASE_URL + "/api/files/uploads/51aca822eb87969fc2eef8ad6f405633.jpg",
      senderName: "John1998",
    },
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    dateSent: 1637363479094,
    likes: [2, 3],
  },
  {
    sender: {
      senderId: 2,
      senderAvatarUrl:
        process.env.BASE_URL + "/api/files/uploads/cf9fd311e90f8089b17029d68bfddc0d.jpg",
      senderName: "Kaan",
    },
    message: "Lorem ipsum dolor sit amet ",
    dateSent: 1638367379288,
    likes: [3],
  },
  {
    sender: {
      senderId: 2,
      senderAvatarUrl:
        process.env.BASE_URL + "/api/files/uploads/cf9fd311e90f8089b17029d68bfddc0d.jpg",
      senderName: "Kaan",
    },
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. Earum itaque sed, adipisci officia",
    dateSent: 1639310379488,
    likes: [],
  },
];

//TODO message input needs to push content up when input area grows by rows
//TODO get rid of the text area mark on the bottom  right corner
export const ChatMessages = ({ title = "Course Chat" }) => {
  const messagesContainerRef = useRef(null);
  const [isEndOfMessagesVisible, messagesEndRef] = useIsElementVisible();
  const [messages, setMessages] = useState(initialMessages);

  //testting message generator
  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessages((x) => [
        ...x,
        initialMessages[parseInt(Math.random() * (initialMessages.length - 1))],
      ]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollIfEndVisibleHandler = useCallback(
    (event) => {
      const { target } = event;
      isEndOfMessagesVisible && target.scrollIntoView({ behavior: "smooth" });
    },
    [isEndOfMessagesVisible]
  );

  const initialScroll = useCallback(
    () => messagesEndRef.current.scrollIntoView({ behavior: "auto" }),
    []
  );

  useEffect(() => {
    initialScroll();
  }, [initialScroll]);

  useEffect(() => {
    const abortController = new AbortController();
    if (messagesContainerRef && isEndOfMessagesVisible) {
      messagesContainerRef.current.addEventListener(
        "DOMNodeInserted",
        scrollIfEndVisibleHandler,
        {
          signal: abortController.signal,
        }
      );
    }
    if (!isEndOfMessagesVisible) abortController.abort();

    return () => abortController.abort();
  }, [scrollIfEndVisibleHandler, isEndOfMessagesVisible]);

  return (
    <div className="message-component-container">
      <div className="sticky-top">
        <PageTitle
          props={{
            title: title,
            back: true,
          }}
        />
      </div>
      <div className="chat-messages-container">
        <div className="chat-bubbles-container" ref={messagesContainerRef}>
          {messages.map(({ message, sender, dateSent, likes }, idx) => {
            if (idx == messages.length - 1) {
              return (
                <>
                  <ChatBubble
                    key={dateSent}
                    props={{ message, sender, dateSent, likes }}
                  />
                </>
              );
            }
            return (
              <ChatBubble
                key={dateSent}
                props={{ message, sender, dateSent, likes }}
              />
            );
          })}
          <div ref={messagesEndRef}></div>
        </div>
      </div>
      <div className="sticky-bottom">
        <MessageInput initial="Type Message"/>
      </div>
    </div>
  );
};
