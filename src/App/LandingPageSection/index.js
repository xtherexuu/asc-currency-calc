import {
  Wrapper,
  ImageLogo,
  Heading,
  HeadingComplement,
  TextContainer,
  ScrollButton,
  ScrollIcon,
} from "./styled";

import srcToLogoImage from "../../Utils/logo.png";

import srcToScrollIcon from "../../Utils/arrow-down-icon.png";

const LandingPageSection = () => {
  return (
    <Wrapper>
      <ImageLogo src={srcToLogoImage} alt="that's a website logo" />
      <TextContainer>
        <Heading>Witaj&nbsp;w Galaxy&nbsp;Converter&nbsp;!</Heading>
        <HeadingComplement>
          Twoim niezawodnym przewodnikiem po kosmicznych wymianach walutowych!
        </HeadingComplement>
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
