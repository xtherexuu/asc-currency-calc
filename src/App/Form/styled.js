import styled from "styled-components";

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 7.5px 5px;
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
`;

export const Button = styled.button`
  width: 90%;
  padding: 7.5px 5px;
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
