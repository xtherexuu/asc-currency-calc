import React from "react";
import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 10px 0px 10px 10px;
  }

  ${({ data }) =>
    data &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: none;
      }
    `}
`;

export const Title = styled.h1`
  font-family: "Grinched Regular", sans-serif;
  font-size: 3rem;
  padding: 0;
  margin: 0 20px;
  color: ${({ theme }) => theme.colors.fontColor};
  transition: color 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 2rem;
    margin: 0 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largepc}px) {
    font-size: 4.5rem;
  }
`;

export const Span = styled.span`
  font-family: "Grinched Regular", sans-serif;
  color: #fccd2a;
`;

export const TitleImage = styled.img`
  width: 85px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 50px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largepc}px) {
    width: 120px;
  }
`;

export const Date = styled.p`
  font-size: 1.25rem;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.fontColor};
  transition: color 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largepc}px) {
    font-size: 1.5rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    justify-content: center;
  }

  ${({ hamburgermenu }) =>
    hamburgermenu &&
    css`
      margin-right: 10px;
      @media (min-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: none;
      }
    `}
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

export const MenuLine = styled.div`
  width: 35px;
  height: 4px;
  margin: 5px 0;
  border-radius: 5px;
  transition: transform 0.5s;
  background-color: #${({ theme }) => theme.colors.mainColor};

  ${({ isclicked }) =>
    isclicked &&
    css`
      ${({ topline }) =>
        topline &&
        css`
          transform: translate(5px, 6.5px) rotate(-45deg);
        `}
      ${({ bottomline }) =>
        bottomline &&
        css`
          transform: translate(5px, -6.5px) rotate(45deg);
        `}
    `}
`;
