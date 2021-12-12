import React, { useContext } from "react";
import "./styles.scss";
import { GlobalContext } from "../../../context/provider";

const Error = () => {
  const {
    globalState: { error, modalErrorShown },
    clear_error
  } = useContext(GlobalContext);
  return modalErrorShown ? (
    <div className="error-modal" onClick={() => clear_error()}>
      {error}
    </div>
  ) : (
    <div className="error-modal hidden"></div>
  );
};

export default Error;
