import React from "react";
import * as Styled from "./button.styles";
import type { IButtonProps } from "../../types";

export const Button: React.FC<IButtonProps> = ({
  onClick,
  label,
  ...props
}) => {
  return (
    <Styled.ButtonWrapper onClick={onClick} {...props}>
      {label}
    </Styled.ButtonWrapper>
  );
};
