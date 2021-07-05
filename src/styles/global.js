import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
:root {
    --background: rgba(255,255,255,1.0);
    --backgroundGray: rgba(242, 242, 242, 1);
    --textGray: rgba(96, 96, 96, 1);
    
    --lightGreen: rgba(64, 217, 184, 1);
    --black: rgba(0,0,0,1.0);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 92.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    }
`;

export default Global;
