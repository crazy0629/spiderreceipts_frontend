import styled from "styled-components";

export const AlertWrapper = styled.div`
  background: rgba(0, 145, 176, 0.1);
  border-radius: 20px;
  padding: 20px 30px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  font-size: 32px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageWrapper = styled.div`
  color: ${({ theme }) => theme.alert.text};
  font-size: 16px;
`;
