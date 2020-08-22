import React, { useState, useEffect } from "react";
import {
  // Typography,
  // Card,
  Row,
  Col,
  // Divider,
  // Button,
  // Pagination,
  Tabs,
} from "antd";
// import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import LetterHead from "./letterHead";
import WordCutom from "./word";

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
      .get()
      .then((querySnapshot) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, [activeKey, firestore]);

  console.log(words);

  return (
    <>
      <Tabs
        onChange={(key) => setActiveKey(key)}
        defaultActiveKey={activeKey}
        type="card"
        size="large"
        className="index"
      >
        {[...Array(26).keys()].map((i) => (
          <TabPane
            tab={`${String.fromCharCode(i + 65)}`}
            key={String.fromCharCode(i + 65)}
          >
            <LetterHead letter={String.fromCharCode(i + 65)} />

            {words.length > 0
              ? words.map((val, j) => (
                  <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                      <WordCutom key={j} data={val} />
                    </Col>
                    <Col span={4}></Col>
                  </Row>
                ))
              : ""}
          </TabPane>
        ))}
      </Tabs>
    </>
  );
}

export default WordHome;
