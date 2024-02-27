import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100px;

  filter: invert(${({ theme }) => theme.image});
`;

export const Text = styled.div`
  font-size: 40px;
  font-weight: 600;

  margin-bottom: 50px;
`;

export const ImageContainer = styled(Link)`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const ImageBox = styled.div`
  width: 90%;

  max-width: 500px;

  display: flex;
  justify-content: space-around;
`;
