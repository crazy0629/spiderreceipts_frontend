import { styled } from "styled-components";

export const VerifyPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VerifyContainer = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    margin-top: 24px;
    color: #4b32b2;

    /* Text sm/Semibold */
    font-size: 14px;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
    text-decoration: none;
  }
`;

export const VerifyTextWrapper = styled.div`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 32px;
  h1 {
    margin-bottom: 12px;
    text-align: center;

    font-size: 30px;
    font-weight: 600;
    line-height: 40px; /* 133.333% */
  }
  p {
    text-align: center;

    color: ${({ theme }) => theme.authTitle.subtitle};
    font-size: 16px;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
    span {
      color: ${({ theme }) => theme.text};
      font-weight: 600;
    }
  }
`;
