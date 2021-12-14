import React, { useContext } from "react";
import "./styles.scss";
import { GlobalContext } from "../../../context/provider";

const Error = () => {
  const {
    globalState: { error, modalErrorShown },
    clear_error,
  } = useContext(GlobalContext);

  const errorType = "error";
  return (
    <div
      className={`error-modal-wrapper ${errorType} ${
        modalErrorShown ? "" : "hidden"
      }`}
      onClick={() => clear_error()}
    >
      <div className={`error-modal-container ${errorType}`}>
        <div className={`error-message-container ${errorType}`}>
          File was uploaded successfully!
        </div>
      </div>
    </div>
  );
};

export default Error;
