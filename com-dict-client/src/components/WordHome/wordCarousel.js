import React from "react";
import { Carousel, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";

// import "./home.css";

const { Text } = Typography;

function wordCarousel() {
  return (
    <Row>
      <Col span={2}></Col>
      <Col
        xl={4}
        lg={4}
        md={24}
        sm={24}
        xs={24}
        style={{ textAlign: "center" }}
      >
        <Text
          style={{
            fontSize: "3vmin",
            zIndex: "10",
            padding: "2vmin",
            backgroundColor: "#f2f2f2",
          }}
        >
          Trending Words
        </Text>
      </Col>
      <Col xl={16} lg={16} md={24} sm={24} xs={24}>
        <Carousel autoplay speed={8000} dots={false}>
          <div>
            <Row>
              <Col span={6}>
                <Text
                  style={{
                    color: "#639bb4",
                    fontSize: "2.5vmin",
                    fontWeight: "bold",
                  }}
                >
                  <Link to="/">First word</Link>
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  style={{
                    color: "#639bb4",
                    fontSize: "2.5vmin",
                    fontWeight: "bold",
                  }}
                >
                  Second word
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  style={{
                    color: "#639bb4",
                    fontSize: "2.5vmin",
                    fontWeight: "bold",
                  }}
                >
                  Third word
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  style={{
                    color: "#639bb4",
                    fontSize: "2.5vmin",
                    fontWeight: "bold",
                  }}
                >
                  Fourth word
                </Text>
              </Col>
            </Row>
          </div>

          <div>
            <Row>
              <Col span={6}>
                <Text
                  style={{
                    color: "#639bb4",
                    fontSize: "2.5vmin",
                    fontWeight: "bold",
                  }}
                >
                  Fifth word
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  style={{
                    color: "#639bb4",
                    fontSize: "2.5vmin",
                    fontWeight: "bold",
                  }}
                >
                  Sixth word
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  style={{
                    color: "#639bb4",
                    fontSize: "2.5vmin",
                    fontWeight: "bold",
                  }}
                >
                  Seventh word
                </Text>
              </Col>
              <Col span={6}>
                <Text
                  style={{
                    color: "#639bb4",
                    fontSize: "2.5vmin",
                    fontWeight: "bold",
                  }}
                >
                  Eighth word
                </Text>
              </Col>
            </Row>
          </div>
        </Carousel>
      </Col>
      <Col xl={2} lg={2} md={0} sm={0} xs={0}></Col>
    </Row>
  );
}

export default wordCarousel;
