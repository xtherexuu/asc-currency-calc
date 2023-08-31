import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  z-index: 3;
  width: 100px;
  height: 100px;
  top: 50px;
  right: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #370c88;
  gap: 20px;
  @media (min-width: ${({theme}) => theme.breakpoints.mobile.breakpoint}) {
    top: 60px;
  }
  ${({isclicked}) => isclicked && css`
    right: 0;
  `}
  transition: 0.5s;
  @media(min-width: ${({theme}) => theme.breakpoints.tablet.breakpoint}) {
    display: none;
  }
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
`;
