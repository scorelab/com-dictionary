import React, { useState, useEffect } from "react";
import { Typography, Row, Col } from "antd";
import { useFirestore } from "react-redux-firebase";
import WordSimple from "./wordSimple";
import WordDay from "./wordDay";
import AlphaIndex from "../Home/AlphaIndex";

const { Text } = Typography;

function WordHome() {
  const firestore = useFirestore();
  const [words, setWords] = useState([]);
  const [endAt, setEndAt] = useState("");

  useEffect(() => {
    firestore
      .collection("definitions")
      .orderBy("createdAt")
      .startAfter(new Date().getTime())
      .limit(10)
      .onSnapshot(
        (querySnapshot) => {
          console.log(querySnapshot.docs);
          let lastItem = "";
          const defs = [];
          querySnapshot.docs.map((doc) => {
            lastItem = doc.id;
            defs.push(doc.data());
          });
          setWords(defs);
          setEndAt(lastItem);
        },
        (err) => {
          console.log(err);
        }
      );
    // eslint-disable-next-line
  }, []);

  const loadMore = (event) => {
    const target = event.target;
    console.log("hello");
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      alert("Bottom");
    }
  };

  document.getElementById("root").onscroll = loadMore;

  return (
    <>
      <Row>
        <WordDay />
      </Row>

      <Row style={{ backgroundColor: "#f2f2f2", padding: "2vmin" }}>
        <Col xl={2} lg={2} md={0} sm={0}></Col>
        <Col xl={20} lg={20} md={24} sm={24} xs={24}>
          {words.length > 0
            ? words.map((val, i) => <WordSimple data={val} />)
            : "Nothing to show here"}
        </Col>
        <Col xl={2} lg={2} md={0} sm={0} xs={0}></Col>

        <Col lg={1} md={0} sm={0}></Col>
      </Row>
      <Row style={{ paddingTop: "2vmin" }}>
        <Col lg={4} md={0} sm={0}></Col>
      </Row>
      <Row style={{ backgroundColor: "#f2f2f2", lineHeight: "5vmin" }}>
        <Row>
          <Col span={24}>
            <Text style={{ fontSize: "4vmin" }}>
              Browse Community Dictionary
            </Text>
          </Col>
        </Row>
        <Col span={24}>
          <AlphaIndex />
        </Col>
      </Row>
    </>
  );
}

export default WordHome;
