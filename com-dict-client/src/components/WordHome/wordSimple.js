import React, { useState, useEffect } from "react";
import { Typography, Card, Row, Col, Divider, Button } from "antd";
import {
  SoundOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import SocialShare from "./socialShare";
import moment from "moment";
const { Title, Text } = Typography;

function WordSimple(props) {
  const {
    head_term,
    likes,
    dislikes,
    other_language,
    other_language_def,
    other_language_term,
    example,
    uname,
    createdAt,
    // user_id,
    pronunciation,
    word_classes,
  } = props.data;

  return (
    <Card bordered className="word_index">
      <Row>
        <Col span={24}>
          <Title level={2}>
            {moment(createdAt.toDate()).format("dddd, MMMM Do YYYY")}
          </Title>
        </Col>
        <Divider></Divider>
      </Row>

      <Row>
        <Col lg={6} md={6} sm={6} xs={8} style={{ textAlign: "left" }}>
          <Title level={2}>{head_term}</Title>
        </Col>

        <Col lg={8} md={8} sm={8} xs={16} style={{ textAlign: "center" }}>
          {/* {other_language_id} */}
        </Col>

        <Col lg={10} md={10} sm={10} xs={24} style={{ textAlign: "right" }}>
          <SocialShare />
        </Col>
      </Row>
      <Row>
        <Text>{other_language}</Text>
        <Divider type="vertical" flex style={{ height: "4vmin" }}></Divider>
        <Text>{word_classes.map((val, i) => `${val} `)}</Text>
        <Divider flex type="vertical" style={{ height: "4vmin" }}></Divider>
        <SoundOutlined
          onClick={() => new Audio(pronunciation).play()}
          style={{ fontSize: "14pt" }}
        />
      </Row>

      <Row style={{ paddingTop: "2vmin" }}>
        <Title level={2}>{other_language_term}</Title>
      </Row>

      <Row style={{ paddingTop: "2vmin" }}>
        <Text>{other_language_def}</Text>
      </Row>
      <Row style={{ paddingTop: "2vmin" }}>
        <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
          {example}
        </Text>
      </Row>

      <Row style={{ paddingTop: "2vmin" }}>
        <Text style={{ flexDirection: "row" }}>
          Created by <Text style={{ fontWeight: "bold" }}>{uname} </Text>on{" "}
          <Text style={{ fontWeight: "bold" }}>
            {moment(createdAt.toDate()).format("dddd, MMMM Do YYYY")}
          </Text>
        </Text>
      </Row>
      <Row style={{ paddingTop: "2vmin", paddingLeft: "10vmin" }}>
        <Col xl={2} lg={2} md={2} sm={2}></Col>
        <Col xl={4} lg={4} md={4} sm={4} style={{ textAlign: "center" }}>
          <LikeOutlined style={{ fontSize: "4vmin" }} />
          <Text>{likes}</Text>
        </Col>
        <Col xl={1} lg={1} md={1} sm={1}>
          <Divider
            type="vertical"
            style={{
              height: "4vmin",
            }}
          ></Divider>
        </Col>
        <Col xl={4} lg={4} md={4} sm={4} style={{ textAlign: "center" }}>
          <DislikeOutlined style={{ fontSize: "4vmin" }} />
          <Text>{dislikes}</Text>
        </Col>
        <Col xl={0} lg={0} md={13} sm={13}></Col>
        <Col xl={13} lg={13} md={24} sm={24} style={{ textAlign: "right" }}>
          {/* <Button type="link" style={{ color: "green" }}>
            Comment
          </Button> */}
          <Button type="link" style={{ color: "red" }}>
            <Link to="/report">Report</Link>
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default WordSimple;
