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
  padding: 30px;
  @media (width > ${({ theme }) => theme.breakpoints.smallmobile.breakpoint}) {
    min-height: calc(100vh - 60px);
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    align-content: center;
  }
  @media (width > ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    min-height: calc(100vh - 70px);

    justify-content: center;
    justify-items: center;
    grid-template-columns: 75%;
  }
  @media (width > ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
    min-height: calc(100vh - 80px);
  }
  @media (width > ${({ theme }) => theme.breakpoints.smallpc.breakpoint}) {
  }
  @media (width > ${({ theme }) => theme.breakpoints.mediumpc.breakpoint}) {
  }
  @media (width > ${({ theme }) => theme.breakpoints.largepc.breakpoint}) {
  }
`;

export const TextContainer = styled.article`
  color: white;
  @media (width > ${({ theme }) => theme.breakpoints.smallmobile.breakpoint}) {
  }
  @media (width > ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    text-align: center;
  }
  @media (width > ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
  }
  @media (width > ${({ theme }) => theme.breakpoints.smallpc.breakpoint}) {
  }
  @media (width > ${({ theme }) => theme.breakpoints.mediumpc.breakpoint}) {
  }
  @media (width > ${({ theme }) => theme.breakpoints.largepc.breakpoint}) {
  }
`;

export const Heading = styled.h2`
  font-weight: bold;
  /* text-align: center; */
  margin: 0 0 15px 0;
  padding: 0;
  text-shadow: 0 0 5px black;
  @media (min-width: ${({theme}) => theme.breakpoints.smallpc.breakpoint}) {
    font-size: 1.65rem;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.mediumpc.breakpoint}) {
    font-size: 1.85rem;
  }
`;

export const Text = styled.p`
  margin: 0 0 15px 0;
  text-shadow: 0 0 5px black;
  font-size: 1.05rem;
  @media (min-width: ${({theme}) => theme.breakpoints.tablet.breakpoint}) {
    font-size: 1.10rem;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.smallpc.breakpoint}) {
    font-size: 1.25rem;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.mediumpc.breakpoint}) {
    font-size: 1.45rem;
  }
`;

export const ImageLogo = styled.img`
  width: 100%;
  @media (width > ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    max-width: 275px;
  }
`;


export const ScrollButton = styled.button`
  width: 40px;
  height: 25px;
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
  cursor: pointer;
`;

export const ScrollIcon = styled.img`
  color: white;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;