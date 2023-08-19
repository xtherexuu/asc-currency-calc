import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../Utils/themes/theme";
import { GlobalStyle } from "./globalstyle";
import Header from "./Header";
import { SectionsWrapper } from "./styled";
import CalculatorSection from "./CalculatorSection";
import LandingPageSection from "./LandingPageSection";

function App() {
  const [isMenuButtonClicked, setMenuButtonStatus] = useState(false);
  useEffect(() => {
    console.log(isMenuButtonClicked)
  }, [isMenuButtonClicked])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDarkModeOn />
      <Header
        isMenuButtonClicked={isMenuButtonClicked}
        setMenuButtonStatus={setMenuButtonStatus}
      />
      <SectionsWrapper>
        <LandingPageSection />
        <CalculatorSection />
      </SectionsWrapper>
    </ThemeProvider>
  );
}

export default App;
