import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: #FFF;
    --background: #F2F3F5;
    --gray-line: #DCDDE0;
    --text: #666;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E8;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body {
    font-size: 62.5%;
    font-family: 'Inter', sans-serif;
    background-color: var(--background);
    color: var(--text);
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
