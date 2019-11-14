import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialised;
    background-color: #4fbfa5;
  }

  body, input, button, a {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    box-shadow: inset -2px -7px 11px rgba(80, 92, 51, 0.17);
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
