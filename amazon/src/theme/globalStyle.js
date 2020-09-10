import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html, body, div#root {
    height: 100%;
    background-color:rgb(234, 237, 237);
    
  }
  
  p {
    font-weight: normal;
  }

  * {
    margin: 0;
  }

`
 
export default GlobalStyle;