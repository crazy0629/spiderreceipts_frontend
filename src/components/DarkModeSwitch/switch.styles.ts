import { styled } from "styled-components";

export const DarkSwitchWrapper = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 100;

  @media screen and (max-width: 425px){
    right: 20px;
  bottom: 20px;    
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
