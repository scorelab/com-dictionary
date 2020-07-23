import React from "react";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
import FooterPage from "../../components/Footer";

// import AlphaIndex from "../../components/AlphaIndex";
const { Header, Footer, Content } = Layout;

function Browse() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">{/* <AlphaIndex /> */}</Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default Browse;
