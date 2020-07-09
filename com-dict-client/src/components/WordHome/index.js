import React, { useState, useEffect } from "react";
import { Typography, Card, Row, Col, Divider, Button, Pagination } from "antd";
// import {
//   SoundOutlined,
//   LikeOutlined,
//   DislikeOutlined,
// } from "@ant-design/icons";
// import SelectLang from "../Search/SelectLang";
// import SocialShare from "./SocialShare";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import WordSimple from "./wordSimple";
const { Title, Text } = Typography;

function WordHome() {
  const [page, setPage] = useState(0);
  const size = useState(7);

  useFirestoreConnect([
    {
      type: "child_changed",
      collection: "definitions",
      queryParams: [`limitToLast==${size}`, `startAt==${page}`],
    },
  ]);

  useEffect(() => {}, [page]);

  // Fetch data
  const words = useSelector((state) => state.firestore.ordered.definitions);

  return (
    <>
      <Row>
        <Col lg={4} md={0} sm={0}></Col>
        <Col lg={12} md={24} sm={24} xs={24}>
          {words && words.map((val, i) => <WordSimple data={val} />)}
        </Col>
        <Col lg={1} md={0} sm={0}></Col>

        <Col lg={6} md={24} sm={24} xs={24}>
          <Card className="trending">
            <Row justify="space-around">
              <Title level={3}>Trending Words</Title>
            </Row>
            <Row>
              <Divider></Divider>
            </Row>
          </Card>
        </Col>

        <Col lg={1} md={0} sm={0}></Col>
      </Row>
      <Row style={{ paddingTop: "2vmin"}}>
        <Col lg={4} md={0} sm={0}></Col>
        <Col lg={12} md={24} sm={24} xs={24} style={{textAlign:"center"}}>
          <Pagination
            defaultCurrent={1}
            total={words && words.length}
            onChange={(page, pageSize) => setPage(page)}
          />
        </Col>
        {/* <Col lg={4} md={4} sm={4}></Col> */}
      </Row>
    </>
  );
}

export default WordHome;
