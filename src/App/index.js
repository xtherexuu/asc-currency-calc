import React, { useEffect } from "react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import darkTheme from "../Utils/themes/darkTheme";
import lightTheme from "../Utils/themes/lightTheme";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [xyz, setXyz] = useLocalStorage("darkModeOn")

  return (
    <ThemeProvider theme={xyz ? darkTheme : lightTheme}>
      <Header xyz={xyz} setXyz={setXyz}/>
    </ThemeProvider>
  );
}

export default App;
