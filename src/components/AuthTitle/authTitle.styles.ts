import { styled } from "styled-components";

export const AuthTitleWrapper = styled.div`
  text-align: center;
  h1 {
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 12px;
  }
  p {
    color: ${({ theme }) => theme.authTitle.subtitle};
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
`;
