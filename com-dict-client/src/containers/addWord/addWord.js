import React from "react";
import "../home/home.css";
import "./addWord.css";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
import WordForm from "../../components/AddWord";
import FooterPage from "../../components/Footer/FooterPage";

const { Header, Footer, Content } = Layout;

function AddWord() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <WordForm />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default AddWord;
