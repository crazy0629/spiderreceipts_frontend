import { styled } from "styled-components";

export const AuthWrapper = styled.div`
  max-width: 360px;
  width: 95%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`;

export const AuthFormWrapper = styled.div`
  margin: 32px 0;
  width: 100%;
  & > :not(:last-child) {
    margin-bottom: 16px;
  }
`;
