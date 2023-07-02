import React from "react";
import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;
`;

export const Title = styled.h1`
  font-family: "Grinched Regular", sans-serif;
  font-size: 3rem;
  padding: 0;
  margin: 0 20px;
  color: ${({theme}) => theme.colors.fontColor};
`;

export const TitleImage = styled.img`
  width: 85px;
`;

export const Date = styled.p`
  font-size: 1.25rem;
  margin-right: 20px;
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
