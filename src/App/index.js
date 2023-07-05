import React, { useState, useEffect } from "react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import darkTheme from "../Utils/themes/darkTheme";
import lightTheme from "../Utils/themes/lightTheme";
import useLocalStorage from "./useLocalStorage";
import Content from "./Content";
import HamburgerMenu from "./HamburgerMenu";
import styled from "styled-components";

function App() {
  const [isDarkModeOn, setDarkMode] = useLocalStorage("darkModeOn");
  const [isButtonClicked, setButtonStatus] = useState(false);

  useEffect(() => {
    if (isDarkModeOn) {
      document.documentElement.classList.add("darkTheme");
    } else {
      document.documentElement.classList.remove("darkTheme");
    }
  }, [isDarkModeOn]);

  return (
    <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
      <Header
        isButtonClicked={isButtonClicked}
        setButtonStatus={setButtonStatus}
        isDarkModeOn={isDarkModeOn}
        setDarkMode={setDarkMode}
      />
      <HamburgerMenu
        isDarkModeOn={isDarkModeOn}
        setDarkMode={setDarkMode}
        isButtonClicked={isButtonClicked}
      />
      <Content isDarkModeOn={isDarkModeOn}></Content>
    </ThemeProvider>
  );
}

export default App;
