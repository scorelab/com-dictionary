import React from "react";
import "./home.css";
import "./arrow.css";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
import WordHome from "../../components/WordHome";
import FooterPage from "../../components/Footer/FooterPage";

const { Header, Footer, Content } = Layout;

function HomePage() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <WordHome />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default HomePage;
