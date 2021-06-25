import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  body {
  background-color:${window.location.pathname !== '/login' || window.location.pathname !== '/registro' ? '#F2F2F2' : '#ebebeb'};
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
  }

  #root {
    overflow-x: hidden;
    min-height: 100vh;
  }
  `
