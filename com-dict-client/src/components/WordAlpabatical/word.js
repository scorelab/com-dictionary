import React from "react";
import { Typography, Card, Row, Col, Divider, Button } from "antd";
import {
  SoundOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import SocialShare from "../WordHome/socialShare";
import moment from "moment";
const { Title, Text } = Typography;

function WordCutom(props) {
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

  const history = useHistory();

  return (
    <Row>
      <Col span={20}>
        <Card bordered className="word_index">
          <Row>
            <Col span={18}>
              <Title level={4}>{head_term}</Title>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={6}
              style={{ textAlign: "right" }}
            >
              <SocialShare />
            </Col>
          </Row>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24} style={{ textAlign: "left" }}>
              <Title style={{ color: "#639bb4" }}>{other_language_term}</Title>
            </Col>
            {/* <Col lg={24} md={24} sm={24} xs={24} style={{ textAlign: "left" }}>
              <Title style={{ color: "#639bb4" }}>{other_language_term}</Title>
            </Col> */}

            {/* <Col lg={10} md={10} sm={10} xs={24} style={{ textAlign: "right" }}>
          <SocialShare />
        </Col> */}
          </Row>
          <Row>
            <Text>{other_language}</Text>
            <Divider type="vertical" style={{ height: "4vmin" }}></Divider>
            <Text>{word_classes.map((val, i) => `${val} `)}</Text>
            <Divider type="vertical" style={{ height: "4vmin" }}></Divider>
            <SoundOutlined
              onClick={() => new Audio(pronunciation).play()}
              style={{ fontSize: "14pt" }}
            />
          </Row>
          {/* 
      <Row style={{ paddingTop: "2vmin" }}>
        <Title level={2} style={{color:"#639bb4"}}>{other_language_term}</Title>
      </Row> */}

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
              <Button
                onClick={() => history.push("/comment", { data: props.data })}
                type="link"
                style={{ color: "green" }}
              >
                Comment
              </Button>
              <Button
                onClick={() => history.push("/report", { data: props.data })}
                type="link"
                style={{ color: "red" }}
              >
                Report
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={2}></Col>
    </Row>
  );
}

export default WordCutom;
