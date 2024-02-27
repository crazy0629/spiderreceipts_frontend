
import { styled } from "styled-components";

export const ActivateWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  position: relative;
  & > :first-child {
    cursor: pointer;
    padding: 20px;
  }
  & > :not(:first-child) {
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

export const ModalLayout = styled.div`
  width: 100%;
  min-height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;
export const Single = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  line-height: 2;

  @media screen and (max-width: 425px) {
    font-size: 25px;
    font-weight: 700;
  }
`;
export const Container = styled.div`
  width: 100%;

  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Header = styled.div`
  font-size: 18px;
  font-weight: 600;
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
export const Detail = styled.div`
  font-size: 13px;
  font-weight: 500;
  span {
    font-size: 16px;
    font-weight: 700;
    margin-right: 5px;
  }
  @media screen and (max-width: 425px) {
    font-size: 9px;
  }
`;
export const Link = styled.a`
  font-size: 18px;
  font-weight: 600;
  text-decoration: underline;
  color: #69b1ff;

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;


export const TextDesc = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  a {
    text-decoration: underline;
    color: #69b1ff;
  }
`;
