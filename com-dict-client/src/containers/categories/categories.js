import React from "react";
import { Layout } from "antd";
import "./categories.css";
import TitleBar from "../../components/Header";
import FooterPage from "../../components/Footer/FooterPage";
import AllCats from "../../components/Categories";



const { Header, Footer, Content } = Layout;

function Categories() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <AllCats />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default Categories;
