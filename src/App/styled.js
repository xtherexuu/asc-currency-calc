import styled from "styled-components";

export const SectionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  @media (width > ${({ theme }) => theme.breakpoints.smallmobile.breakpoint}) {
    grid-row-gap: 60px;
  }
  @media (width > ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    grid-row-gap: 70px;
  }
  @media (width > ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
    grid-row-gap: 80px;
  }
`;
