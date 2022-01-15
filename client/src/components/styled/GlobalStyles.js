import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* { /* Everything in here is Global (thus the asterisk)*/
    margin: 0;
}

body {
  font-family: "Times New Roman", 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export default GlobalStyle;