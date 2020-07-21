// import React from "./node_modules/react";
import React from "react";
import { Typography, Card, Row, Col, Divider, Button } from "antd";
// } from "./node_modules/antd";
// import SocialShare from "./SocialShare";
import {
  SoundOutlined,
  LikeOutlined,
  DislikeOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
// } from "./node_modules/@ant-design/icons";
import SelectLang from "../Search/SelectLang";
import SocialShare from "./SocialShare";

const { Title, Text } = Typography;

function Word() {
  return (
    <Row>
<<<<<<< HEAD
      <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
      <Col xl={22} lg={22} md={24} sm={24} xs={24}>
        <Card bordered>
          <Col xl={19} lg={19}>
            <Row>
              <Col xl={12} lg={12} style={{ textAlign: "left" }}>
                <Title level={5}>Word</Title>
              </Col>
=======
    <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
    <Col xl={22} lg={22} md={24} sm={24} xs={24}>
    <Card bordered>
    <Col xl={19} lg={19}>
      <Row>
          <Col xl={12} lg={12} style={{ textAlign: "left" }}>
            <Title level={5} >Word</Title>
          </Col>
>>>>>>> e625349a589bde16508b9448e56021c08cd0493f

              <Col xl={0} lg={0} style={{ textAlign: "center" }}>
                <SelectLang />
              </Col>

<<<<<<< HEAD
              <Col xl={12} lg={12} style={{ textAlign: "right" }}>
                <SocialShare />
              </Col>
            </Row>

            <Row align="middle">
              <Text>English</Text>
=======
          <Col xl={12} lg={12} style={{ textAlign: "right" }}>
            <SocialShare />
          </Col>
        </Row>
        
        <Row align="middle">
              <Text >English</Text>
>>>>>>> e625349a589bde16508b9448e56021c08cd0493f
              <Divider
                type="vertical"
                flex
                style={{ height: "4vmin" }}
              ></Divider>
              <Text>Noun</Text>
              <Divider
                flex
                type="vertical"
                style={{ height: "4vmin" }}
              ></Divider>
              <SoundOutlined style={{ fontSize: "3vmin" }} />
            </Row>
            <Row style={{ paddingTop: "2vmin" }}>
              <Text style={{ color: "#C3C6C6" }}>Definition</Text>
            </Row>
            <Row style={{ paddingTop: "2vmin" }}>
              <Text style={{ color: "#C3C6C6" }}>Example on usage</Text>
            </Row>
            <Row style={{ paddingTop: "2vmin" }}>
              <Text style={{ color: "#C3C6C6" }}>
                Created by "user" on "date"
              </Text>
            </Row>

            <Row style={{ paddingTop: "2vmin", paddingLeft: "10vmin" }}>
              <Col xl={9} style={{ textAlign: "left" }}>
                <Text style={{ marginRight: "1vmin" }}>#_Likes</Text>
                <LikeOutlined style={{ fontSize: "4vmin" }} />
                <Divider
                  flex
                  type="vertical"
                  style={{
                    height: "4vmin",
                    marginLeft: "2vmin",
                    marginRight: "2vmin",
                  }}
                ></Divider>
                <DislikeOutlined style={{ fontSize: "4vmin" }} />
                <Text style={{ marginLeft: "1vmin" }}>#_Dislikes</Text>
              </Col>

              <Col xl={15} style={{ textAlign: "right" }}>
                <Button type="link" style={{ color: "green" }}>
                  Comment
                </Button>
                <Button type="link" style={{ color: "red" }}>
                  Report inappropriate
                </Button>
              </Col>
            </Row>

            <Divider flex></Divider>
            <Row>
              <Title level={3} style={{ color: "#12aad4" }}>
                Related Words
              </Title>
            </Row>
          </Col>

          <Col span={1}>
            <Divider type="vertical" style={{ height: "100%" }}></Divider>
          </Col>

          <Col>
            <Row>
              <Text style={{ fontSize: "large" }}>Available translations</Text>
              <PlusCircleOutlined
                style={{ fontSize: "4vmin", marginLeft: "4vmin" }}
              />
              <Divider></Divider>
            </Row>
            <Row>
              <Col xl={12}>
                <Text>Language</Text>
              </Col>
              <Col xl={12}>
                <Text>Link to translation</Text>
              </Col>
            </Row>
          </Col>
        </Card>
      </Col>

      <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
    </Row>
  );
}

export default Word;
