import React from "react";
import {
  Typography,
  Card,
  Row,
  Col,
  Divider,

} from "antd";

import {
  SoundOutlined,

} from "@ant-design/icons";


const { Title, Text } = Typography;

function Word() {
  return (
    <div>
      <Row>
        <Col xl={4} lg={2} md={0} sm={0} xs={0}></Col>
        <Col xl={16} lg={20} md={24} sm={24} xs={24}>
          <Card>
            <Row>
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
                    <Title level={1} style={{}}>Word</Title>
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
             
                </Col>
                </Row>
            
          </Card>
        </Col>

      </Row>
    </div>
  );
}

export default Word;
