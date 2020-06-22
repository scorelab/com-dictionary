import React, { useState } from "react";
import { Typography, Card, Row, Col, Divider, Button } from "antd";
import {
  SoundOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
// import SelectLang from "../Search/SelectLang";
import SocialShare from "./socialShare";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

const { Title, Text } = Typography;

function WordSimple(props) {
  const {
    head_term_id,
    likes,
    dislikes,
    other_language_id,
    other_language_def,
    other_language_term,
    example,
    tags,
    createdAt,
    user_id,
    pronunciation,
  } = props.data;

  useFirestoreConnect([
    {
      type: "child_changed",
      collection: "headTerms",
      queryParams: ["limit==1"],
      where: [["head_term_id", "==", `${head_term_id}`]],
    },
    {
      type: "child_changed",
      collection: "users",
      where: [["user_id", "==", `${user_id}`]],
    },
  ]);
  const headTerms = useSelector((state) => state.firestore.ordered.headTerms);
  console.log(headTerms);

  useFirestoreConnect([
    {
      type: "child_changed",
      collection: "languages",
      where: [
        ["language_id", "in", headTerms ? headTerms[0].available_langs : ["1"]],
      ],
    },
  ]);
  const otherLanguages = useSelector(
    (state) => state.firestore.ordered.languages
  );

  const users = useSelector((state) => state.firestore.ordered.users);

  console.log(users);

  return (
    <Card bordered className="word_index">
      {/* <Row>
        <Col span={24}>
          <Title level={3}>Word of the Day - 13 of June 2020</Title>
        </Col>
        <Divider></Divider>
      </Row> */}

      <Row>
        <Col lg={6} md={6} sm={6} xs={8} style={{ textAlign: "left" }}>
          <Title level={2}>{headTerms && headTerms[0].head_term}</Title>
        </Col>

        <Col lg={8} md={8} sm={8} xs={16} style={{ textAlign: "center" }}>
          {/* {other_language_id} */}
        </Col>

        <Col lg={10} md={10} sm={10} xs={24} style={{ textAlign: "right" }}>
          <SocialShare />
        </Col>
      </Row>
      <Row>
        <Text>
          {otherLanguages &&
            otherLanguages.map((val) => {
              return val.language_id === other_language_id && val.language;
            })}
        </Text>
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
        <Text style={{ color: "#C3C6C6" }}>{other_language_def}</Text>
      </Row>
      <Row style={{ paddingTop: "2vmin" }}>
        <Text style={{ color: "#C3C6C6" }}>{example}</Text>
      </Row>
      <Row style={{ paddingTop: "2vmin" }}>
        <Text style={{ color: "#C3C6C6" }}>Available languages: </Text>
        {otherLanguages &&
          otherLanguages.map((val, i) => (
            <>
              <Text style={{ color: "blue", textUnderlinePosition: "under" }}>
                {val.language + ", "}
              </Text>
            </>
          ))}
      </Row>
      <Row style={{ paddingTop: "2vmin" }}>
        <Text style={{ color: "#C3C6C6" }}>
          Contributed by {users && users[0].user_name} on{" "}
          {
            (createdAt.toDate().getFullYear(),
            +"/" +
              (createdAt.toDate().getMonth() + 1) +
              "/" +
              createdAt.toDate().getDate())
          }
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
