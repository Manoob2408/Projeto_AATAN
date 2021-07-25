import { PaymentContainer, PaymentOptionCard } from "./styles";

export function PaymentDonation(): JSX.Element {
  return (
    <>
      <PaymentContainer>
        <PaymentOptionCard>PAGAR COM PIX</PaymentOptionCard>
        <PaymentOptionCard>PAGAR COM BOLETO</PaymentOptionCard>
      </PaymentContainer>
    </>
  );
}
