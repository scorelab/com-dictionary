import React from "react";
import {
  // Typography,
  // Card,
  Row,
  Col,
  // Divider,
  // Button,
} from "antd";
import Word from "../dictionaryView/word_summary";
import Reply from "./reply_editor";
import CommentDisplay from "./comment_list";
// const { Title } = Typography;

function comment_section() {
  return (
  <div>
    <Row style={{paddingBottom:"2vmin"}}>
      <Col span={24}>
        <Word />
      </Col>
    </Row>
    <div style={{backgroundColor: "#f2f2f2"}}>
    <Row>
      <Col span={2}></Col>
      <Col span={18}>
        <Reply />
      </Col>
      <Col span={4}></Col>
    </Row>
    <Row>
      <Col span={5}></Col>
      <Col span={19}>
        <CommentDisplay />
      </Col>

    </Row>
    </div>
    </div>
  );
}

export default comment_section;
