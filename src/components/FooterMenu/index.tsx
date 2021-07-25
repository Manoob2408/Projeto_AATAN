import React from "react";
import {
  TabMenu,
  TabMenuHomeButton,
  TabMenuHomeButtonContainer,
  TabMenuItem,
} from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";

export function FooterMenu() {
  const router = useRouter();

  return (
    <>
      <TabMenu>
        <TabMenuItem>
          <Image
            src="/images/icons/icon-user-alt.png"
            layout="fill"
            objectFit="contain"
          />
        </TabMenuItem>
        <TabMenuItem onClick={() => router.push("/donation")}>
          <Image
            src="/images/icons/icon-heart.png"
            layout="fill"
            objectFit="contain"
          />
        </TabMenuItem>
        <TabMenuHomeButtonContainer>
          <TabMenuHomeButton onClick={() => router.push("/home")}>
            <Image
              src="/images/icons/icon-home-circle.png"
              layout="fill"
              objectFit="contain"
            />
          </TabMenuHomeButton>
        </TabMenuHomeButtonContainer>
        <TabMenuItem>
          <Image
            src="/images/icons/icon-comments.png"
            layout="fill"
            objectFit="contain"
          />
        </TabMenuItem>
        <TabMenuItem>
          <Image
            src="/images/icons/icon-info-circle.png"
            layout="fill"
            objectFit="contain"
          />
        </TabMenuItem>
      </TabMenu>
    </>
  );
}
