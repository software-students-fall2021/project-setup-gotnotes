import axios from "axios";
import React, { useState } from "react";
import "./styles.scss";

export const MessageInput = ({ props }) => {

  const chatID = props
  const [inputMessage, setInputMessage] = useState("")


  const [userChatID, setUserChatID] = useState(null)

  const onChange = event => {
    setInputMessage(event.target.value)
  }


  const handleSubmit = event => {
    event.preventDefault();
    console.log("text sent!")

    axios("http://localhost:4000/:chatID/newMessage", {
      method: "POST",
      data: {
        chatID: chatID
      }
    })
      .then((res) => setUserChatID(res.data[0]))
      .catch((err) => console.log(err));

    setInputMessage(event.target.value)
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
      
      <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder={"Type Message"}
          value={inputMessage}
          onChange={onChange}
        />
      </div>
      <input type="submit" value="Send" />
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
