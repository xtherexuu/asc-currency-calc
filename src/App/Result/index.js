import {
  Wrapper,
  TextResult,
  CurrencySpan,
  BoldCurrencySpan,
  AmountSpan,
  ResultSpan,
  NumberResult,
} from "./styled";

const Result = ({ combinedResult }) => {
  return (
    <Wrapper>
      {combinedResult ? (
        <>
          <TextResult>
            Po przeliczeniu{" "}
            <AmountSpan text>{combinedResult.amount}</AmountSpan>
            <CurrencySpan text>
              {combinedResult.fromCurrencyShortName}
            </CurrencySpan>{" "}
            na {combinedResult.toCurrencyShortName} otrzymasz{" "}
            <ResultSpan text>{combinedResult.result}</ResultSpan>
            <BoldCurrencySpan text>
              {combinedResult.toCurrencyShortName}
            </BoldCurrencySpan>
          </TextResult>
          <NumberResult>
            <AmountSpan>{combinedResult.amount}</AmountSpan>
            <CurrencySpan>{combinedResult.fromCurrencyShortName}</CurrencySpan>
            &nbsp;= <ResultSpan>{combinedResult.result}</ResultSpan>
            <BoldCurrencySpan>
              {combinedResult.toCurrencyShortName}
            </BoldCurrencySpan>
          </NumberResult>
        </>
      ) : null}
    </Wrapper>
  );
};

export default Result;
