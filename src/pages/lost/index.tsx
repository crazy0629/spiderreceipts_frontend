import React from "react";

import { Layout, Image, Text, Button, } from "./styled";

export const Lost = () => {
  return (
    <Layout>
      <Image src="assets/logo.png" alt="No Logo" />
      <Text>404: Page not found</Text>
      <Button to="/">Go To Home</Button>
    </Layout>
  );
};
