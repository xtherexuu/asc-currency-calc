import styled from "styled-components";

export const SectionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  @media (width > ${({ theme }) => theme.breakpoints.smallmobile.breakpoint}) {
    grid-row-gap: 50px;
  }
  @media (width > ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    grid-row-gap: 60px;
  }
  @media (width > ${({ theme }) => theme.breakpoints.largepc.breakpoint}) {
    grid-row-gap: 70px;
  }
  @media (width > ${({ theme }) => theme.breakpoints.quadhd.breakpoint}) {
    grid-row-gap: 90px;
  }
  @media (width > ${({ theme }) => theme.breakpoints.ultrahd.breakpoint}) {
    grid-row-gap: 110px;
  }
`;
