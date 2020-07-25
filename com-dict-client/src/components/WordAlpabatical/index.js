import React, { useState, useEffect } from "react";
import {
  // Typography,
  // Card,
  Row,
  // Col,
  // Divider,
  // Button,
  // Pagination,
  Tabs,
} from "antd";
// import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";

import Word from "./word";
import LetterHead from "./letterHead";

// const { Title, Text } = Typography;
const { TabPane } = Tabs;
function WordHome() {
  const [activeKey, setActiveKey] = useState("A");
  // const [headTerms, setHeadTerms] = useState([]);
  const [headTermIds, setHeadTermIds] = useState(["1"]);
  const [words, setWords] = useState([]);

  const firestore = useFirestore();

  useEffect(() => {
    firestore
      .collection("headTerms")
      .where("alphabetical", "==", activeKey)
      .onSnapshot(
        (querySnapshot) => {
          const htms = querySnapshot.docs.map((doc) => {
            return doc.data();
          });
          console.log(htms);
          const ids = htms.map((val) => val.head_term_id);
          firestore
            .collection("definitions")
            .where("head_term_id", "in", htms.length > 0 ? ids : ["1"])
            .get()
            .then((result) => {
              console.log(headTermIds);
              console.log(result.docs.map((val) => val.data()));
              setWords(result.docs.map((val) => val.data()));
              setHeadTermIds(["1"]);
            });
        },
        (err) => {
          console.log(err);
        }
      );
  }, [activeKey, firestore, headTermIds]);

  console.log(words);

  return (
    <>
      <Tabs
        onChange={(key) => setActiveKey(key)}
        defaultActiveKey="1"
        type="card"
        size="small"
        className="index"
      >
        {[...Array(26).keys()].map((i) => (
          <TabPane
            tab={`${String.fromCharCode(i + 65)}`}
            key={String.fromCharCode(i + 65)}
          >
            <LetterHead letter={String.fromCharCode(i + 65)} />
            <Row>
              {words.length > 0
                ? words.map((val, i) => <Word data={val} />)
                : "Nothing to show here"}
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </>
  );
}

export default WordHome;
