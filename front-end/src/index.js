import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { GlobalStoreProvider } from "./context/provider";

import { App } from "./App";

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
