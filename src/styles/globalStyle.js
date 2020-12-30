import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
* {
  margin: 0;
  padding: 0;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; //1rem = 10px
  min-height: 100vh;
  width: 100vw;

}

body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  padding: 4rem;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: stretch;
  background-image: radial-gradient(#ccc, #58a75b);

  @media (max-width: 800px) {
  padding-right: 0;
  padding-left: 0;

  }
  #root {
      width: 100%;
      height: 100%;
      display: flex;
  align-items: center;
  justify-content: center;

  }
  
}

`;
