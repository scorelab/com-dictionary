import React from "react";
import "./home.css";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
import FooterPage from "../../components/Footer/FooterPage";
import FullTextSearch from "../../components/Search";
const { Header, Footer, Content } = Layout;

function HomePage(props) {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <FullTextSearch />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default HomePage;
