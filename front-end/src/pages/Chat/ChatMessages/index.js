import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChatBubble from "../../../components/Mobile/ChatBubble/index";


const image = 'http://www.bradfordwhite.com/sites/default/files/images/corporate_imgs/iStock_000012107870XSmall.jpg';

class ChatMessages extends Component {
  state = {
    messages: [
      {
        type: 0,
        image,
        text: "Hello! Good Morning!"
      },
      {
        type: 1,
        image,
        text: "Hello! Good Afternoon!"
      }
    ],
  };

  handleNewMessage = text =>
    this.setState({
      messages: this.state.messages.concat([{
        text,
        type: 0,
        image,
      }])
    });

  render() {
    return (
      <ChatBubble
        messages={this.state.messages}
        onNewMessage={this.handleNewMessage}
      />
    );
  }
}

/*ReactDOM.render(
  <ChatMessages/>,
  document.getElementById('root')
);*/

export default ChatMessages



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
