import React from "react";
import "../home/home.css";
import "./passwordrest.css";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
import Passwordrest from "../../components/PasswordRest/PasswordRest";
import FooterPage from "../../components/Footer/FooterPage";

const { Header, Footer, Content } = Layout;

function PasswordRest() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <Passwordrest />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default PasswordRest;
