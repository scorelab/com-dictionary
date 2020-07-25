import React from "react";
import "../home/home.css";
import "./letterDict.css";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
// import LetterHead from "../../components/WordAlpabatical/letterHead";
import AlphaIndex from "../../components/WordAlpabatical";
import FooterPage from "../../components/Footer/FooterPage";
// import Word from "../../components/dictionaryView/word_dict";
import Word from "../../components/WordHome/word";

const { Header, Footer, Content } = Layout;

function LetterBased() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <AlphaIndex />
        <Word />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default LetterBased;
