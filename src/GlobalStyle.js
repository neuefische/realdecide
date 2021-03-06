import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  :root {
    --titelFont: "Alfa Slab One", cursive;
    --textFont: "Montserrat", sans-serif;
    --background-dark: purple;
    --background-subtle: #733ca7;
    --background-color: #310a6b;
    /* --background-color: #363439; */
    --foreground-color: white;
    --text-color: white;
    --action-background: #978cd2;
    --action-text: yellow;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    /* border: 1px solid black; */
  }
  *:focus {
    outline: none;
    box-shadow: 0 0 5px 3px var(--action-text);
  }

  html {
    font-family: var(--textFont);
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--textFont);
    background-color: rebeccapurple;
  }

  h1,
  h2,
  h3 {
    font-family: var(--titelFont);
    color: var(--text-color);
    letter-spacing: 2px;
    font-weight: 100;
    text-shadow: 0 0 5px var(--background-color);
  }
  h2 {
    margin: 1rem auto 0.5rem;
  }

  #root {
    width: 100%;
  }

  img {
  width: 100px;
  height: 100px;
}

.handleError {
  height: 3rem;
  padding: 0.5rem 0;
  margin-top: 1rem;
  text-align: center;
  background: red;
  color: white;
}

  .container {
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    justify-content: center;
  }

  .main {
    width: 100%;
    max-width: 750px;
    padding: 0 1rem;
    text-align: center;
    justify-self: center;
  }

  footer {
    width: 100%;
    padding: 1rem 0 0.5rem;
    display: flex;
    align-items: center;
  }

  .unMarkable {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -o-user-select: none;
  }

  *:focus {
    outline: none;
    box-shadow: 0 0 5px 3px var(--action-text);
  }
  summary::-webkit-details-marker {
    color: rebeccapurple;
  }
`;

export default GlobalStyle;
