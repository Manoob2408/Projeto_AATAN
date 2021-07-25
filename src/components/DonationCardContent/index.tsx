import React, { Dispatch, SetStateAction } from "react";
import { CardContainer, IconContainer, TitleContainer } from "./styles";

type DonationProps = {
  id: string;
  title: string;
  icon: string;
  color: string;
  option: string;
  setDonationOption: Dispatch<SetStateAction<string>>;
};

export function DonationCardContent({
  id,
  title,
  icon,
  color,
  option,
  setDonationOption,
}: DonationProps) {
  return (
    <>
      <CardContainer
        style={{ background: color }}
        onClick={() => setDonationOption(option)}
      >
        <IconContainer>{icon}</IconContainer>
        <TitleContainer>{title}</TitleContainer>
      </CardContainer>
    </>
  );
}
