import { createGlobalStyle } from "styled-components";

// createGlobalStyle digunakan untuk membuat style css berefek pada semua elemen yang ada

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 20px 40px;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }
  


`;