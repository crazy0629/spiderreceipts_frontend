import React, { useEffect } from "react";
import * as Styled from "./verified.styles";
import * as Comp from "../../components";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export const Verified: React.FC = () => {
  const router = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      router("/signin");
    }, 3000);
  }, []);

  return (
    <Styled.VerifiedWrapper>
      <Comp.AppLogo />
      <img src={theme.cong} alt="cong" />
      <span>Redirecting..</span>
    </Styled.VerifiedWrapper>
  );
};
