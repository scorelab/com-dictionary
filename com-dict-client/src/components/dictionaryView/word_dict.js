// import React from "./node_modules/react";
import React from "./node_modules/react";
import {
  Typography,
  Card,
  Row,
  Col,
  Divider,
  Button,
} from "./node_modules/antd";

import {
  SoundOutlined,
  LikeOutlined,
  DislikeOutlined,
  PlusCircleOutlined,
} from "./node_modules/@ant-design/icons";

import SelectLang from "../Home/SelectLang";
import SocialShare from "../WordAlpabatical/socialShare";

const { Title, Text } = Typography;

function Word() {
  return (
    <div>
      <Row>
        <Col xl={2} lg={2} md={0} sm={0} xs={0}></Col>
        <Col xl={20} lg={20} md={24} sm={24} xs={24}>
          <Card bordered>
            <Row>
              <Col xl={18} lg={18} md={24} sm={24} xs={24}>
                <Row>
                  <Col
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    style={{ textAlign: "left" }}
                  >
                    <Title level={5}>Word</Title>
                  </Col>

                  <Col
                    xl={0}
                    lg={0}
                    md={12}
                    sm={12}
                    xs={12}
                    style={{ textAlign: "right" }}
                  >
                    <SelectLang />
                  </Col>

                  <Col
                    xl={12}
                    lg={12}
                    md={24}
                    sm={24}
                    xs={24}
                    style={{ textAlign: "right" }}
                  >
                    <SocialShare />
                  </Col>
                </Row>
                <Row>
                  <Text>English</Text>
                  <Divider
                    type="vertical"
                    flex
                    style={{ height: "5vmin" }}
                  ></Divider>
                  <Text>Noun</Text>
                  <Divider
                    flex
                    type="vertical"
                    style={{ height: "5vmin" }}
                  ></Divider>
                  <SoundOutlined style={{ fontSize: "4vmin" }} />
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
                <Row style={{ paddingTop: "3vmin" }}>
                  <Col xl={2} lg={2} md={6} sm={6} xs={6}></Col>
                  <Col
                    xl={10}
                    lg={10}
                    md={18}
                    sm={18}
                    xs={18}
                    style={{ textAlign: "left" }}
                  >
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
                  <Col xl={0} lg={0} md={6} sm={6} xs={6}></Col>
                  <Col
                    xl={12}
                    lg={12}
                    md={18}
                    sm={18}
                    xs={18}
                    style={{ textAlign: "right" }}
                  >
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
                  <Title level={4}>Related Words</Title>
                </Row>
                <Divider flex></Divider>
              </Col>
              <Col xl={1} lg={1} md={0} sm={0} xs={0}>
                <Divider type="vertical" style={{ height: "100%" }}></Divider>
              </Col>

              <Col xl={5} lg={5} md={24} sm={24} xs={24}>
                <Row>
                  <Col span={12} style={{ textAlign: "right" }}>
                    <Text style={{ fontSize: "large" }}>
                      Available translations
                    </Text>
                  </Col>

                  <Col span={12} style={{ textAlign: "center" }}>
                    <PlusCircleOutlined style={{ fontSize: "5vmin" }} />
                  </Col>

                  <Divider></Divider>
                </Row>
                <Row>
                  <Col span={12} style={{ textAlign: "center" }}>
                    <Text>Language</Text>
                  </Col>
                  <Col span={12} style={{ textAlign: "center" }}>
                    <Text>Link to translation</Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={2} xl={2} lg={2} md={0} sm={0} xs={0}></Col>
      </Row>
    </div>
  );
}

export default Word;
