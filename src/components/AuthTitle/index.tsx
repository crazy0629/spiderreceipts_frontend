import React from "react";
import * as Styled from "./authTitle.styles";
import type { IAuthTitleProps } from "../../types";

export const AuthTitle: React.FC<IAuthTitleProps> = ({ title, subtitle }) => {
  return (
    <Styled.AuthTitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </Styled.AuthTitleWrapper>
  );
};
