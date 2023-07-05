import React, { useState } from "react";
import {
  Image,
  Form,
  Container,
  FormTitle,
  Span,
  FormParagraph,
  Result,
  FromAmount,
  ToAmount,
  FromCurrency,
  ToCurrency,
  Cantor,
  Select,
  Input,
  Button,
} from "./styled";
import imageSrc from "../../Utils/image1.png";
import currencies from "../currencies";

const Content = ({ isDarkModeOn }) => {
  const [formAmount, setFormAmount] = useState("");
  const [formFromCurrency, setFormFromCurrency] = useState("Polski Złoty");
  const [formToCurrency, setFormToCurrency] = useState("Dolar Amerykański");
  const [combinedResult, setCombinedResult] = useState();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const fromCurrency = currencies.find(
      (e) => e.name === formFromCurrency
    ).short;
    const toCurrency = currencies.find((e) => e.name === formToCurrency).short;
    const amount = formAmount;
    const result = (
      (amount * currencies.find((e) => e.name === formFromCurrency).rate) /
      currencies.find((e) => e.name === formToCurrency).rate
    ).toFixed(2);

    setCombinedResult(
      (res) => (res = { fromCurrency, toCurrency, amount, result })
    );
  };

  return (
    <Container>
      <Image src={imageSrc} />
      <Form onSubmit={onFormSubmit}>
        <FormTitle>
          Przelicz <Span>walutę</Span>
        </FormTitle>
        <FormParagraph>
          Przeliczaj waluty przy użyciu kalkulatora na podstawie:{" "}
          <Span>Tabeli nr 128/A/NBP/2023 z dnia 2023-07-05</Span>
        </FormParagraph>
        {combinedResult ? (
          <Result>
            <FromAmount>{combinedResult.amount}</FromAmount>&nbsp;
            <FromCurrency>{combinedResult.fromCurrency}</FromCurrency>&nbsp;
            <ToAmount>= {combinedResult.result}</ToAmount>&nbsp;
            <ToCurrency>{combinedResult.toCurrency}</ToCurrency>
          </Result>
        ) : null}
        <Cantor>
          <FromAmount as="label" islabel>
            Z:
            <Select
              fromcurrency={true}
              value={formFromCurrency}
              onChange={({ target }) =>
                setFormFromCurrency((value) => (value = target.value))
              }
            >
              {currencies.map((element) => (
                <option>{element.name}</option>
              ))}
            </Select>
          </FromAmount>
          <FromAmount as="label" islabel>
            Na:
            <Select
              tocurrency={true}
              value={formToCurrency}
              onChange={({ target }) =>
                setFormToCurrency((value) => (value = target.value))
              }
            >
              {currencies.map((element) => (
                <option>{element.name}</option>
              ))}
            </Select>
          </FromAmount>
          <Input
            type="number"
            step={0.01}
            min={0.01}
            max={100000000}
            value={formAmount}
            onChange={({ target }) =>
              setFormAmount((amount) => (amount = target.value))
            }
            placeholder="Jaką kwotę chcesz przeliczyć?"
          ></Input>
          <Button>Przelicz</Button>
        </Cantor>
      </Form>
    </Container>
  );
};

export default Content;
