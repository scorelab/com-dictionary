import React from "./node_modules/react";
import { Input, Row, Col, Typography, List, Radio } from "./node_modules/antd";
import report from "../images/pablo-word-remove.png";
import Word from "../WordHome/word";
import Report_word from "./report_cats";

const { Title } = Typography;

const data = [
  "Are inside jokes with no context",
  "Include terms that don’t actually seem real",
  "Include full names or other personal information",
  "Include hate speech, bullying, or any other statements meant to discriminate or incite violence against others",
  "Go against any of our other content guidelines",
];

function FlagWord() {
  return (
    <>
      <Title level={1}>Report inappropriate definitions</Title>

      <Row>
        <Col span={24}>
          <Title level={3}>You can report words that....</Title>
        </Col>
        <Row>
          <Col span={6} style={{ textAlign: "center" }}>
            <img
              class="remove_anime"
              style={{ maxWidth: "100%", height: "auto" }}
              src={report}
            />
          </Col>
          <Col span={18}>
            <List
              style={{ float: "right" }}
              // size="large"
              dataSource={data}
              renderItem={(item) => (
                <List.Item style={{ fontSize: "medium" }}>{item}</List.Item>
              )}
            />
          </Col>
        </Row>
      </Row>
      <Row>
        <Col span={24}>
          <Title level={3}>You chose to report...</Title>
        </Col>
        <Col span={24}>
          <Word />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Title level={4}>Why should this conent be removed?</Title>
        </Col>
      </Row>

      <Report_word />
    </>
  );
}

export default FlagWord;
