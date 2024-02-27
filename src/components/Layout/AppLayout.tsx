import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Outlet } from "react-router-dom";

import { lightTheme, darkTheme, GlobalStyles } from "../../theme";

import * as Comp from "../../components";

import { Provider } from "react-redux";
import { store } from "../../redux/store";

const AppLayout: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const isDarkTheme = theme === "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Provider store={store}>
        <GlobalStyles />
        <Outlet />
        <Comp.Toast theme={isDarkTheme ? "dark" : "light"} />
        <Comp.DarkModeSwitch setTheme={setTheme} theme={theme} />
      </Provider>
    </ThemeProvider>
  );
};

export default AppLayout;
