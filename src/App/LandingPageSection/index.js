import {
  Wrapper,
  ImageLogo,
  Heading,
  Text,
  TextContainer,
  ScrollButton,
  ScrollIcon,
} from "./styled";
import srcToLogoImage from "../../Utils/logo.png";
import srcToScrollIcon from "../../Utils/arrow-down-icon.png";
import useCurrentDate from "../useCurrentDate";

const LandingPageSection = ({ currenciesObj }) => {
  const date = useCurrentDate();
  const ratesData = currenciesObj.date;
  const getBetterRatesData = () => {
    const ratesDataArray = ratesData.split("-").reverse();
    const betterRatesData = ratesDataArray.join(".");
    return betterRatesData;
  };
  const getFormatedDate = () => {
    const formatedDate = date.toLocaleDateString("pl-PL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formatedDate;
  };
  const getFormatedTime = () => {
    const formatedTime = date.toLocaleTimeString("pl-PL", {
      hour: "numeric",
      minute: "numeric",
    });
    return formatedTime;
  };
  return (
    <Wrapper id="landingpageSection">
      <ImageLogo src={srcToLogoImage} alt="that's a website logo" />
      <TextContainer>
        <Heading>Witaj&nbsp;w Galaxy&nbsp;Converter&nbsp;!</Heading>
        <Text>
          Twoim niezawodnym przewodnikiem po kosmicznych wymianach walutowych!
        </Text>
        <Text>
          Przeliczaj waluty w kosmicznym tempie na podstawie kursów&nbsp;z{" "}
          {getBetterRatesData()}r.
        </Text>
        <Text>
          Dziś jest {getFormatedDate()}r.&nbsp;{getFormatedTime()}
        </Text>
      </TextContainer>
      <ScrollButton href="#calculatorSection">
        <ScrollIcon
          src={srcToScrollIcon}
          alt="Its a icon for button which is scrolling to the calculator section"
        />
        <Text>Scroll</Text>
      </ScrollButton>
    </Wrapper>
  );
};

export default LandingPageSection;
