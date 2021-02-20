import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const insertionPoint = document.createElement("div");
insertionPoint.id = "insertion-point";
// document.body!.parentNode!.insertBefore(insertionPoint, document.body);
document.body.appendChild(insertionPoint);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  insertionPoint
);
