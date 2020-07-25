import React from "react";
import { Typography, Card, Row, Col, Divider } from "antd";
import {
  SoundOutlined,
  //   LikeOutlined,
  //   DislikeOutlined,
} from "@ant-design/icons";
// import { useSelector } from "react-redux";
// import { useFirestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
const { Text } = Typography;

function wordDay() {
  //   const {
  //     head_term_id,
  //     likes,
  //     dislikes,
  //     other_language_id,
  //     other_language_def,
  //     other_language_term,
  //     example,
  //     tags,
  //     createdAt,
  //     user_id,
  //     pronunciation,
  //   } = props.data;

  //   useFirestoreConnect([
  //     {
  //       type: "child_changed",
  //       collection: "headTerms",
  //       queryParams: ["limit==1"],
  //       where: [["head_term_id", "==", `${head_term_id}`]],
  //     },
  //     {
  //       type: "child_changed",
  //       collection: "languages",
  //       where: [["language_id", "==", `${other_language_id}`]],
  //     },
  //   ]);
  //   const headTerms = useSelector((state) => state.firestore.ordered.headTerms);
  //   console.log(headTerms);

  //   const otherLanguages = useSelector(
  //     (state) => state.firestore.ordered.languages
  //   );
  //   console.log(otherLanguages);

  return (
    <>
      <div
        style={{ backgroundColor: "#7dbf94", width: "100%", padding: "10vmin" }}
      >
        <Row align="middle">
          <Col xl={3} lg={3} md={0} sm={0} xs={0}></Col>
          <Col xl={8} lg={8} md={0} sm={0} xs={0}>
            <Row>
              <Col style={{ textAlign: "right" }}>
                <Text
                  style={{
                    textAlign: "right",
                    fontSize: "6vmin",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  WORD OF THE DAY
                </Text>
              </Col>
            </Row>
            <Row>
              <Text
                style={{ float: "right", fontSize: "3vmin", color: "white" }}
              >
                Build your vocabulary with new words, definitions, and origin
                stories every day of the week.
              </Text>
            </Row>
          </Col>
          <Row>
            <Col xl={0} lg={0} md={24} sm={24} xs={24}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "4vmin",
                  color: "white",
                }}
              >
                WORD OF THE DAY
              </Text>
            </Col>
          </Row>
          <Col></Col>
          <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
          <Col xl={10} lg={10} md={24} sm={24} xs={24}>
            <Row>
              <Col span={24}>
                <Card
                  bordered
                  style={{
                    border: "solid",
                    borderWidth: "2vmin",
                    borderColor: "#f2f2f2",
                    width: "100%",
                    padding: "2vmin",
                  }}
                >
                  <Row>
                    <Text
                      style={{
                        fontSize: "6vmin",
                        color: "#7dbf94",
                        fontWeight: "bold",
                      }}
                    >
                      Word
                    </Text>
                  </Row>
                  <Row style={{ paddingTop: "3vmin" }}>
                    <Text style={{ fontSize: "2.5vmin", fontWeight: "bold" }}>
                      Language
                    </Text>
                    <Divider
                      type="vertical"
                      flex
                      style={{ height: "4vmin" }}
                    ></Divider>
                    <Text style={{ fontSize: "2.5vmin", fontWeight: "bold" }}>
                      Noun
                    </Text>
                    <Divider
                      flex
                      type="vertical"
                      style={{ height: "4vmin" }}
                    ></Divider>
                    <SoundOutlined
                      style={{ fontSize: "3.5vmin", fontWeight: "bold" }}
                    />
                  </Row>
                  <Row style={{ paddingTop: "4vmin" }}>
                    <Col xl={16} lg={16} md={16} sm={24} xs={24}>
                      <Link to="/">
                        <Text
                          style={{
                            color: "#df815a",
                            fontSize: "2.5vmin",
                            fontWeight: "bold",
                          }}
                        >
                          See definitions and examples
                        </Text>
                      </Link>{" "}
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                      <Text
                        style={{
                          fontSize: "2.5vmin",
                          fontWeight: "bold",
                          float: "right",
                        }}
                        span={12}
                      >
                        23rd July 2020
                      </Text>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
      <wordCarousel />
    </>
  );
}

export default wordDay;
