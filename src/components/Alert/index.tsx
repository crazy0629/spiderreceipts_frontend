import React from "react";
import * as Styled from "./alert.styles";
import * as PiIcon from "react-icons/pi";
import type { IAlertProps } from "../../types";

const icons = {
  success: <PiIcon.PiCheckCircle color="green" />,
  warning: <PiIcon.PiWarning color="yellow" />,
  error: <PiIcon.PiWarningCircle color="#EE3E3E" />,
};

export const Alert: React.FC<IAlertProps> = (props) => {
  return (
    <Styled.AlertWrapper>
      <Styled.IconWrapper>{icons[props.type]}</Styled.IconWrapper>
      <Styled.MessageWrapper>{props.message}</Styled.MessageWrapper>
    </Styled.AlertWrapper>
  );
};
