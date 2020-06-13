import React from 'react';
import './home.css';
import { Layout } from 'antd';
import TitleBar from "../../components/navbar/TitleBar"
import WordSearch from "../../components/home/WordSearch"
import AlphaIndex from "../../components/home/AlphaIndex"
import DayNew from "../../components/home/DayNew"
import FooterPage from "../../components/footer/FooterPage"

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
