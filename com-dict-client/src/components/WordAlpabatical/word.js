import React, { useState, useEffect } from "react";
import { Typography, Card, Row, Col, Divider, Button, message } from "antd";
import {
  SoundOutlined,
  LikeOutlined,
  DislikeOutlined,
  AudioMutedOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import SocialShare from "../WordHome/socialShare";
import moment from "moment";
import {
  updateWord,
  addLikes,
  addDislikes,
  deleteDislikes,
  deleteLikes,
} from "../../store/actions";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
const { Title, Text } = Typography;

function WordCustom(props) {
  const {
    head_term,
    likes,
    dislikes,
    other_language,
    other_language_def,
    other_language_term,
    example,
    uname,
    createdAt,
    // user_id,
    id,
    pronunciation,
    word_classes,
    // word_of_the_day,
  } = props.data;

  const history = useHistory();
  const firestore = useFirestore();
  const user = useSelector((state) => state.firebase.auth);
  const handleLike = () => {
    if (!user.uid) {
      return message.error("Please login");
    }
    let user_likes = {
      definition_id: id,
      uid: user.uid,
    };
    let new_likes = {
      likes: parseInt(likes) + 1,
      dislikes: dislikes > 0 ? parseInt(dislikes) - 1 : dislikes,
    };
    console.log(myLikes, user_likes, new_likes);
    if (myLikes.length < 1) {
      updateWord(id, new_likes)(firestore);
      addLikes(user_likes)(firestore);
      myDislikes.length > 0 && deleteDislikes(myDislikes[0].id)(firestore);
    } else {
      return message.error("You already liked.");
    }
  };
  const handleDislike = () => {
    if (!user.uid) {
      return message.error("Please login");
    }
    let user_dislikes = {
      definition_id: id,
      uid: user.uid,
    };
    let new_dislikes = {
      dislikes: parseInt(dislikes) + 1,
      likes: likes > 0 ? parseInt(likes) - 1 : likes,
    };
    console.log(myDislikes, user_dislikes, new_dislikes);
    if (myDislikes.length < 1) {
      updateWord(id, new_dislikes)(firestore);
      addDislikes(user_dislikes)(firestore);
      myLikes.length > 0 && deleteLikes(myLikes[0].id)(firestore);
    } else {
      return message.error("You already disliked.");
    }
  };

  const [myLikes, setMyLikes] = useState(0);
  const [myDislikes, setMyDislikes] = useState(0);

  useEffect(() => {
    firestore
      .collection("likes")
      .where("uid", "==", user.uid ? user.uid : "1")
      .where("definition_id", "==", id)
      .limit(1)
      .onSnapshot(
        (querySnapshot) => {
          const defs = querySnapshot.docs.map((doc) => {
            let temp = doc.data();
            temp["id"] = doc.id;
            return temp;
          });
          setMyLikes(defs);
        },
        (err) => {
          console.log(err);
        }
      );
    firestore
      .collection("dislikes")
      .where("uid", "==", user.uid ? user.uid : "1")
      .where("definition_id", "==", id)
      .limit(1)
      .onSnapshot(
        (querySnapshot) => {
          const defs = querySnapshot.docs.map((doc) => {
            let temp = doc.data();
            temp["id"] = doc.id;
            return temp;
          });
          setMyDislikes(defs);
        },
        (err) => {
          console.log(err);
        }
      );
    // eslint-disable-next-line
  }, [user.uid]);

  return (
    <Row>
      <Col span={20}>
        <Card bordered className="word_index">
          <Row>
            <Col span={18}>
              <Title level={4}>{head_term}</Title>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={6}
              style={{ textAlign: "right" }}
            >
              <SocialShare />
            </Col>
          </Row>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24} style={{ textAlign: "left" }}>
              <Title style={{ color: "#639bb4" }}>{other_language_term}</Title>
            </Col>
            {/* <Col lg={24} md={24} sm={24} xs={24} style={{ textAlign: "left" }}>
              <Title style={{ color: "#639bb4" }}>{other_language_term}</Title>
            </Col> */}

            {/* <Col lg={10} md={10} sm={10} xs={24} style={{ textAlign: "right" }}>
          <SocialShare />
        </Col> */}
          </Row>
          <Row>
            <Text>{other_language}</Text>
            <Divider type="vertical" style={{ height: "4vmin" }}></Divider>
            <Text>{word_classes.map((val, i) => `${val} `)}</Text>
            <Divider type="vertical" style={{ height: "4vmin" }}></Divider>
            {!pronunciation ? (
              <SoundOutlined
                onClick={() => new Audio(pronunciation).play()}
                style={{ fontSize: "14pt" }}
              />
            ) : (
              <AudioMutedOutlined style={{ fontSize: "14pt" }} />
            )}
          </Row>
          {/* 
      <Row style={{ paddingTop: "2vmin" }}>
        <Title level={2} style={{color:"#639bb4"}}>{other_language_term}</Title>
      </Row> */}

          <Row style={{ paddingTop: "2vmin" }}>
            <Text>{other_language_def}</Text>
          </Row>
          <Row style={{ paddingTop: "2vmin" }}>
            <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {example}
            </Text>
          </Row>

          <Row style={{ paddingTop: "2vmin" }}>
            <Text style={{ flexDirection: "row" }}>
              Created by <Text style={{ fontWeight: "bold" }}>{uname} </Text>on{" "}
              <Text style={{ fontWeight: "bold" }}>
                {moment(createdAt).format("dddd, MMMM Do YYYY")}
              </Text>
            </Text>
          </Row>
          <Row style={{ paddingTop: "2vmin", paddingLeft: "10vmin" }}>
            <Col xl={2} lg={2} md={2} sm={2}></Col>
            <Col xl={4} lg={4} md={4} sm={4} style={{ textAlign: "center" }}>
              <LikeOutlined
                onClick={handleLike}
                style={{ fontSize: "4vmin" }}
              />
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
              <DislikeOutlined
                onClick={handleDislike}
                style={{ fontSize: "4vmin" }}
              />
              <Text>{dislikes}</Text>
            </Col>
            <Col xl={0} lg={0} md={13} sm={13}></Col>
            <Col xl={13} lg={13} md={24} sm={24} style={{ textAlign: "right" }}>
              <Button
                onClick={() => history.push("/comment", { data: props.data })}
                type="link"
                style={{ color: "green" }}
              >
                Comment
              </Button>
              <Button
                onClick={() => history.push("/report", { data: props.data })}
                type="link"
                style={{ color: "red" }}
              >
                Report
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={2}></Col>
    </Row>
  );
}

export default WordCustom;
