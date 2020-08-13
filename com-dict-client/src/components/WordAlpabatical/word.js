import React from "react";
import { Typography, Card, Row, Col, Divider, Button } from "antd";
import {
  SoundOutlined,
  LikeOutlined,
  DislikeOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import SelectLang from "../Search/SelectLang";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import SocialShare from "../WordHome/socialShare";

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
    // tags,
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
    <Card bordered className="word_card">
      <Row>
        <Col xs={10} sm={12} md={12} lg={12} xl={18}>
          <Row>
            <Col xs={6} xl={8} style={{ textAlign: "left" }}>
              <Title level={5}>{headTerms && headTerms[0].head_term}</Title>
            </Col>

            <Col xs={6} xl={8} style={{ textAlign: "center" }}>
              <SelectLang />
            </Col>

            <Col xs={6} xl={8} style={{ textAlign: "right" }}>
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
              style={{ fontSize: "3vmin" }}
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
                  <Text
                    style={{ color: "blue", textUnderlinePosition: "under" }}
                  >
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
            <Col xl={9} style={{ textAlign: "left" }}>
              <LikeOutlined style={{ fontSize: "4vmin" }} />
              <Text>{likes}</Text>
              <Divider
                flex
                type="vertical"
                style={{
                  height: "4vmin",
                  marginLeft: "2vmin",
                  marginRight: "2vmin",
                }}
              ></Divider>
              <DislikeOutlined style={{ fontSize: "4vmin" }} />
              <Text>{dislikes}</Text>
            </Col>

            <Col xl={15} style={{ textAlign: "right" }}>
              {/* <Button type="link" style={{ color: "green" }}>
               Comment
             </Button> */}
              <Button type="link" style={{ color: "red" }}>
                Report inappropriate
              </Button>
            </Col>
          </Row>

          <Divider flex></Divider>
          <Row>
            <Title level={3} style={{ color: "#12aad4" }}>
              Related Words
            </Title>
          </Row>
        </Col>

        <Col
          xs={1}
          sm={1}
          md={1}
          lg={1}
          xl={1}
          style={{ alignContent: "right" }}
        >
          <Divider type="vertical" style={{ height: "100%" }}></Divider>
        </Col>

        <Col xs={4} sm={4} md={4} lg={4} xl={5}>
          <Row>
            <Text style={{ fontSize: "large" }}>Available translations</Text>
            <PlusCircleOutlined
              style={{ fontSize: "4vmin", marginLeft: "4vmin" }}
            />
            <Divider></Divider>
          </Row>
          <Row>
            <Col xl={12}>
              <Text>Language</Text>
            </Col>
            <Col xl={12}>
              <Text>Link to translation</Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default WordSimple;
