import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Title,
  Container,
  Date,
  Button,
  TitleImage,
  ButtonImage,
} from "./styled";
import SrcTitleImage from "../../Utils/icon512.png";
import SrcSoonImage from "../../Utils/sun-logo.png";
import SrcMoonImage from "../../Utils/moon-logo.png";
import useLocalStorage from "../useLocalStorage";
import useCurrentDate from "./useCurrentDate";

const Header = (isDarkModeOn, setDarkMode) => {
  // const [isDarkModeOn, setDarkMode] = useLocalStorage("darkModeOn");

  const onButtonClick = () => {
    setDarkMode((mode) => (mode = !mode));
  };

  const date = useCurrentDate();

  return (
    <Wrapper>
      <Container>
        <TitleImage src={SrcTitleImage} />
        <Title>Currency Calculator</Title>
      </Container>
      <Container>
        <Date>{date}</Date>
        <Button onClick={onButtonClick}>
          <ButtonImage isclicked={isDarkModeOn} src={SrcSoonImage} />
          <ButtonImage isclicked={isDarkModeOn} src={SrcMoonImage} />
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Header;
