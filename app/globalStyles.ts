"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --base-font-size: 14px;
    --bg-color: #272B30;
    --text-color: #272b30;
    --border-color: #272B30;
    --hover-color: #d3d3d3;
    --panel-bg-color: #eee;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 1.5;
  }

  html,
  body {
    font-size: var(--base-font-size);
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
