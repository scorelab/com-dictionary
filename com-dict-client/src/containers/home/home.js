import React from "react";
import "./home.css";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
import WordHome from "../../components/WordHome";
import Carousel from "../../components/WordHome/wordCarousel";
import FooterPage from "../../components/Footer/FooterPage";

const { Header, Footer, Content } = Layout;

function HomePage() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <Carousel />
        <WordHome />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default HomePage;