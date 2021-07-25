import { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  donationOption?: string;
  disabled?: boolean;
  setIsDonating: Dispatch<SetStateAction<boolean>>;
};

export function Button({
  title,
  disabled,
  setIsDonating,
  ...props
}: ButtonProps): JSX.Element {
  function handleDonatingClick() {
    setIsDonating(true);
  }

  return (
    <>
      <ButtonContainer
        {...props}
        disabled={disabled}
        onClick={handleDonatingClick}
      >
        {title}
      </ButtonContainer>
    </>
  );
}
