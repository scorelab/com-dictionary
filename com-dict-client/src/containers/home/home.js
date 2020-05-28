import React from 'react';
import './home.css';
import { Layout } from 'antd';
import TitleBar from "../../components/TitleBar"
import WordSearch from "../../components/WordSearch"
import AlphaIndex from "../../components/AlphaIndex"
import DayNew from "../../components/DayNew"
import FooterPage from "../../components/FooterPage"

const {Header,Footer, Content } = Layout;

function HomePage() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <WordSearch />
        <AlphaIndex />
        <DayNew />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
  </Layout>
  );
}

export default HomePage
