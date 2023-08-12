import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;
  gap: 20px;
  margin-bottom: 50px;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallpc}px) {
    justify-content: center;
  }
`;

export const Image = styled.img`
  max-width: 45%;
  position: sticky;
  top: 15vh;
  left: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallpc}px) {
    display: none;
  }
`;

export const Form = styled.form`
  width: 50%;
  box-shadow: 0 0 10px 5px gray;
  border-radius: 5px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallpc}px) {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 90%;
  }
`;

export const FormTitle = styled.h2`
  font-size: 1.75rem;
  margin: 0;
  padding: 0 0 20px 20px;
  color: ${({ theme }) => theme.colors.fontColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largepc}px) {
    font-size: 2.75rem;
  }
`;

export const Span = styled.span`
  color: #fccd2a;
`;

export const FormParagraph = styled.p`
  font-size: 1rem;
  margin: 0;
  padding: 0 40px 40px 20px;
  color: ${({ theme }) => theme.colors.fontColor};

  @media (min-width: ${({ theme }) => theme.breakpoints.largepc}px) {
    font-size: 1.5rem;
  }
`;

export const Result = styled.p`
  margin: 0 20px;
  border-bottom: #fccd2a solid 4px;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.fontColor};
  transition: color 0.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 1.25rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largepc}px) {
    font-size: 2.5rem;
  }
`;

export const FromAmount = styled.span`
  ${({ islabel }) =>
    islabel &&
    css`
      color: ${({ theme }) => theme.colors.fontColor};
      transition: color 0.5;
      @media (min-width: ${({ theme }) => theme.breakpoints.largepc}px) {
        font-size: 1.75rem;
      }
    `}
`;

export const ToAmount = styled.span`
  font-weight: 700;
`;

export const FromCurrency = styled(FromAmount)`
  font-size: 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.largepc}px) {
    font-size: 1.5rem;
  }
`;

export const ToCurrency = styled(ToAmount)`
  font-size: 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.largepc}px) {
    font-size: 1.5rem;
  }
`;

export const Cantor = styled.div`
  display: grid;
  grid-template-areas:
    "select1 select2"
    "input input"
    "butto b";
  grid-gap: 10px;
  margin: 40px 20px 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-areas:
      "select1"
      "select2"
      "input"
      "button";
  }
`;
export const Select = styled.select`
  ${({ fromcurrency }) =>
    fromcurrency &&
    css`
      grid-area: s1;
    `}

  ${({ tocurrency }) =>
    tocurrency &&
    css`
      grid-area: s2;
    `}

  padding: 5px;
  border: 2px solid gray;
  border-radius: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.fontColor};
  transition: color 0.5;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.largepc}px) {
    font-size: 1.75rem;
    padding: 9px;
  }
`;
export const Input = styled.input`
  grid-area: i;
  padding: 6px;
  border: 2px solid gray;
  border-radius: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.fontColor};
  transition: color 0.5;
  @media (min-width: ${({ theme }) => theme.breakpoints.largepc}px) {
    font-size: 1.75rem;
    padding: 10px;
  }
`;
export const Button = styled.button`
  grid-area: b;
  padding: 6px;
  border: none;
  border-radius: 5px;
  background-color: #${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.fontColor};
  transition: color 0.5;
  @media (min-width: ${({ theme }) => theme.breakpoints.largepc}px) {
    font-size: 1.75rem;
    padding: 10px;
  }
`;
