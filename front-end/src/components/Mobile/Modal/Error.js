import React, { useContext } from "react";
import "./styles.scss";
import { GlobalContext } from "../../../context/provider";

const Error = () => {
  const {
    globalState: { error, errorType, modalErrorShown },
    clear_error,
  } = useContext(GlobalContext);
  return !modalErrorShown ? (
    <div className="error-modal-wrapper" onClick={() => clear_error()}>
      <div className="error-modal-container">
        <div className="error-message-container">

        </div>
      </div>
      File was uploaded successfully!
    </div>
  ) : (
    <div className="error-modal hidden"></div>
  );
};

export default Error;
