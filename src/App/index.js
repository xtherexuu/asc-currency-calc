import React, { useEffect } from "react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import darkTheme from "../Utils/themes/darkTheme";
import lightTheme from "../Utils/themes/lightTheme";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [isDarkModeOn, setDarkMode] = useLocalStorage("darkModeOn");

  return (
    <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
      <Header isDarkModeOn={isDarkModeOn} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
