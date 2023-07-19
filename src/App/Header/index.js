import React from "react";
import {
  Wrapper,
  Title,
  Container,
  Date,
  Button,
  TitleImage,
  ButtonImage,
  Span,
  MenuLine,
} from "./styled";
import SrcTitleImage from "../../Utils/icon512.png";
import SrcSoonImage from "../../Utils/sun-logo.png";
import SrcMoonImage from "../../Utils/moon-logo.png";
import useCurrentDate from "../useCurrentDate";

const Header = ({
  isDarkModeOn,
  setDarkMode,
  isButtonClicked,
  setButtonStatus,
}) => {
  const onButtonClick = () => {
    setDarkMode((mode) => (mode = !mode));
  };

  const date = useCurrentDate();

  const getFormatedDate = () => {
    const dateString = date.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const timeString = date.toLocaleTimeString("pl-PL");

    return dateString + " " + timeString;
  };

  return (
    <Wrapper>
      <Container>
        <TitleImage src={SrcTitleImage} />
        <Title>
          Currency <Span>Calculator</Span>
        </Title>
      </Container>
      <Container data>
        <Date>{getFormatedDate()}</Date>
        <Button onClick={onButtonClick}>
          <ButtonImage isclicked={isDarkModeOn} src={SrcSoonImage} />
          <ButtonImage isclicked={isDarkModeOn} src={SrcMoonImage} />
        </Button>
      </Container>
      <Button
        hamburgermenu
        onClick={() => {
          setButtonStatus((status) => (status = !status));
        }}
      >
        <MenuLine isclicked={isButtonClicked} topline></MenuLine>
        <MenuLine isclicked={isButtonClicked} bottomline></MenuLine>
      </Button>
    </Wrapper>
  );
};

export default Header;
