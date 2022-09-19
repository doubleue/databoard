import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  html {
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
    font-display: fallback;
    height: 100%;
  }

  body{
    box-sizing: border-box;
    height: 100%;
  }

  #__next {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

export default GlobalStyle;
