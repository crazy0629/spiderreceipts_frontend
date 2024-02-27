import React from "react";

import { Layout, ImageBox, Image, Text, ImageContainer } from "./styled";
import { AppLayout } from "../../layouts";

export const About = () => {
  return (
    <AppLayout>
      <Layout>
        <Text>Contact us</Text>
        <ImageBox>
          <ImageContainer to={"mailto:support@spyderreceipts.com"}>
            <Image src="/assets/contact/email.png" alt="No Image" />
          </ImageContainer>
          <ImageContainer to={"https://discord.gg/SFGSKw4fZT"} target="_blank">
            <Image src="/assets/contact/discord.png" alt="No Image" />
          </ImageContainer>
          <ImageContainer
            to={"https://www.instagram.com/spyderresells/"}
            target="_blank"
          >
            <Image src="/assets/contact/instagram.png" alt="No Image" />
          </ImageContainer>
        </ImageBox>
      </Layout>
    </AppLayout>
  );
};
