import React from "react";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
import FaqsSection from "../../components/Faqs";
import FooterPage from "../../components/Footer/FooterPage";
import "./faqs.css"
const { Header, Footer, Content } = Layout;

function Faqs() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <FaqsSection/>
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default Faqs;
