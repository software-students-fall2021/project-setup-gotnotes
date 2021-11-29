import axios from "axios";
import React, { useState } from "react";

export const MessageInput = ({ props }) => {

  const mockinputMessage = [
    {
      chatID: 1,
      chatContent:
        {
          message: "This is my test!",
          messageBy: 1,
          messageDate: "11/10/2020",
        }
    },
  ];

  const chatID = props
  const [inputMessage, setInputMessage] = useState({
    message: "",
    messageBy: chatID
  })

  const [userChatID, setUserChatID] = useState(null)

  const handleChange = event => {
    setInputMessage(event.target.value)
  }


  const handleSubmit = event => {
    event.preventDefault();

    axios("http://localhost:4000/:chatID/newMessage", {
      method: "POST",
      data: {
        chatID: chatID
      }
    })
      .then((res) => setUserChatID(res.data[0]))
      .catch((err) => console.log(err));
  }


  //TODO have an input field with two way binding
  //react input handleChange
  /**
   * const { chatID (we will have chatID and probably other props dereferenced here)} = props
   *
   * const handleChange = () => {
   * }
   *
   * const handleSubmit = () => {
   *    here we will do a post request to the relevant api endpoint: http://localhost:4000/:chatID/newMessage
   * }
   */

  //onclick function??
  return (
    <div className="message-input-container">
      Message 
      
      <form onSubmit={handleSubmit}>
      <div>
        <label>Input Message</label>
        <input
          type="message"
          name="message"
          placeholder="Type Message"
          onChange={handleChange}
          value={inputMessage}
        />
      </div>
      <button type="submit">
        Send
      </button>
    </form>
      {/**
       * here we need an input element
       * and then a submit button
       * and the submit button should have a onClick function that
       * we need to define right above the return statement
       */}
    </div>
  );
};
