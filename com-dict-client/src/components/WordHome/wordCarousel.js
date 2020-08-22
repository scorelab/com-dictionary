import React from "react";
import { Carousel, Typography, Row, Col } from "antd";
import { toTitleCase } from "../../utils.js/toTitleCase";
import { useHistory } from "react-router-dom";
// import "./home.css";

const { Text } = Typography;

function WordCarousel({ data }) {
  const history = useHistory();
  return (
    <Row>
      <Col span={2}></Col>
      <Col xl={4} lg={4} md={20} sm={20} xs={20} style={{ textAlign: "left" }}>
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
              {data &&
                data.slice(0, 4).map((val, i) => (
                  <Col key={i} span={6}>
                    <Text
                      style={{
                        color: "#639bb4",
                        fontSize: "2.5vmin",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography.Link
                        onClick={() =>
                          history.push(
                            `/search/English/${toTitleCase(val.head_term)}`
                          )
                        }
                      >
                        {val.head_term}
                      </Typography.Link>
                    </Text>
                  </Col>
                ))}
            </Row>
          </div>
          <div>
            <Row>
              {data &&
                data.slice(4, 10).map((val, i) => (
                  <Col key={i} span={4}>
                    <Text
                      style={{
                        color: "#639bb4",
                        fontSize: "2.5vmin",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography.Link
                        onClick={() =>
                          history.push(
                            `/search/English/${toTitleCase(val.head_term)}`
                          )
                        }
                      >
                        {val.head_term}
                      </Typography.Link>
                    </Text>
                  </Col>
                ))}
            </Row>
          </div>
        </Carousel>
      </Col>
      <Col xl={2} lg={2} md={0} sm={0} xs={0}></Col>
    </Row>
  );
}

export default WordCarousel;
