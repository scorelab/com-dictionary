import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import {
  InfoCircleOutlined,
  LockOutlined,
  FileTextOutlined,
  BugOutlined,
  GithubOutlined,
  ExclamationCircleOutlined,
  PhoneOutlined,
  UnorderedListOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "../../containers/home/footer.css";

const { Title } = Typography;

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <Row justify="space-around">
          <Col xl={8} lg={6} md={24} sm={24} xs={24}>
            <Title level={2}>Community Dictionary</Title>
            <Title level={4}>Your everyday online dictionary</Title>
          </Col>
          <Col xl={6} lg={6} md={24} sm={24} xs={24}>
            <div className="footer-center">
              <h2>About</h2>
              <Row>
                <Col span={2}>
                  <InfoCircleOutlined />
                </Col>
                <Col span={22}>
                  <Link to="#" className="link">
                    About Community Dictionary
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <LockOutlined />
                </Col>
                <Col span={22}>
                  <Link to="#" className="link">
                    Privacy and Security
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <FileTextOutlined />
                </Col>
                <Col span={22}>
                  <Link to="#" className="link">
                    Terms and Conditions
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={4} lg={6} md={24} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Help</h2>
              <Row>
                <Col span={2}>
                  <UnorderedListOutlined />
                </Col>
                <Col span={22}>
                  <Link to="#" className="link">
                    FAQ
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <BugOutlined />
                </Col>
                <Col span={22}>
                  <Link to="#" className="link">
                    Bug Report
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <GithubOutlined />
                </Col>
                <Col span={22}>
                  <Link to="#" className="link">
                    GitHub
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <ExclamationCircleOutlined />
                </Col>
                <Col span={22}>
                  <Link to="#" className="link">
                    Issues
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={4} lg={6} md={24} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Contact Us</h2>
              <Row>
                <Col span={2}>
                  <PhoneOutlined />
                </Col>
                <Col span={22}>
                  <Link to="#" className="link">
                    +94 XXXXXXXXX
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <MailOutlined />
                </Col>
                <Col span={22}>
                  <Link to="#" className="link">
                    XXXXXXXX@gmail.com
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <EnvironmentOutlined />
                </Col>
                <Col span={22}>
                  <Link to="#" className="link">
                    Location
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={24} sm={24}>
          <span style={{ textAlign: "center" }}>Copyright © SCoReLab</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
