import React from "react";
import * as Styled from "./select.styles";
import type { ISelectProps } from "../../types";

export const Select: React.FC<ISelectProps> = (props) => {
  return (
    <Styled.SelectWrapper>
      {props.label && <p>{props.label}</p>}
      <select
        required={props.required}
        name={props.name}
        onChange={props.onChange}
        // defaultValue={props.default}
      >
        <option value=""></option>
        {props.options.map((item, key) => (
          <option value={item.key} key={key}>
            {item.value}
          </option>
        ))}
      </select>
    </Styled.SelectWrapper>
  );
};
