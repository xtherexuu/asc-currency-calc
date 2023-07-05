import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.colors.backgroundMainColor};
  padding: 0 0 0 10px;
  margin: 0;
  border-left: 2px solid #${({ theme }) => theme.colors.mainColor};
  border-bottom: 2px solid #${({ theme }) => theme.colors.mainColor};
  transition: transform 0.5s, background-color 0.25s;
  transform: translateX(101%);

  ${({ isbuttonclicked }) =>
    isbuttonclicked &&
    css`
      transform: translateX(0);
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  transition: color 0.5s;
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const Date = styled.p`
  font-size: 1.25rem;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.fontColor};
  transition: color 0.5s;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  border: none;
`;

export const ButtonImage = styled.img`
  width: 40px;
  margin-bottom: 1px;
  transition: transform 0.5s;

  ${({ isclicked }) =>
    isclicked &&
    css`
      transform: translateY(-42px);
    `}
`;
