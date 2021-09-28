import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    html, body {
      font-family: "Open Sans", "sans";
      scrollbar-width: none;
    }

    body {
      font-size: 1rem;
      line-height: 1.6;
      height: auto;
      min-height: 100%;
      margin: 0;
      background-color: #e5e5e5;
    }

    section {
      display: block;
      position: relative;
    }
`;
