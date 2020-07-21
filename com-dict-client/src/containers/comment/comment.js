import React from "react";
import "../home/home.css";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
import Comments from "../../components/comments"
import FooterPage from "../../components/footer/FooterPage";

const { Header, Footer, Content } = Layout;

function CommentWord() {
    return (
      <Layout>
        <Header className="title_bar">
          <TitleBar />
        </Header>
        <Content className="body">
          <Comments />
        </Content>
        <Footer className="footer_div">
          <FooterPage />
        </Footer>
      </Layout>
    );
  }
  
  export default CommentWord;
  