import React, { useState } from "react";

import { Button } from "../../components/Button";
import { DonationCardContent } from "../../components/DonationCardContent";
import { FooterMenu } from "../../components/FooterMenu";
import { ContentPage, DonationButtonContainer, DonationGrid, TitlePage } from "./styles";

export default function Donation() {
  const [donationOption, setDonationOption] = useState("");

  const donationsContent = [
    {
      id: "1",
      title: "Reparos e Construção",
      option: "reparos",
      icon: "🛠",
      color: "#FF885A",
    },
    {
      id: "2",
      title: "Vacinas",
      option: "vacinas",
      icon: "💉",
      color: "#71D4FE",
    },
    {
      id: "3",
      title: "Ração",
      option: "racao",
      icon: "🐾",
      color: "#FEB940",
    },
    {
      id: "4",
      title: "Medicamentos",
      option: "medicamentos",
      icon: "💊",
      color: "#59E48A",
    },
  ];

  return (
    <>
      <ContentPage>
        <TitlePage>Doação</TitlePage>
        <DonationGrid>
          {donationsContent.map((item) => {
            return (
              <DonationCardContent
                key={item.id}
                id={item.id}
                title={item.title}
                icon={item.icon}
                color={item.color}
                option={item.option}
                setDonationOption={setDonationOption}
              />
            );
          })}
        </DonationGrid>
        <DonationButtonContainer>
          <Button
            title="DOAR"
            donationOption={donationOption}
            disabled={!donationOption}
          />
        </DonationButtonContainer>
        <FooterMenu />
      </ContentPage>
    </>
  );
}
