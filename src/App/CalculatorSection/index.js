import {
  Wrapper,
  SpaceIcon,
  TextSection,
  SectionHeading,
  CalculatorWrapper,
  CalculatorContainer,
} from "./styled";
import Form from "../Form";
import Result from "../Result";
import ParticlesBackground from "../ParticlesBackground";
import alonerocket1imgsrc from "../../Utils/spaceicons/alonerocket1.png";
import astronautwithrocket1srcimg from "../../Utils/spaceicons/astronautwithrocket1.png";
import astronautwithrocket2srcimg from "../../Utils/spaceicons/astronautwithrocket2.png";
import sateliteimgsrc from "../../Utils/spaceicons/satelite.png";
import planet1srcimg from "../../Utils/spaceicons/planet1.png";
import planet2srcimg from "../../Utils/spaceicons/planet2.png";
import planet3srcimg from "../../Utils/spaceicons/planet3.png";
import { useState } from "react";

const CalculatorSection = ({ currenciesObj }) => {
  const [inputValue, setInputValue] = useState("");
  const [fromSelectValue, setFromSelectValue] = useState("PLN");
  const [toSelectValue, setToSelectValue] = useState("EUR");
  const [combinedResult, setCombinedResult] = useState(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const combinedResult = {
      amount: inputValue,
      result: (
        (inputValue * currenciesObj.data[toSelectValue].value) /
        currenciesObj.data[fromSelectValue].value
      ).toFixed(2),
      fromCurrencyShortName: fromSelectValue,
      toCurrencyShortName: toSelectValue,
    };
    setCombinedResult((result) => (result = combinedResult));
  };

  return (
    <Wrapper id="calculatorSection">
      <CalculatorWrapper>
        <CalculatorContainer>
          <TextSection>
            <SectionHeading>Converter</SectionHeading>
          </TextSection>
          <Form
            currenciesObj={currenciesObj}
            inputValue={inputValue}
            setInputValue={setInputValue}
            fromSelectValue={fromSelectValue}
            setFromSelectValue={setFromSelectValue}
            toSelectValue={toSelectValue}
            setToSelectValue={setToSelectValue}
            onFormSubmit={onFormSubmit}
          />
          <Result combinedResult={combinedResult} />
        </CalculatorContainer>
      </CalculatorWrapper>

      <ParticlesBackground />
      <SpaceIcon
        alt="one of background icon (only visual effect)"
        src={alonerocket1imgsrc}
        alonerocket1
      />
      <SpaceIcon
        alt="one of background icon (only visual effect)"
        src={planet1srcimg}
        planet1
      />
      <SpaceIcon
        alt="one of background icon (only visual effect)"
        src={sateliteimgsrc}
        satelite
      />
      <SpaceIcon
        alt="one of background icon (only visual effect)"
        src={astronautwithrocket2srcimg}
        astronautwithrocket2
      />
      <SpaceIcon
        alt="one of background icon (only visual effect)"
        src={planet3srcimg}
        planet3
      />
      <SpaceIcon
        alt="one of background icon (only visual effect)"
        src={planet2srcimg}
        planet2
      />
      <SpaceIcon
        alt="one of background icon (only visual effect)"
        src={astronautwithrocket1srcimg}
        astronautwithrocket1
      />
    </Wrapper>
  );
};

export default CalculatorSection;
