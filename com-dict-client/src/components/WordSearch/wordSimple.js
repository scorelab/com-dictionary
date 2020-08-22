import React, { useState, useEffect } from "react";
import { Typography, Card, Row, Col, Divider, Button } from "antd";
import {
  SoundOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
// import SelectLang from "../Search/SelectLang";
import SocialShare from "./SocialShare";
// import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
const { Title, Text } = Typography;

function WordSimple(props) {
  const firestore = useFirestore();
  const {
    head_term_id,
    likes,
    dislikes,
    other_language_id,
    other_language_def,
    other_language_term,
    example,
    // tags,
    createdAt,
    user_id,
    pronunciation,
  } = props.data;

  const [headTerms, setHeadTerms] = useState(undefined);
  const [otherLanguages, setOtherLanguages] = useState(undefined);
  const [otherLanguage, setOtherLanguage] = useState(undefined);
  console.log(props.data);
  useEffect(() => {
    firestore
      .collection("headTerms")
      .where("head_term_id", "==", `${head_term_id}`)
      .get()
      .then((result) => {
        result.forEach((doc) => {
          console.log(doc.data());
          setHeadTerms(doc.data());
        });
      });
    firestore
      .collection("languages")
      .where("language_id", "==", `${other_language_id}`)
      .get()
      .then((result) => {
        result.forEach((doc) => {
          console.log(doc.data());
          setOtherLanguage(doc.data());
        });
      });
    firestore
      .collection("languages")
      .where("language_id", "in", headTerms ? headTerms.available_langs : ["1"])
      .get()
      .then((result) => {
        result.forEach((doc) => {
          console.log(doc.data());
          setOtherLanguages(doc.data());
        });
      });
  }, []);

  return (
    <Card hoverable bordered className="word_index">
      <Row>
        <Col span={24}>
          <Title level={3}>Word of the Day - 13 of June 2020</Title>
        </Col>
        <Divider></Divider>
      </Row>

      <Row>
        <Col lg={6} md={6} sm={6} xs={8} style={{ textAlign: "left" }}>
          <Title level={2}>{headTerms && headTerms.head_term}</Title>
        </Col>

        <Col lg={8} md={8} sm={8} xs={16} style={{ textAlign: "center" }}>
          {/* {other_language_id} */}
        </Col>

        <Col lg={10} md={10} sm={10} xs={24} style={{ textAlign: "right" }}>
          <SocialShare />
        </Col>
      </Row>
      <Row>
        <Text>{otherLanguage && otherLanguage.language}</Text>
        <Divider type="vertical" flex style={{ height: "4vmin" }}></Divider>
        <Text>Noun</Text>
        <Divider flex type="vertical" style={{ height: "4vmin" }}></Divider>
        <SoundOutlined
          onClick={() => new Audio(pronunciation).play()}
          style={{ fontSize: "14pt" }}
        />
      </Row>

      <Row style={{ paddingTop: "2vmin" }}>
        <Title level={2}>{other_language_term}</Title>
      </Row>

      <Row style={{ paddingTop: "2vmin" }}>
        <Text>{other_language_def}</Text>
      </Row>
      <Row style={{ paddingTop: "2vmin" }}>
        <Text>{example}</Text>
      </Row>
      <Row style={{ paddingTop: "2vmin" }}>
        <Text>Available language: </Text>
        {otherLanguages &&
          otherLanguages.map((val, i) => (
            <Text
              key={i}
              style={{ color: "blue", textUnderlinePosition: "under" }}
            >
              {val.language + " "}
            </Text>
          ))}
      </Row>
      <Row style={{ paddingTop: "2vmin" }}>
        <Text>
          Created by {user_id} on{" "}
          {moment(createdAt).format("dddd, MMMM Do YYYY")}
        </Text>
      </Row>
      <Row style={{ paddingTop: "2vmin", paddingLeft: "10vmin" }}>
        <Col xl={2} lg={2} md={2} sm={2}></Col>
        <Col xl={4} lg={4} md={4} sm={4} style={{ textAlign: "center" }}>
          <LikeOutlined style={{ fontSize: "4vmin" }} />
          <Text>{likes}</Text>
        </Col>
        <Col xl={1} lg={1} md={1} sm={1}>
          <Divider
            type="vertical"
            style={{
              height: "4vmin",
            }}
          ></Divider>
        </Col>
        <Col xl={4} lg={4} md={4} sm={4} style={{ textAlign: "center" }}>
          <DislikeOutlined style={{ fontSize: "4vmin" }} />
          <Text>{dislikes}</Text>
        </Col>
        <Col xl={0} lg={0} md={13} sm={13}></Col>
        <Col xl={13} lg={13} md={24} sm={24} style={{ textAlign: "right" }}>
          {/* <Button type="link" style={{ color: "green" }}>
            Comment
          </Button> */}
          <Button type="link" style={{ color: "red" }}>
            Report inappropriate
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default WordSimple;
