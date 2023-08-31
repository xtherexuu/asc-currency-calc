import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  grid-area: result;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextResult = styled.p`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    font-size: 1.05rem;
  }
`;

export const NumberResult = styled.p`
  display: inline-block;
  text-align: center;
  font-size: 2rem;
  color: white;
  border-bottom: 2px solid #9d26c8;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.breakpoint}) {
    border-bottom: 3px solid #9d26c8;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.largepc.breakpoint}) {
    border-bottom: 4px solid #9d26c8;
  }
`;

export const CurrencySpan = styled.span`
  font-size: 1.2rem;
  ${({ text }) =>
    text &&
    css`
      font-size: 0.8rem;
      @media (max-width: ${({ theme }) =>
          theme.breakpoints.mobile.breakpoint}) {
        font-size: 0.7rem;
      }
    `}
`;

export const BoldCurrencySpan = styled(CurrencySpan)`
  font-family: Eina01bold;
  font-weight: bold;
  color: #9d26c8;
`;

export const AmountSpan = styled.span`
  ${({ text }) =>
    text &&
    css`
      font-size: 1.25rem;
      @media (max-width: ${({ theme }) =>
          theme.breakpoints.mobile.breakpoint}) {
        font-size: 1.1rem;
      }
    `}
`;

export const ResultSpan = styled(AmountSpan)`
  font-family: Eina01bold;
  font-weight: bold;
  color: #9d26c8;
`;
