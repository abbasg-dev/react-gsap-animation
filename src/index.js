import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    overflow-x: hidden;
    line-height: 1;
    font-family: -apple-system, BlinkMacSystemFont, «Segoe UI», «Roboto», «Oxygen»,
    «Ubuntu», «Cantarell», «Fira Sans», «Droid Sans», «Helvetica Neue»,
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    cursor: none;
    background-color: #ffffff;
  }
  * {
    min-height: 0;
    min-width: 0;
    box-sizing: border-box;
    -webkit-backface-visibility: hidden;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
