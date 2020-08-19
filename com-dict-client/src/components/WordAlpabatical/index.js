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
import LetterHead from "./letterHead";
import WordSimple from "../WordHome/wordSimple";

// const { Title, Text } = Typography;
const { TabPane } = Tabs;
function WordHome(props) {
  const defaultKey = props.activeKey || "A";
  const [activeKey, setActiveKey] = useState(defaultKey);
  // const [headTerms, setHeadTerms] = useState([]);
  const [words, setWords] = useState([]);

  const firestore = useFirestore();

  useEffect(() => {
    firestore
      .collection("definitions")
      .orderBy("createdAt")
      .where("alphabatical", "==", activeKey)
      .limit(10)
      .onSnapshot(
        (querySnapshot) => {
          console.log(querySnapshot.docs);
          // let lastItem = "";
          const defs = querySnapshot.docs.map((doc) => {
            let tempObj = {};
            tempObj = doc.data();
            tempObj["id"] = doc.id;
            return tempObj;
          });
          setWords(defs);
          // setEndAt(lastItem);
        },
        (err) => {
          console.log(err);
        }
      );
  }, [activeKey, firestore]);

  console.log(words);

  return (
    <>
      <Tabs
        onChange={(key) => setActiveKey(key)}
        defaultActiveKey={activeKey}
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
                ? words.map((val, j) => <WordSimple key={j} data={val} />)
                : ""}
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </>
  );
}

export default WordHome;
