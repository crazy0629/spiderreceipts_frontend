import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
  height: 100vh;
  max-width: 1300px;
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const AppContainer = styled.div`
  flex: 1;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const AppHeaderWrapper = styled.div`
  display: flex;
  padding: 26px 0;
  justify-content: space-between;
  align-items: center;
`;

export const AppFooterWrapper = styled.div`
  text-align: center;
  padding: 24px 0;
  color: #4e4e4e;
  font-size: 20px;
  font-weight: 400;
`;
