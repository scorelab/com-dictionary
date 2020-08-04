import React from "react";
import {
  Typography,
  // Card,
  Row,
  Col,
  // Divider,
  // Button,
} from "antd";
import WordSimple from "../WordHome/wordSimple";
import Reply from "./reply_editor";
import CommentDisplay from "./comment_list";
const { Title } = Typography;

function comment_section() {
  return (
    <Row>
      <Col span={24}>
      <WordSimple />
      </Col>
      <Col span={22}>
      <Reply />
      </Col>
      <Col span={24}>
      <CommentDisplay />
      </Col>
      
    </Row>
  );
}

export default comment_section;
