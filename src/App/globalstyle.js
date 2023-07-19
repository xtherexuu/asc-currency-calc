import { createGlobalStyle } from "styled-components";
import fontPath from "../Utils/GrinchedRegular.woff";

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Grinched Regular";
      font-style: normal;
      font-weight: normal;
      src: local("Grinched Regular"),
        url(${fontPath}) format("woff");
    }

    * {
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }

    html, ::after, ::before {
      box-sizing: inherit;
      overflow-x: hidden;
    }

    html {
      background-color: ${({ theme }) => theme.colors.backgroundMainColor};
      transition: background-color 0.25s;
    }
`;
