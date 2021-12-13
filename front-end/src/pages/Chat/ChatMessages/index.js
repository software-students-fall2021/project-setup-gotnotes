import React from "react";
import ChatBubble from "../../../components/Mobile/ChatBubble/index";
import { MessageInput } from "../../../components/Mobile/MessageInput";

const messages = [
  {
    sender: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. Earum itaque sed, adipisci officia excepturi harum temporibus dicta, exercitationem fuga natus incidunt iste.",
    dateSent: 1639364378188,
    likes: [2, 3],
  },
  {
    sender: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. Earum itaque sed, adipisci officia excepturi harum temporibus dicta, exercitationem fuga natus incidunt iste.",
    dateSent: 1639364378288,
    likes: [1, 4],
  },
  {
    sender: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. Earum itaque sed, adipisci officia excepturi harum temporibus dicta, exercitationem fuga natus incidunt iste.",
    dateSent: 1639364378488,
    likes: [],
  },
  {
    sender: 3,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. Earum itaque sed, adipisci officia excepturi harum temporibus dicta, exercitationem fuga natus incidunt iste.",
    dateSent: 1639364378688,
    likes: [4],
  },
  {
    sender: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. Earum itaque sed, adipisci officia excepturi harum temporibus dicta, exercitationem fuga natus incidunt iste.",
    dateSent: 1639364378888,
    likes: [],
  },
  {
    sender: 4,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. Earum itaque sed, adipisci officia excepturi harum temporibus dicta, exercitationem fuga natus incidunt iste.",
    dateSent: 1639364379088,
    likes: [],
  },
  {
    sender: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. Earum itaque sed, adipisci officia excepturi harum temporibus dicta, exercitationem fuga natus incidunt iste.",
    dateSent: 1639364379288,
    likes: [3],
  },
  {
    sender: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique quidem dolorem, placeat sunt iure maiores. Earum itaque sed, adipisci officia excepturi harum temporibus dicta, exercitationem fuga natus incidunt iste.",
    dateSent: 1639364379488,
    likes: [],
  },
];

const currentUser = { _id: 1 };

/*

{
    "sender": 456,
    "message": "hello2",
    "dateSent": 1639364378188,
    "likes": []
}

 */

export const ChatMessages = () => {
  return (
    <div className="chat-messages-container">
      <div className="chat-bubbles-container">
        {messages.map((message) => (
          <ChatBubble props={{ message, userID }} />
        ))}
      </div>
      <div className="message-input-container">
        <MessageInput />
      </div>
    </div>
  );
};
