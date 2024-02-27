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
  margin: 32px 0 5px 0px;
  width: 100%;
  & > :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Forgot = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  
  margin-bottom: 22px;

  cursor: pointer;
  
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;

  color: #4b32b2;
`;

export const ResetLayout = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ResetForm = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const ResetButton = styled.div`
  width: 100%;
  height: 45px;
  background: #4b32b2;

  display: flex;
  justify-content: center;
  align-items: center;
  
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
`