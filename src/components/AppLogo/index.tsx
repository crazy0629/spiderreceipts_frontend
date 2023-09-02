import React from "react";
import * as Styled from "./logo.styles";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export const AppLogo: React.FC = () => {
  const router = useNavigate();
  const theme = useTheme();
  return (
    <Styled.AppLogoWrapper
      onClick={() => router("/")}
      style={{
        backgroundImage: `url(${theme.logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%, 100%",
      }}
    >
      <img src={theme.logo} alt="logo" />
    </Styled.AppLogoWrapper>
  );
};
