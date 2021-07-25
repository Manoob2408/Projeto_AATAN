import styled from "styled-components";

export const PaymentContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 4vw;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const PaymentOptionCard = styled.button`
  background-color: #ffc757;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.1rem;
  transition: ease-in 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
