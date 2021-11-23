import React from "react";

export const MessageInput = ({ props }) => {
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
  return (
    <div className="message-input-container">
      Message Input
      {/**
       * here we need an input element
       * and then a submit button
       * and the submit button should have a onClick function that
       * we need to define right above the return statement
       */}
    </div>
  );
};
