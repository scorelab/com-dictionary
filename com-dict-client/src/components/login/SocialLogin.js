import React from "react";
import { Typography, Button, Row, Col } from "antd";
import {
  FacebookFilled,
  TwitterOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

function SocialLogin() {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Text strong>Login using your social media account</Text>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xl={8} lg={8} md={24} sm={24} xs={24} style={{ textAlign: "center" }}>
          <Button
            className="social_btn"
            style={{ backgroundColor: "#0284E1", width:"100%" }}
            icon={<FacebookFilled />}
            // size="large"
          >
            Facebook
          </Button>
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24} style={{ textAlign: "center" }}>
          <Button
            className="social_btn"
            style={{ backgroundColor: "#64CFF6",width:"100%"}}
            icon={<TwitterOutlined />}
            // size="large"
          >
            Twitter
          </Button>
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24} style={{ textAlign: "center" }}>
          <Button
            className="social_btn"
            style={{ backgroundColor: "#F4414B",width:"100%"}}
            icon={<GoogleOutlined />}
            // size="large"
          >
            Google
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default SocialLogin;
