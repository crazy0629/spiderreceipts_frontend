import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./authNavigate.styles";
import type { IAuthNavigateProps } from "../../types";

export const AuthNavigate: React.FC<IAuthNavigateProps> = (props) => {
  return (
    <Styled.AuthNavigateWrapper>
      <p>{props.text}</p>
      <Link to={props.navLink}>{props.navText}</Link>
    </Styled.AuthNavigateWrapper>
  );
};
