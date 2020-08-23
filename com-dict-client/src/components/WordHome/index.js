import React, { useState, useEffect } from "react";
import { Typography, Row, Col } from "antd";
import { useFirestore } from "react-redux-firebase";
import WordSimple from "./wordSimple";
import WordDay from "./wordDay";
import IndexHome from "../Home/AlphaIndexHome";
import moment from "moment";
import WordCarousel from "./wordCarousel";
const { Text } = Typography;

function WordHome() {
  const firestore = useFirestore();
  const [words, setWords] = useState([]);
  // const [endAt, setEndAt] = useState("");
  const [wordOfTheDay, setWordOfTheDay] = useState({ word_classes: [] });
  const [trending, setTrending] = useState([{}]);

  useEffect(() => {
    firestore
      .collection("definitions")
      .orderBy("word_of_the_day", "desc")
      .limit(10)
      .onSnapshot(
        (querySnapshot) => {
          console.log(querySnapshot.docs);
          // let lastItem = "";
          const defs = [];
          querySnapshot.docs.filter((doc) => {
            if (doc.data().word_of_the_day) {
              // lastItem = doc.id;
              let tempObj = {};
              tempObj = doc.data();
              tempObj["id"] = doc.id;
              defs.push(tempObj);
            }
            return null;
          });
          console.log(defs);
          setWords(defs);
          // setEndAt(lastItem);
        },
        (err) => {
          console.log(err);
        }
      );

    firestore
      .collection("definitions")
      .orderBy("trending_factor", "desc")
      .limit(10)
      .onSnapshot(
        (querySnapshot) => {
          const defs = [];
          querySnapshot.docs.map((doc) => {
            defs.push(doc.data());
            return null;
          });
          setTrending(defs);
        },
        (err) => {
          console.log(err);
        }
      );

    const today = moment().format("YYYY-MM-DD");
    console.log(today);
    firestore
      .collection("definitions")
      .where("word_of_the_day", "==", today)
      .limit(1)
      .onSnapshot(
        (querySnapshot) => {
          const defs = [];
          querySnapshot.docs.map((doc) => {
            defs.push(doc.data());
            return null;
          });
          console.log(defs[0]);
          setWordOfTheDay(defs[0]);
        },
        (err) => {
          console.log(err);
        }
      );
    // eslint-disable-next-line
  }, []);

  // const loadMore = (event) => {
  //   const target = event.target;
  //   console.log("hello");
  //   if (target.scrollHeight - target.scrollTop === target.clientHeight) {
  //     alert("Bottom");
  //   }
  // };

  // document.getElementById("root").onscroll = loadMore;

  return (
    <>
      <WordCarousel data={trending} />
      <Row>
        <WordDay data={wordOfTheDay} />
      </Row>

      <Row style={{ backgroundColor: "#f2f2f2", padding: "2vmin" }}>
        <Col xl={2} lg={2} md={0} sm={0}></Col>
        <Col xl={20} lg={20} md={24} sm={24} xs={24}>
          {words.length > 0
            ? words.map((val, i) => <WordSimple key={i} data={val} />)
            : ""}
        </Col>
        <Col xl={2} lg={2} md={0} sm={0} xs={0}></Col>

        <Col lg={1} md={0} sm={0}></Col>
      </Row>
      <Row style={{ paddingTop: "2vmin" }}>
        <Col lg={4} md={0} sm={0}></Col>
      </Row>

      <div>
        <Row>
          <Col span={1}></Col>
          <Col span={23}>
            <Text
              style={{
                fontSize: "5vmin",
                width: "80%",
                color: "#7dbf94",
                fontWeight: "bolder",
              }}
            >
              Browse Community Dictionary
            </Text>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <IndexHome />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default WordHome;
