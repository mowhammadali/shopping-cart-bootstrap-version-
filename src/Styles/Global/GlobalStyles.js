import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none !important;
}

body {
  background-color: ${props => props.theme.bgPrimary};
  margin: 0;
  font-family: cursive , BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`