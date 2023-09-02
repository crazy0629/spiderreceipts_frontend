import { styled } from "styled-components";

export const VerifiedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  & > img {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  & > span {
    color: ${({ theme }) => theme.authTitle.subtitle};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`;
