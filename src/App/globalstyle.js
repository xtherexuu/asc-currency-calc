import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
