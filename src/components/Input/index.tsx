import React from "react";
import * as Styled from "./input.styles";
import type { IInputProps } from "../../types";

export const Input: React.FC<IInputProps> = (props) => {
  return (
    <Styled.InputWrapper>
      {props.label && <p>{props.label}</p>}
      <Styled.InputContainer>
        {props.prefix && <span>{props.prefix}</span>}
        <input
          required={props.required}
          type={props.type || "text"}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </Styled.InputContainer>
    </Styled.InputWrapper>
  );
};
