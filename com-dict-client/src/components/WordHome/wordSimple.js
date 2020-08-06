import React, { useState, useEffect } from "react";
import { Typography, Card, Row, Col, Divider, Button } from "antd";
import {
  SoundOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import SocialShare from "./socialShare";
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
  }, [firestore, headTerms, head_term_id, other_language_id]);

  return (
    
      <Row>
        <Col span={2}>
          <div id ="date-rotate">
            <Text style={{fontSize:'5vmin',fontWeight:'bolder'}}>Word of the Day</Text>
          </div>
        </Col>
        
        <Col span={20}>
        <Card bordered className="word_index">
        <Row>
        <Col span={18}>
          <Title level={4}>13 of June 2020</Title>
        </Col>
        <Col xl={6} lg={6} md={6} sm={6} xs={6} style={{ textAlign: "right" }}>
          <SocialShare />
        </Col>
      </Row>
      <Row>
        <Col lg={24} md={24} sm={24} xs={24} style={{ textAlign: "left" }}>
          <Title style={{color:"#639bb4"}}>{other_language_term}</Title>
        </Col>

        <Col lg={8} md={8} sm={8} xs={16} style={{ textAlign: "center" }}>
          {other_language_id}
        </Col>

        {/* <Col lg={10} md={10} sm={10} xs={24} style={{ textAlign: "right" }}>
          <SocialShare />
        </Col> */}
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
{/* 
      <Row style={{ paddingTop: "2vmin" }}>
        <Title level={2} style={{color:"#639bb4"}}>{other_language_term}</Title>
      </Row> */}

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
          {createdAt.toDate().getFullYear() +
            "/" +
            (createdAt.toDate().getMonth() + 1) +
            "/" +
            createdAt.toDate().getDate()}
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
          <Button type="link" style={{ color: "green" }}>
          <Link to="/comment">Comment</Link>
          </Button>
          <Button type="link" style={{ color: "red" }}>
            <Link to="/report">Report inappropriate</Link>
          </Button>
        </Col>
      </Row>
      </Card>
      </Col>
      <Col span={2}></Col>
      


    </Row>
  );
}

export default WordSimple;
