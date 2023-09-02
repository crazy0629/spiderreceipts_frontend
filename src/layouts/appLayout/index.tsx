import React from "react";
import * as Styled from "./layout.styles";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <Styled.AppLayoutWrapper>
      <AppHeader />
      <Styled.AppContainer>{children}</Styled.AppContainer>
      <AppFooter />
    </Styled.AppLayoutWrapper>
  );
};
