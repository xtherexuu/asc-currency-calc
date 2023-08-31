import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  z-index: 4;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  gap: 20px;
  ${({ isLoaded }) =>
    isLoaded &&
    css`
      animation: onload 1s both;
    `}
`;

export const LoaderElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const LoaderIcon = styled.img`
  width: 60px;
  ${({ satelite }) =>
    satelite &&
    css`
      transform: rotate(25deg);
    `}
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
    width: 90px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.fullhd.breakpoint}) {
    width: 110px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.ultrahd.breakpoint}) {
    width: 190px;
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const LoaderPiece = styled.img`
  ${({ firstPiece }) =>
    firstPiece &&
    css`
      height: 30px;
      animation-name: firstloader;
      animation-fill-mode: both;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      @media (min-width: ${({ theme }) =>
          theme.breakpoints.tablet.breakpoint}) {
        height: 45px;
      }
      @media (min-width: ${({ theme }) =>
          theme.breakpoints.fullhd.breakpoint}) {
        height: 55px;
      }
      @media (min-width: ${({ theme }) =>
          theme.breakpoints.ultrahd.breakpoint}) {
        height: 95px;
      }
    `}
  ${({ secoundPiece }) =>
    secoundPiece &&
    css`
      height: 45px;
      animation-name: secoundloader;
      animation-fill-mode: both;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      @media (min-width: ${({ theme }) =>
          theme.breakpoints.tablet.breakpoint}) {
        height: 67px;
      }
      @media (min-width: ${({ theme }) =>
          theme.breakpoints.fullhd.breakpoint}) {
        height: 82px;
      }
      @media (min-width: ${({ theme }) =>
          theme.breakpoints.ultrahd.breakpoint}) {
        height: 142.5px;
      }
    `}
  ${({ thirdPiece }) =>
    thirdPiece &&
    css`
      height: 60px;
      animation-name: thirdloader;
      animation-fill-mode: both;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      @media (min-width: ${({ theme }) =>
          theme.breakpoints.tablet.breakpoint}) {
        height: 90px;
      }
      @media (min-width: ${({ theme }) =>
          theme.breakpoints.fullhd.breakpoint}) {
        height: 110px;
      }
      @media (min-width: ${({ theme }) =>
          theme.breakpoints.ultrahd.breakpoint}) {
        height: 190px;
      }
    `}
`;

export const LoaderErrorPiece = styled.img`
  width: 40px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
    width: 60px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.fullhd.breakpoint}) {
    width: 73px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.ultrahd.breakpoint}) {
    width: 126px;
  }
`;

export const Information = styled.p`
  color: white;
  text-align: center;
  ${({ errorMessage }) =>
    errorMessage &&
    css`
      color: red;
      font-weight: bold;
    `}
`;
