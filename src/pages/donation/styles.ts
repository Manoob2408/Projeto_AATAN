import styled from "styled-components";

export const DonationGrid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 30rem);
  grid-gap: 4rem;
  @media (max-width: 1020px) {
    grid-template-columns: repeat(1, 30rem);
  }
  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 18rem);
    grid-gap: 2rem;
  }
`;

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const DonationButtonContainer = styled.div`
  margin-top: 5rem;
`;

export const TitlePage = styled.h2`
  margin-top: 2rem;
  font-size: 2rem;
`;
