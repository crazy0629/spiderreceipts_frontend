import React from "react";
import * as Styled from "./logo.styles";
import { useTheme } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleActions } from "../../redux/single";

export const AppLogo: React.FC = () => {
  const router = useNavigate();
  const { pathname } = useLocation();

  const theme = useTheme();

  const dispatch = useDispatch();

  return (
    <Styled.AppLogoWrapper
      onClick={() => {
        if (pathname === "/payment") {
          dispatch(
            singleActions.setSingle({
              flag: false,
              company: "",
              address: "",
              name: "",
              email: "",
              link: "",
              size: "",
            })
          );
        }
        router("/");
      }}
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
