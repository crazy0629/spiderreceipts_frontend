import { styled } from "styled-components";

export const AuthNavigateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  p {
    color: ${({ theme }) => theme.authTitle.subtitle};
  }
  a {
    font-weight: 600;
    margin-left: 4px;
    color: #4b32b2;
    text-decoration: none;
  }
`;
