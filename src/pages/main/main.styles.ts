import styled from "styled-components";

export const MainPageWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
  height: 100%;
`;

export const LogoGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: fit-content;
  grid-column-gap: 58px;
  grid-row-gap: 16px;
  margin: auto;
  margin-top: 80px;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LogoItemWrapper = styled.div`
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  img {
    filter: invert(${({ theme }) => theme.image});
  }
`;
