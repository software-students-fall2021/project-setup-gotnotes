import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import ChatBubble from "../../../components/Mobile/ChatBubble/index";
import { MessageInput } from "../../../components/Mobile/MessageInput";
import UserDataViewer from "../../../components/Mobile/UserDataViewer";

const image =
  "http://www.bradfordwhite.com/sites/default/files/images/corporate_imgs/iStock_000012107870XSmall.jpg";

//make it look like mongo db, or the mock data
//maybe ask mark

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

const ChatMessages = ({ props }) => {
  //const [userInputState, setUserInputState] = useState("");

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

// class ChatMessages extends Component {
//   state = {
//     messages: [
//       {
//         type: 0,
//         image,
//         text: "Hello! Good Morning!",
//       },
//       {
//         type: 1,
//         image,
//         text: "Hello! Good Afternoon!",
//       },
//     ],
//   };

//   handleNewMessage = (text) =>
//     this.setState({
//       messages: this.state.messages.concat([
//         {
//           text,
//           type: 0,
//           image,
//         },
//       ]),
//     });

//   render() {
//     return (
//       <ChatBubble
//         messages={this.state.messages}
//         onNewMessage={this.handleNewMessage}
//       />
//       //   {
//       //     <div className="input-form">
//       //       <form
//       //         onSubmit={(e) => {
//       //           e.preventDefault();
//       //           editMessage(userInputState);
//       //           setUserInputState({
//       //             message: ""
//       //           });
//       //         }}
//       //       >
//       //         <input
//       //           type="text"
//       //           placeholder={""}
//       //           value={userInputState.message}
//       //           onChange={(e) =>
//       //             setUserInputState({
//       //               ...userInputState,
//       //               message: e.target.value,
//       //             })
//       //           }
//       //         />
//       //         <input type="submit" value="Type Message" />
//       //       </form>
//       //     </div>
//       //   }
//     );
//   }
// }

// /*ReactDOM.render(
//   <ChatMessages/>,
//   document.getElementById('root')
// );*/

export default ChatMessages;

/*import React from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/index.css";

const chatClient = StreamChat.getInstance("dz5f4d5kzrue");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibG9uZy1tb29uLTQiLCJleHAiOjE2MzUzNjgzMTl9.BOsGlN5gxaCa8yJEtxiuSaXpOA8WG-LMEFVqbtaCrDc";

chatClient.connectUser(
  {
    id: "long-moon-4",
    name: "long",
  },
  userToken
);

const channel = chatClient.channel("messaging", "custom_channel_id", {
  // add as many custom fields as you'd like
  name: "Talk about React",
  members: ["long-moon-4"],
});

const ChatApp = () => (
  <Chat client={chatClient} theme="messaging light">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default ChatApp;*/
