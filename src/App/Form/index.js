import { FormElement, Input, Select, Label, Button } from "./styled";

const Form = ({
  inputValue,
  setInputValue,
  fromSelectValue,
  setFromSelectValue,
  ToSelectValue,
  setToSelectValue,
}) => {
  return (
    <FormElement>
      <Label>
        Kwota:
        <Input
          value={inputValue}
          onChange={(e) => {
            setInputValue((value) => (value = e.target.value));
          }}
          placeholder="0.00"
        />
      </Label>
      <Label>
        Z waluty:
        <Select as="select">
          <option>
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </option>
          <option>dd</option>
          <option>dd</option>
          <option>dd</option>
          <option>dd</option>
          <option>dd</option>
        </Select>
      </Label>
      <Label>
        Na walutę:
        <Select as="select" />
      </Label>
      <Button>Przelicz</Button>
    </FormElement>
  );
};

export default Form;
