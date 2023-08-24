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

    :root {
      @media (min-width: ${({theme}) => theme.breakpoints.smallmobile.breakpoint}) {
        font-size: 1em;
      }
      @media (min-width: ${({theme}) => theme.breakpoints.mobile.breakpoint}) {
          font-size: 1.1em;
      }
      @media (min-width: ${({theme}) => theme.breakpoints.tablet.breakpoint}) {
          font-size: 1.2em;
      }
      @media (min-width: ${({theme}) => theme.breakpoints.mediumpc.breakpoint}) {
          font-size: 1.3em;
      }
      @media (min-width: ${({theme}) => theme.breakpoints.largepc.breakpoint}) {
          font-size: 1.4em;
      }
      @media (min-width: ${({theme}) => theme.breakpoints.fullhd.breakpoint}) {
          font-size: 1.6em;
      }
      @media (min-width: ${({theme}) => theme.breakpoints.quadhd.breakpoint}) {
          font-size: 2.3em;
      }
      @media (min-width: ${({theme}) => theme.breakpoints.ultrahd.breakpoint}) {
          font-size: 3em;
      }
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
