import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 95%;
  max-width: 1300px;

  display: flex;
  flex-direction: column;

  margin: auto;
`;

export const HomeHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 26px 0;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const HomeHeaderButton = styled.div`
  display: flex;
  align-items: center;

  .log-button {
    width: auto;
    margin-left: 15px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 425px) {
    .log-button {
      font-size: 14px;
      height: 30px;
    }
  }
`;

export const HomeBodyWrapper = styled.div`
  padding: 50px 0;
`;

export const HomeSubscribeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  h3 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  p {
    a {
      font-size: 18px;
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      margin-right: 20px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    h3 {
      font-size: 25px;
      font-weight: 500;
      margin-bottom: 12px;
    }
    p {
      font-size: 16px;
      a {
        font-size: 16px;
      }
    }
  }
`;

export const HomeAnouncementWrapper = styled.div`
  margin: 80px 0;
  text-align: center;
  & > h1 {
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  & > p {
    font-size: 20px;
    max-width: 768px;
    margin: auto;
    margin-bottom: 20px;
  }
  .home-button {
    width: 240px;
    height: 60px;
  }
`;

export const SubscribeInputWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  input {
    flex: 1;
    padding: 0 12px;
    transition: all 0.2s ease-in;
    outline: none;
    color: ${({ theme }) => theme.input.text};
    border: none;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.input.border};
    background: ${({ theme }) => theme.input.bg};
    border-radius: 6px 0 0 6px;
  }
  button {
    outline: none;
    transition: all 0.2s ease-in;
    border: none;
    border-radius: 0 6px 6px 0;
    width: 50px;
    background-color: #5538c9;
    color: white;
    font-size: 16px;
  }
`;

export const AnounceGridWrapper = styled.div`
  margin-top: 80px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  & > div {
    display: flex;
    font-size: 20px;
    text-align: left;
    p {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const HomeVideoWrapper = styled.div`
  video {
    width: 100%;
  }
`;

export const LinkBox = styled.div`
  @media screen and (max-width: 1024px) {
    margin-bottom: 16px;
  }
`;

export const LinkItem = styled(Link)`
  color: #6548d9;
  font-size: 16px;
  font-weight: 700;

  &:first-child {
    color: #ff2f35;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }

  text-decoration: underline;

  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;

export const AuthButtonBox = styled.div`
  display: flex;
`;

export const ModalLayout = styled.form`
  width: 100%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 100%;
  }
`;
export const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.div`
  text-align: center;

  font-size: 19px;
  font-weight: 700;
`;

export const ModalInput = styled.input`
  margin-top: 30px;
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  padding: 5px 8px;
`;

export const ModalButton = styled.input`
  margin-top: 15px;
  padding: 10px 25px;
  background: #6548d9;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  border: none;
`;
