import React from "react";
import "../home/home.css";
import "./signup.css";
import { Layout } from "antd";
import TitleBar from "../../components/Navbar/TitleBar";
import Signup from "../../components/Signup/SignUp";
import FooterPage from "../../components/Footer/FooterPage";

const { Header, Footer, Content } = Layout;

function SignUp() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <Signup />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default SignUp;
