import React from 'react';
//react dom
import ReactDOM from 'react-dom';
//react-router-dom
import { BrowserRouter } from "react-router-dom";

import App from './App';

//provider makes store available around entire app
ReactDOM.render(
  <React.StrictMode>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

