import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
  min-height: 100vh;
  max-width: 1300px;
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const AppContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:768px){
    height: fit-content;
  }
`;

export const AppHeaderWrapper = styled.div`
  display: flex;
  padding: 26px 0;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px){
    flex-direction: column;
  }
`;

export const AppFooterWrapper = styled.div`
  text-align: center;
  padding: 24px 0;
  color: #4e4e4e;
  font-size: 20px;
  font-weight: 400;
`;
