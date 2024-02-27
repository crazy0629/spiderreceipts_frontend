import { styled } from "styled-components";

export const Layout = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 20px;

  @media screen and (max-width: 768px){
    flex-direction: column;
    height: fit-content;
  }
`;

export const ImageContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px){
    width: 90%;
    height: 150px;
  }
`;

export const FormContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: auto;

  @media screen and (max-width: 768px){
    width: 90%;
    height: fit-content;
    overflow: visible;
  }
`;
export const Image = styled.img`
  width: 250px;
  height: 250px;
  cursor: pointer;
  filter: invert(${({ theme }) => theme.image});

  @media screen and (max-width: 1024px){
    width: 150px;
    height: 150px;
  }

`;
export const Select = styled.select`
  outline: none;
  border: none;
  border: 1px solid ${({ theme }) => theme.input.border};
  background: ${({ theme }) => theme.input.bg};
  color: ${({ theme }) => theme.input.text};
  transition: all 0.2s ease-in;
  width: 100%;
  height: 44px;
  border-radius: 8px;
  padding: 0 14px;
  font-size: 16px;


`;

export const Input = styled.input`
    background-color: transparent;
    transition: all 0.2s ease-in;
    border: none;
    color: ${({ theme }) => theme.input.text};
    outline: none;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    &::placeholder {
      color: #667085;
    }
`;

export const SelectContainer = styled.div`
  width: 100%;
`;
export const SelectLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.input.text};
`;
export const InputContainer = styled.div`
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  
  transition: all 0.2s ease-in;
  
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.input.border};
  background: ${({ theme }) => theme.input.bg};
  
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  padding: 0 14px;
`;
export const InputLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.input.text};
`;

export const ItemContainer = styled.div`
  width: 100%;
    height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const SubmitButton = styled.div`
  width: 100%;
  min-height: 50px;
  background: #5538c9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 20px;
  border-radius: 10px;
`