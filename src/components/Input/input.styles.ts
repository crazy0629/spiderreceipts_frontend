import { styled } from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.input.text};
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  transition: all 0.2s ease-in;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.input.border};
  background: ${({ theme }) => theme.input.bg};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  height: 44px;
  padding: 0 14px;
  span {
    color: #667085;
    margin-right: 8px;
  }
  input {
    background-color: transparent;
    transition: all 0.2s ease-in;
    border: none;
    color: ${({ theme }) => theme.input.text};
    outline: none;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    &::placeholder {
      color: #667085;
    }
  }
`;
