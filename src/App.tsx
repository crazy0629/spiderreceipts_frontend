import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";

import * as Page from "./pages";
import * as Comp from "./components";

const App: React.FC = () => {
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
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<Page.MainPage />} path="/" />
          <Route element={<Page.Activate />} path="/activate" />
          <Route element={<Page.SignInPage />} path="/signin" />
          <Route element={<Page.SignUpPage />} path="/signup" />
          <Route element={<Page.Admin />} path="/admin" />
          <Route element={<Page.SendCode />} path="/sendcode" />
          <Route element={<Page.Verify />} path="/verify" />
          <Route element={<Page.Verified />} path="/verified" />
        </Routes>
      </Router>
      <Comp.Toast theme={isDarkTheme ? "dark" : "light"} />
      <Comp.DarkModeSwitch setTheme={setTheme} theme={theme} />
    </ThemeProvider>
  );
};

export default App;
