import React from "react"
import ClipLoader from "react-spinners/ClipLoader";

import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {

    return (
        <div className="loading-wrapper"> 
        <div className="loading-container">
        <div className="loading">
          <div className="item">
            <img src="./logo490.png" alt="loading-logo" />
          </div>
          <div className="circle" style={{animationDelay: "-3s"}}></div>
          <div className="circle" style={{animationDelay: "-2s"}}></div>
          <div className="circle" style={{animationDelay: "-1s"}}></div>
          <div className="circle" style={{animationDelay: "0s"}}></div>
        </div>
      </div>
      <h1>Signing you back in...</h1>
    </div>
    )
}

export default Loading;