import { styled } from "styled-components";

export const ReceiptFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 11px 0 30px;
    font-size: 24px;
    font-weight: 600;
  }
  img {
    filter: invert(${({ theme }) => theme.image});
  }
`;

export const ReceiptFormContainer = styled.form`
  max-width: 360px;
  width: 100%;
  margin: auto;
  height: 100%;
  overflow: auto;
  padding: 10px 8px;
  & > :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  span {
    margin-left: 8px;
  }
`;
