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

const LandingPageSection = () => {
  const date = useCurrentDate();
  const getFormatedDate = () => {
    const formatedDate = date.toLocaleDateString("pl-PL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formatedDate;
  }
  const getFormatedTime = () => {
    const formatedTime = date.toLocaleTimeString("pl-PL", {
      hour: "numeric",
      minute: "numeric",
    })
    return formatedTime;
  }
  return (
    <Wrapper>
      <ImageLogo src={srcToLogoImage} alt="that's a website logo" />
      <TextContainer>
        <Heading>Witaj&nbsp;w Galaxy&nbsp;Converter&nbsp;!</Heading>
        <Text>
          Twoim niezawodnym przewodnikiem po kosmicznych wymianach walutowych!
        </Text>
        <Text>
          Przeliczaj waluty w kosmicznym tępie na podstawie kursów&nbsp;z 09.08.2023r
        </Text>
        <Text>Dziś jest {getFormatedDate()}r.&nbsp;{getFormatedTime()}</Text>
      </TextContainer>
      <ScrollButton>
        <ScrollIcon
          src={srcToScrollIcon}
          alt="Its a icon for button which is scrolling to the calculator section"
        />
      </ScrollButton>
    </Wrapper>
  );
};

export default LandingPageSection;
