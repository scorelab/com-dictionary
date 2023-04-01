import React from "react";
import "../home/home.css";
import "./contactUs.css";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
import ContactUS from "../../components/ContactUS";
import FooterPage from "../../components/Footer/FooterPage";

const { Header, Footer, Content } = Layout;

function ContactUs() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <ContactUS/>
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default ContactUs;