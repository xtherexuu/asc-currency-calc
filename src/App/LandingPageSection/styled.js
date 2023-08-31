import styled from "styled-components";
import galaxybg from "../../Utils/galaxybg2000.png";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background-image: url("${galaxybg}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  padding: 30px 30px 50px 30px;
  @media (min-width: ${({ theme }) =>
      theme.breakpoints.smallmobile.breakpoint}) {
    min-height: calc(100vh - 50px);
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    align-content: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    min-height: calc(100vh - 60px);

    justify-content: center;
    justify-items: center;
    grid-template-columns: 75%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.largepc.breakpoint}) {
    min-height: calc(100vh - 70px);
  }
  @media (width > ${({ theme }) => theme.breakpoints.quadhd.breakpoint}) {
    min-height: calc(100vh - 90px);
  }
  @media (width > ${({ theme }) => theme.breakpoints.ultrahd.breakpoint}) {
    min-height: calc(100vh - 110px);
  }
`;

export const TextContainer = styled.article`
  color: white;
  @media (min-width: ${({ theme }) =>
      theme.breakpoints.smallmobile.breakpoint}) {
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    text-align: center;
  }
`;

export const Heading = styled.h2`
  font-weight: bold;
  margin: 0 0 15px 0;
  padding: 0;
  text-shadow: 0 0 5px black;
  font-size: 1.2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.fullhd.breakpoint}) {
    margin-bottom: 30px;
  }
`;

export const Text = styled.p`
  margin: 0 0 15px 0;
  text-shadow: 0 0 5px black;
  font-size: 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.fullhd.breakpoint}) {
    margin-bottom: 30px;
  }
`;

export const ImageLogo = styled.img`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    max-width: 275px;
  }
`;

export const ScrollButton = styled.a`
  width: 30px;
  height: 19px;
  background-color: transparent;
  position: absolute;
  border: none;
  outline: none;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  color: white;
  text-decoration: none;
  & > * {
    font-size: 0.8rem;
  }
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakpoints.fullhd.breakpoint}) {
    width: 40px;
    height: 25px;
    bottom: 8px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.quadhd.breakpoint}) {
    width: 60px;
    height: 37.5px;
    bottom: 10px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.ultrahd.breakpoint}) {
    width: 80px;
    height: 50px;
    bottom: 20px;
  }
`;

export const ScrollIcon = styled.img`
  animation-name: scrollbuttonanimation;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  color: white;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
