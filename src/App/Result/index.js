import {
  Wrapper,
  TextResult,
  CurrencySpan,
  BoldCurrencySpan,
  AmountSpan,
  ResultSpan,
  NumberResult,
} from "./styled";

const Result = () => {
  return (
    <Wrapper>
      <TextResult>
        Po przeliczeniu <AmountSpan text>100000000.00</AmountSpan>
        <CurrencySpan text>EUR</CurrencySpan> na USD otrzymasz{" "}
        <ResultSpan text>10255725000.00</ResultSpan>
        <BoldCurrencySpan text>USD</BoldCurrencySpan>
      </TextResult>
      <NumberResult>
        <AmountSpan>100000000.00</AmountSpan>
        <CurrencySpan>EUR</CurrencySpan>&nbsp;= <ResultSpan>10255725000.00</ResultSpan>
        <BoldCurrencySpan>USD</BoldCurrencySpan>
      </NumberResult>
    </Wrapper>
  );
};

export default Result;
