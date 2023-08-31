import { createGlobalStyle } from "styled-components";
import eina01font from "../Utils/Eina01.woff";
import eina01fontbold from "../Utils/Eina01-Bold.woff";

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Eina01";
      font-style: normal;
      font-weight: normal;
      src: local("Eina01"),
        url(${eina01font}) format("woff");
    }

    @font-face {
      font-family: "Eina01bold";
      font-style: normal;
      font-weight: normal;
      src: local("Eina01"),
        url(${eina01fontbold}) format("woff");
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
      scroll-behavior: smooth;
    }

    :root {
      @media (min-width: ${({ theme }) =>
        theme.breakpoints.smallmobile.breakpoint}) {
        font-size: 1em;
      }
      @media (min-width: ${({ theme }) =>
        theme.breakpoints.mobile.breakpoint}) {
          font-size: 1.1em;
      }
      @media (min-width: ${({ theme }) =>
        theme.breakpoints.tablet.breakpoint}) {
          font-size: 1.2em;
      }
      @media (min-width: ${({ theme }) =>
        theme.breakpoints.mediumpc.breakpoint}) {
          font-size: 1.3em;
      }
      @media (min-width: ${({ theme }) =>
        theme.breakpoints.largepc.breakpoint}) {
          font-size: 1.4em;
      }
      @media (min-width: ${({ theme }) =>
        theme.breakpoints.fullhd.breakpoint}) {
          font-size: 1.6em;
      }
      @media (min-width: ${({ theme }) =>
        theme.breakpoints.quadhd.breakpoint}) {
          font-size: 2.3em;
      }
      @media (min-width: ${({ theme }) =>
        theme.breakpoints.ultrahd.breakpoint}) {
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

    @keyframes scrollbuttonanimation {
      0% {
        opacity: 0.5;
        transform: translateY(-10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes firstloader {
      0% {
        visibility: visible;
      }
      20% {
        visibility: visible;
      }
      40% {
        visibility: visible;
      }
      60% {
        visibility: visible;
      }
      80% {
        visibility: hidden;
      }
      100% {
        visibility: hidden;
      }
    }
    @keyframes secoundloader {
      0% {
        visibility: hidden;
      }
      20% {
        visibility: hidden;
      }
      40% {
        visibility: visible;
      }
      60% {
        visibility: visible;
      }
      80% {
        visibility: hidden;
      }
      100% {
        visibility: hidden;
      }
    }
    @keyframes thirdloader {
      0% {
        visibility: hidden;
      }
      20% {
        visibility: hidden;
      }
      40% {
        visibility: hidden;
      }
      60% {
        visibility: visible;
      }
      80% {
        visibility: hidden;
      }
      100% {
        visibility: hidden;
      }
    }
    @keyframes onload {
      0% {
        clip-path: polygon(
          0% 100%,
          11.71% 100%,
          18.7% 100%,
          26.56% 100%,
          35.03% 100%,
          41.09% 100%,
          54.67% 100%,
          60.3% 100%,
          65.69% 100%,
          70.69% 100%,
          75.81% 100%,
          79.87% 100%,
          84.09% 100%,
          88.44% 100%,
          92.72% 100%,
          96.53% 100%,
          100% 100%,
          100% 0%,
          0% 0%
        );
      }
      70% {
        clip-path: polygon(
          0% 44.47%,
          11.71% 27.5%,
          18.7% 17.71%,
          26.56% 9.52%,
          35.03% 3.49%,
          41.09% 0%,
          54.67% 0%,
          60.3% 3.49%,
          65.69% 7.95%,
          70.69% 13.29%,
          75.81% 18.11%,
          79.87% 21.6%,
          84.09% 23.63%,
          88.44% 24.37%,
          92.72% 23.63%,
          96.53% 20.39%,
          100% 15.83%,
          100% 0%,
          0% 0%
        );
      }
      99% {
        clip-path: polygon(
          0% 0%,
          11.71% 0%,
          18.7% 0%,
          26.56% 0%,
          35.03% 0%,
          41.09% 0%,
          54.67% 0%,
          60.3% 0%,
          65.69% 0%,
          70.69% 0%,
          75.81% 0%,
          79.87% 0%,
          84.09% 0%,
          88.44% 0%,
          92.72% 0%,
          96.53% 0%,
          100% 0%,
          100% 0%,
          0% 0%
        );
      }
      100% {
        display: none;
      }
    }
`;
