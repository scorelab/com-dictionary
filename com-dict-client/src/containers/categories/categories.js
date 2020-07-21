import React from "react";
import { Layout } from "antd";
import "./categories.css";
import TitleBar from "../../components/Header";
import FooterPage from "../../components/footer";
import CatHead from "../../components/Categories/catHead";
import CatView from "../../components/Categories/catView";
const { Header, Footer, Content } = Layout;

function Categories() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <CatHead />
        <CatView />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default Categories;
