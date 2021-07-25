import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  donationOption?: string;
  disabled?: boolean;
};

export function Button({
  title,
  disabled,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <>
      <ButtonContainer {...props} disabled={disabled}>
        {title}
      </ButtonContainer>
    </>
  );
}
