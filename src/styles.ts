import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import InterRegularWoff from './fonts/inter-regular.woff';
import InterRegularWoff2 from './fonts/inter-regular.woff2';
import InterSemiboldWoff from './fonts/inter-semibold.woff';
import InterSemiboldWoff2 from './fonts/inter-semibold.woff2';

export default createGlobalStyle`
  ${normalize}

  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: "Inter";
    font-display: swap;
    src:
      url(${InterRegularWoff2}) format("woff2"),
      url(${InterRegularWoff}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 500;
    font-family: "Inter";
    font-display: swap;
    src:
      url(${InterSemiboldWoff2}) format("woff2"),
      url(${InterSemiboldWoff}) format("woff");
  }

  :root {
    --color-accent: #273b69;
    --color-accent-secondary: #e5eaf4;
    --color-text: #000000;
    --color-text-secondary: #fefefe;
    --font-inter: "Inter", Arial, sans-serif;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  html {
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.4;
    font-family: var(--font-inter);
    color: #000000;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    width: 100%;
    height: 100%;

    background-color: #ffffff;
  }

  a {
    color: #000000;
    text-decoration: none;
  }

  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  textarea {
    resize: none;
  }

  input:-webkit-autofill {
    box-shadow: inset 0 0 0 1000px #ffffff;

    -webkit-text-fill-color: #000000;
  }

  // firefox placeholder \ invalid fix + ios bdrs
  input,
  textarea {
    border-radius: 0;

    &::placeholder {
      opacity: 1;
    }

    &:invalid {
      box-shadow: none;
    }
  }

  select {
    border-radius: 0;
  }

  // chrome search X removal
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    appearance: none;
  }

  // input[number] arrows removal
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;

    appearance: none;
  }

  input[type="number"] {
    appearance: textfield;
  }

  // ios button \ inputs reset
  select,
  textarea,
  input:matches([type="email"],
    [type="number"],
    [type="password"],
    [type="search"],
    [type="tel"],
    [type="text"],
    [type="url"]) {
    appearance: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: none;
  }
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
