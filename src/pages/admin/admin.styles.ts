import { styled } from "styled-components";

export const AdminWrapper = styled.div`
  h1 {
    margin-bottom: 50px;
    text-align: center;
  }
  width: 100%;
  height: 100%;
`;

export const AdminTableWrapper = styled.table`
  width: 100%;
  &,
  tr,
  td,
  th {
    border-collapse: collapse;
    padding: 10px 20px;
    border: 1px solid #d0d0d050;
    text-align: center;
    font-size: 14px;
  }
  .empty-row {
    text-align: center;
  }
  .activated {
    padding: 5px 10px;
    background: green;
    border-radius: 999px;
    border: 1px solid #fff;
    font-size: 12px;
    color: #fff;
  }
  .not-activated {
    padding: 5px 10px;
    color: #fff;
    background: red;
    border-radius: 999px;
    border: 1px solid #fff;
    font-size: 12px;
  }
  .table-action {
    span {
      cursor: pointer;
      text-decoration: underline;
      &:first-child {
        color: green;
      }

      &:last-child {
        color: red;
      }
    }
  }
  .edit-date {
    border: 1px solid ${({ theme }) => theme.input.border};
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.text};
    /* height: 40px; */
    padding: 10px 20px;
    border-radius: 8px;
  }
  .edit-activate {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 20px;
      height: 20px;
    }
  }
`;
