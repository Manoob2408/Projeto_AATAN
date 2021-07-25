import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 1rem 3rem;
  border-radius: 0.8rem;
  background: #ffc757;
  cursor: pointer;
  transition: ease-in 0.2s;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:hover {
    opacity: 0.8;
  }
`;
