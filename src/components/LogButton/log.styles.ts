import styled from "styled-components";

export const LogButtonWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const LogButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #24ff00;
  border: 2px solid #24ff00;
  &.logout {
    border: 2px solid red;
    color: red;
  }

  &.changePage {
    border: 2px solid #6548d9;
    color: #6548d9;
  }
  

  cursor: pointer;
  height: 40px;
  padding: 0 16px;
  border-radius: 8px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.logButton.border};
  }
  span {
    margin-right: 12px;
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
  @media screen and (max-width: 480px) {
    span {
      display: none;
    }
  }
`;

export const HomeHeaderButton = styled.div`
  display: flex;
  align-items: center;

  .log-button {
    width: auto;
    margin-left: 15px;
    padding: 10px 20px;
  }
`;