import React from "react";

import { Layout,Text,Detail } from "./styled";
import { AppLayout } from "../../layouts";

export const TOS = () => {
  return (
    <AppLayout>
      <Layout>
        <Text>Terms of service</Text>
        <Detail>
          Using this website means that you agree to use this website to test
          for your own website, or have explicit permission from the owner of
          the site to use this tool.
          
          This service is designed for educational purposes ONLY, receipts should only be used locally on your own
          machine and not shared.
          
          You are solely responsible (you the user of this website) for any documents/receipts or content you download.
          
          You agree not to use this service for any illegal or immoral purposes.
          
          Everything on this website is for educational purposes.
        </Detail>
      </Layout>
    </AppLayout>
  );
};
