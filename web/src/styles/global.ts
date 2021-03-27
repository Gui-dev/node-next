import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body {
    font-size: 62.5%;
    font-family: 'Inter', sans-serif;
    background-color: #F2F3F5;
    color: #666;
  }

  input, textarea, button {
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
// font-family: 'Rajdhani', sans-serif;
