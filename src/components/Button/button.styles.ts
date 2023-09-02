import { styled } from "styled-components";

export const ButtonWrapper = styled.button`
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  height: 42px;
  width: 100%;
  border: none;
  outline: none;
  background-color: #5538c9;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  border-radius: 8px;
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background-color: #6548d9;
  }
`;
