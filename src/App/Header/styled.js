import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: grid;
  z-index: 100;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  @media (min-width: ${({ theme }) => theme.breakpoints.smallmobile.breakpoint}) {
    grid-template-columns: 50px 1fr 30px;
    padding: 5px 10px;
    grid-gap: 5px;
    text-align: center;
    font-size: 1.25rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    grid-template-columns: 60px 1fr 40px;
    font-size: 1.65rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
    grid-template-columns: 70px 1fr auto;
    padding: 5px 20px;
    text-align: left;
    grid-gap: 20px;
    font-size: 1.75rem;
  }
`;

export const HeaderHeading = styled.h1`
  color: white;
  margin: 0;
  padding: 0;
  font-size: inherit;
  text-align: inherit;
`;

export const HeaderImage = styled.img`
  width: 100%;
`;

export const HeaderMenuContainer = styled.nav`
  display: grid;
  border: none;
  background-color: transparent;
  padding: 0;
  @media (width > ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
    grid-template-columns: auto auto;
    grid-gap: 20px;
    ${({ hamburgermenu }) =>
      hamburgermenu &&
      css`
        display: none;
      `}
  }
  @media (width <= ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
    grid-template-columns: 1fr;
    grid-template-rows: 4px 4px 4px;
    grid-row-gap: 6px;
    ${({ normalmenu }) =>
      normalmenu &&
      css`
        display: none;
      `}
  }
`;

export const HamburgerMenuIconItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  ${({ isMenuButtonClicked }) =>
    isMenuButtonClicked &&
    css`
      ${({ topitem }) =>
        topitem &&
        css`
          transform: translate(0px, 10px) rotate(45deg);
        `}
      ${({ middleitem }) =>
        middleitem &&
        css`
          translate: 200% 0px;
        `}
    ${({ bottomitem }) =>
        bottomitem &&
        css`
          transform: translate(0px, -10px) rotate(-45deg);
        `}
    `}
  transition: transform 0.5s, translate 0.25s;
`;

export const NavElement = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  @media (width > ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
    font-size: 1.25rem;
  }
  @media (width > ${({ theme }) => theme.breakpoints.smallpc.breakpoint}) {
  }
  @media (width > ${({ theme }) => theme.breakpoints.mediumpc.breakpoint}) {
  }
  @media (width > ${({ theme }) => theme.breakpoints.largepc.breakpoint}) {
  }
`;
