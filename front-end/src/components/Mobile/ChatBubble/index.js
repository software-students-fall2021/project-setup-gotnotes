import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const ChatBubble = ({ props }) => {
  const { message, userID } = props;

  const [isUserCurrentUser, setIsUserCurrentUser] = useState(false);

  useEffect(() => {
    //I don't know whether this field actually exists...
    message.userID == userID
      ? setIsUserCurrentUser(true)
      : setIsUserCurrentUser(false);
  }, []);

  return (
    <div className={`chat-bubble ${isUserCurrentUser ? "right" : "left"}`}>
      <div>{/* add the messages.userphoto using getAvatar url component*/}</div>
      <div>{/* add the message text iteself*/}</div>
    </div>
  );
};

/**
 * .chat-bubble{
 *     margin blah
 * display blah
 *
 *  .right{
 *        align the message right somehow
 *        and make it background blue
 * }
 *
 * .left{
 *         align the message left somehow
 *        and make it background gray
 *
 * }
 *
 * }
 */

// class ChatBubble extends Component {
//   state = {
//     newMessage: "",
//   };

//   getConversations(messages) {
//     if (messages == undefined) {
//       return;
//     }

//     const listItems = messages.map((message, index) => {
//       let bubbleClass = "me";
//       let bubbleDirection = "";

//       if (message.type === 0) {
//         bubbleClass = "you";
//         bubbleDirection = "bubble-direction-reverse";
//       }
//       return (
//         <div className={`bubble-container ${bubbleDirection}`} key={index}>
//           <img className={`img-circle`} src={message.image} />
//           <div className={`bubble ${bubbleClass}`}>{message.text}</div>
//         </div>
//       );
//     });
//     return listItems;
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const {
//       props: { onNewMessage },
//       state: { newMessage },
//     } = this;

//     if (onNewMessage && newMessage) {
//       onNewMessage(newMessage);
//     }

//     this.setState({
//       newMessage: "",
//     });
//   };

//   handleInputChange = (e) =>
//     this.setState({
//       newMessage: e.target.value,
//     });

//   render() {
//     const {
//       props: { messages },
//       state: { newMessage },
//     } = this;
//     const chatList = this.getConversations(messages);

//     return (
//       <div className="chats">
//         <div className="chat-list">{chatList}</div>
//         <form className="new-message" onSubmit={this.handleSubmit}>
//           <input
//             value={newMessage}
//             placeholder="Write a new message"
//             onChange={this.handleInputChange}
//             className="new-message-input"
//           />
//         </form>
//       </div>
//     );
//   }
// }

// ChatBubble.propTypes = {
//   messages: PropTypes.array.isRequired,
//   onNewMessage: PropTypes.func.isRequired,
// };

export default ChatBubble;
