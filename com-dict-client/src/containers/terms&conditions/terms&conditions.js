import { Layout } from "antd";
import React from "react";

import TitleBar from "../../components/Header";
import FooterPage from "../../components/Footer/FooterPage";
import TermsConditions from "../../components/Terms&Conditions";
import "./terms&conditions.css";
const { Header, Footer, Content } = Layout;
function TermsAndConditions() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="termscondtionsContent">
        <TermsConditions/>
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default TermsAndConditions;
