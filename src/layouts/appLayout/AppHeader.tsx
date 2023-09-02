import React from "react";
import * as Styled from "./layout.styles";
import * as Comp from "../../components";

export const AppHeader: React.FC = () => {
  return (
    <Styled.AppHeaderWrapper>
      <Comp.AppLogo />
      <Comp.LogButton />
    </Styled.AppHeaderWrapper>
  );
};
