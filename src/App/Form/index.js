import { FormElement, Input, Select, Label, Button } from "./styled";

const Form = ({
  inputValue,
  setInputValue,
  fromSelectValue,
  setFromSelectValue,
  toSelectValue,
  setToSelectValue,
  onFormSubmit,
  currenciesObj,
}) => {
  const currenciesOnly = currenciesObj.rates;
  const currencies = Object.keys(currenciesOnly);

  return (
    <FormElement onSubmit={onFormSubmit}>
      <Label>
        Kwota:
        <Input
          value={inputValue}
          onChange={(e) => {
            setInputValue((value) => (value = e.target.value));
          }}
          placeholder="0.00"
          type="number"
          max="100000000.00"
          min="0.01"
          step="0.01"
        />
      </Label>
      <Label>
        Z waluty:
        <Select
          as="select"
          value={fromSelectValue}
          onChange={(e) => {
            setFromSelectValue((value) => (value = e.target.value));
          }}
        >
          {currencies.map((element) => {
            return <option>{element}</option>;
          })}
        </Select>
      </Label>
      <Label>
        Na walutę:
        <Select
          as="select"
          value={toSelectValue}
          onChange={(e) => {
            setToSelectValue((value) => (value = e.target.value));
          }}
        >
          {currencies.map((element) => {
            return <option>{element}</option>;
          })}
        </Select>
      </Label>
      <Button>Przelicz</Button>
    </FormElement>
  );
};

export default Form;
