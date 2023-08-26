import styled from "styled-components";

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  grid-area: form;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 8.25px 5px;
  @media (min-width: ${({ theme }) => theme.breakpoints.quadhd.breakpoint}) {
    padding: 14.5px 10px;
  }
  border-radius: 5px;
  border: none;
  border-bottom: 2px solid #9d26c8;
  outline: none;
  text-align: center;
  font-weight: bold;
  &:focus {
    border-bottom-color: #c932ff;
  }
  &:hover {
    border-color: #c932ff;
  }
  &::placeholder {
    color: gray;
    font-weight: bold;
    text-align: center;
  }
`;

export const Select = styled(Input)`
  padding: 5px;
  @media (min-width: ${({ theme }) => theme.breakpoints.quadhd.breakpoint}) {
    padding: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 90%;
  padding: 9.25px 5px;
  @media (min-width: ${({ theme }) => theme.breakpoints.quadhd.breakpoint}) {
    padding: 15.5px 10px;
  }
  color: white;
  border-radius: 5px;
  border: none;
  background-color: #9d26c8;
  &:hover {
    background-color: #c932ff;
  }
`;

export const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
