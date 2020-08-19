import React from "react";
import { Typography, Card, Row, Col, Divider } from "antd";

// import { SoundOutlined } from "@ant-design/icons";
// import moment from "moment";

const { Title, Text } = Typography;

function Word({ data }) {
  return (
    <div>
      <Row>
        <Col xl={4} lg={2} md={0} sm={0} xs={0}></Col>
        <Col xl={16} lg={20} md={24} sm={24} xs={24}>
          <Card>
            <Row>
              <Col span={18}>
                <Title level={4}>{data.head_term}</Title>
              </Col>
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <Row>
                  <Col
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    style={{ textAlign: "left" }}
                  >
                    <Title level={1} style={{}}>
                      {data.head_term}
                    </Title>
                  </Col>
                </Row>
                <Row>
                  <Text>{data.other_language}</Text>
                  <Divider
                    type="vertical"
                    flex="true"
                    style={{ height: "5vmin" }}
                  ></Divider>
                  {data.word_classes.map((val, i) => (
                    <Text key={i}>{val} </Text>
                  ))}
                  <Divider
                    flex="true"
                    type="vertical"
                    style={{ height: "5vmin" }}
                  ></Divider>
                  {/* <SoundOutlined style={{ fontSize: "4vmin" }} /> */}
                </Row>

                <Row style={{ paddingTop: "2vmin" }}>
                  <Text style={{ color: "#C3C6C6" }}>
                    {data.other_language_def}
                  </Text>
                </Row>
                <Row style={{ paddingTop: "2vmin" }}>
                  <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
                    {data.example}
                  </Text>
                </Row>
                <Row style={{ paddingTop: "2vmin" }}>
                  <Text style={{ flexDirection: "row" }}>
                    Created by{" "}
                    <Text style={{ fontWeight: "bold" }}>{data.uname} </Text>
                    {/* <Text style={{ fontWeight: "bold" }}>
                      {moment(data.createdAt).format("dddd, MMMM Do YYYY")}
                    </Text> */}
                  </Text>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Word;
