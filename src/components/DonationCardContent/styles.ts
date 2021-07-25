import styled from "styled-components";

export const CardContainer = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 2.5rem;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.5rem #000;
  transition: ease-in 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0.3rem 0.3rem 0.5rem #000;
  }
`;

export const IconContainer = styled.h2`
  display: block;
  margin-left: 0;
  padding: 0.9rem 1rem 0.9rem 0;
  border-right: 1px solid #ffc757;
  border-radius: 1rem;
`;

export const TitleContainer = styled.h2`
  display: block;
  margin: auto;
`;
