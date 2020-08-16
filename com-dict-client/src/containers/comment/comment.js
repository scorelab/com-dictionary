import React from "react";
import "../home/home.css";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
import Comments from "../../components/Comments";
import FooterPage from "../../components/Footer/FooterPage";

const { Header, Footer, Content } = Layout;

function CommentWord(props) {
  console.log(props);
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <Comments data={props.history.location.state.data} />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default CommentWord;
