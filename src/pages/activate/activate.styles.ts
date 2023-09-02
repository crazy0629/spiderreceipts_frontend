import { styled } from "styled-components";

export const ActivateWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  & > span {
    position: absolute;
    top: 10px;
    left: 10px;
    display: inline-flex;
    align-items: center;
    svg {
      margin-right: 8px;
      cursor: pointer;
    }
  }
  & > div {
    padding: 24px;
    width: 95%;
    max-width: 502px;
    margin: auto;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.activate.border};
  }
  .card-input {
    height: 40px;
    border: 1px solid ${({ theme }) => theme.activate.inputBorder};
    border-radius: 8px;
    padding: 8px;
    display: flex;
    align-items: center;
    & > div {
      width: 100%;
    }
    iframe * {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const PaySettingWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.activate.inputBorder};
  border-radius: 8px;
  padding: 16px 24px;
  margin-bottom: 24px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const CounterWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.activate.inputBorder};
  padding: 5px 8px;
  align-items: center;
  border-radius: 8px;
  display: flex;
  height: 40px;
  input {
    width: 30px;
    text-align: center;
    outline: none;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.text};
  }
  span {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }
  & > :not(:first-child) {
    margin-left: 40px;
  }
`;

export const Divider = styled.div`
  margin-bottom: 24px;
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.activate.inputBorder};
`;

export const PayButton = styled.button`
  outline: none;
  border: none;
  height: 42px;
  width: 100%;
  border-radius: 8px;
  background: #5538c9;
  color: #fcfcfc;

  font-size: 16px;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  margin-top: 10px;
`;
