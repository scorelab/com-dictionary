import React from "react";
import {
  Typography,
  // Card,
  Row,
  Col,
  // Divider,
  // Button,
} from "antd";
import WordNew from "../WordHome/Word_new";
import Reply from "./reply_editor";
import CommentDisplay from "./comment_list";
const { Title } = Typography;

function comment_section() {
  return (
    <Row>
      <Col span={24}>
      <WordNew />
      </Col>
      <Col span={18}>
      <Reply />
      </Col>
      <Col span={24}>
      <CommentDisplay />
      </Col>
      
    </Row>
  );
}

export default comment_section;
