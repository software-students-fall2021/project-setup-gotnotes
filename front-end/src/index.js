import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { GlobalStoreProvider } from "./context/provider";

import { App } from "./App";

//react-query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

export const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalStoreProvider>
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
