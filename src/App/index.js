import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../Utils/themes/theme";
import { GlobalStyle } from "./globalstyle";
import Header from "./Header";
import { SectionsWrapper } from "./styled";
import CalculatorSection from "./CalculatorSection";
import LandingPageSection from "./LandingPageSection";
import HamburgerMenu from "./HamburgerMenu";
import useCurrencies from "./useCurrencies";
import LoadingSection from "./LoadingSection";

function App() {
  const [isMenuButtonClicked, setMenuButtonStatus] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const [currenciesObj, isError, isDone] = useCurrencies();

  useEffect(() => {
    if (isDone) {
      setTimeout(() => {
        setLoaded(true);
      }, 1500);
    }
  }, [isDone])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDarkModeOn />
      <LoadingSection isLoaded={isLoaded} isError={isError} />
      <Header
        isMenuButtonClicked={isMenuButtonClicked}
        setMenuButtonStatus={setMenuButtonStatus}
      />
      {isDone ? (
        <SectionsWrapper>
          <HamburgerMenu isMenuButtonClicked={isMenuButtonClicked} />
          <LandingPageSection />
          <CalculatorSection currenciesObj={currenciesObj} />
        </SectionsWrapper>
      ) : null}
    </ThemeProvider>
  );
}

export default App;
