import { styled } from "styled-components";

export const AdminWrapper = styled.div`
  h1 {
    margin-bottom: 50px;
    text-align: center;
  }
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.pagination};
  
  `;

export const AdminTableWrapper = styled.table`
  width: 100%;
  margin-bottom: 30px;
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


export const Text = styled.div`
  color: red;
`

export const OrderButton = styled.div`
  text-decoration: underline;
  color: green;
  cursor: pointer;

`

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const Label = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`
export const Input = styled.input`
  display: flex;
  align-items: center;
  width: 300px;

  font-size: 16px;
`
