import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  // membungkus App dengan BrowserRouter untuk mengakses routing pada App
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
