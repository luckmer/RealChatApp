import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from "./styles/Global";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
    <GlobalStyle/>
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
