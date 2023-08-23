import { createGlobalStyle } from "styled-components";
import eina01font from "../Utils/Eina01.woff";

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Eina01";
      font-style: normal;
      font-weight: normal;
      src: local("Eina01"),
        url(${eina01font}) format("woff");
    }

    * {
      box-sizing: border-box;
      font-family: 'Eina01', sans-serif;
    }

    html, ::after, ::before {
      box-sizing: inherit;
    }

    html {
      overflow-x: hidden;
      background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
    }

    #tsparticles {
      height: 100%;
      width: 100%;
    }

    @keyframes rocketAnimation {
      0% {
        /* transform: translate(0, 0); */
      }
      100% {
        /* transform: translate(50vh, -140vw); */
        bottom: 85%;
        right: 120%;
      }
    }
`;
