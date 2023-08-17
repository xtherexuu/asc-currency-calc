import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../Utils/themes/theme";
import { GlobalStyle } from "./globalstyle";
import Header from "./Header";

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
    </ThemeProvider>
  );
}

export default App;
