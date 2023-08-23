import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  @media (width > ${({ theme }) => theme.breakpoints.smallmobile.breakpoint}) {
    min-height: calc(100vh - 60px);
  }
  @media (width > ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    min-height: calc(100vh - 70px);
  }
  @media (width > ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
    min-height: calc(100vh - 80px);
  }
`;

export const TextSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 5px;
  padding: 5px;
  color: white;
`;

export const SectionHeading = styled.h2`
  margin: 0;
  justify-self: center;
  @media (width > ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
    font-size: 1.65rem;
  }
  @media (width > ${({ theme }) => theme.breakpoints.smallpc.breakpoint}) {
    font-size: 1.75rem;
  }
  @media (width > ${({ theme }) => theme.breakpoints.mediumpc.breakpoint}) {
    font-size: 1.85rem;
  }
`;

export const CalculatorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-row-gap: 20px;
  width: 90%;
  height: 50vh;
  border-radius: 20px;
  margin: 20px auto;
  background-color: #ffffff07;
  backdrop-filter: blur(4px);
`;

export const SpaceIcon = styled.img`
  position: absolute;
  z-index: -2;
  user-select: none;
  @media (width > ${({ theme }) => theme.breakpoints.smallmobile.breakpoint}) {
    width: 15%;
  }
  @media (width > ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    width: 10%;
  }
  @media (width > ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
    width: 8.5%;
  }
  @media (width > ${({ theme }) => theme.breakpoints.smallpc.breakpoint}) {
    width: 7%;
  }
  @media (width > ${({ theme }) => theme.breakpoints.mediumpc.breakpoint}) {
    width: 5%;
  }
  @media (width > ${({ theme }) => theme.breakpoints.largepc.breakpoint}) {
    width: 4%;
  }
  ${({ alonerocket1 }) =>
    alonerocket1 &&
    css`
      bottom: 15%;
      right: -20%;
      rotate: -85deg;
      animation-name: rocketAnimation;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.1, 0.49, 1, 0.6);
      z-index: -1;
    `}
  ${({ planet1 }) =>
    planet1 &&
    css`
      bottom: 20%;
      left: 15%;
      rotate: -85deg;
    `}
  ${({ satelite }) =>
    satelite &&
    css`
      top: 15%;
      right: 15%;
      rotate: -85deg;
    `}
    ${({ astronautwithrocket2 }) =>
    astronautwithrocket2 &&
    css`
      bottom: 5%;
      left: 55%;
      /* transform: translateX(-50%); */
      @media (width <= ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
        display: none;
      }
    `}
    ${({ planet3 }) =>
    planet3 &&
    css`
      left: 30%;
      top: 20%;
      @media (width <= ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
        display: none;
      }
    `}
    ${({ planet2 }) =>
    planet2 &&
    css`
      right: 1%;
      top: 55%;
      @media (width <= ${({ theme }) => theme.breakpoints.largepc.breakpoint}) {
        display: none;
      }
    `}
    ${({ astronautwithrocket1 }) =>
    astronautwithrocket1 &&
    css`
      bottom: 40%;
      left: 35%;
      @media (width <= ${({ theme }) => theme.breakpoints.largepc.breakpoint}) {
        display: none;
      }
    `}
`;
