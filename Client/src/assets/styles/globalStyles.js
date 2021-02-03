import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #3c484e;
    font-family: 'Open Sans', sans-serif;
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`