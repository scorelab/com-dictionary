import React, { useState } from "react";
import { Typography, Card, Row, Col, Divider, Button } from "antd";
import {
  SoundOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import SelectLang from "../Search/SelectLang";
import SocialShare from "./SocialShare";
import HTMLFlipBook from "react-pageflip";
import WordHome from "./index";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
const { Title, Text } = Typography;

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}> /* ref required */
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

function WordBook(props) {
  return (
    <HTMLFlipBook 
        width={700}
        height={750}
      size="stretch"
      autoSize={true}
      minWidth={315}
      maxWidth={1000}
      minHeight={750}
      maxHeight={1533}
      maxShadowOpacity={0.5}
      // showCover={true}
      mobileScrollSupport={true}

    className="book">
      <Page number="1"><WordHome /></Page>
      <Page number="2"><WordHome /></Page>
      <Page number="3">Page text</Page>
      <Page number="4">Page text</Page>
    </HTMLFlipBook>
  );
}

export default WordBook;