import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";

export default createGlobalStyle`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    background-color: #ffb997;
    margin: 0; padding: 0;
  }

  body {
    margin: 0; padding: 0;
    font-family: sans-serif;
  }

  #react-root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

  a:link, a:visited {
  }

  a:hover, a:focus {
  }

  pre, code {
    max-width: 100%;
  }
`;

