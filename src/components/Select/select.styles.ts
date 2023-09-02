import { styled } from "styled-components";

export const SelectWrapper = styled.div`
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.input.text};
  }
  select {
    outline: none;
    border: none;
    border: 1px solid ${({ theme }) => theme.input.border};
    background: ${({ theme }) => theme.input.bg};
    color: ${({ theme }) => theme.input.text};
    transition: all 0.2s ease-in;
    width: 100%;
    height: 44px;
    border-radius: 8px;
    padding: 0 14px;
  }
`;
