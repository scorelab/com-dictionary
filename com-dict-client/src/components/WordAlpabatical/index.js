import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  Row,
  Col,
  Divider,
  Button,
  Pagination,
  Tabs,
} from "antd";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import Word from "./word";
import LetterHead from "./letterHead";
const { Title, Text } = Typography;
const { TabPane } = Tabs;
function WordHome() {
  const [activeKey, setActiveKey] = useState("A");

  useFirestoreConnect([
    {
      type: "child_changed",
      collection: "headTerms",
      where: ["alphabetical", "==", activeKey],
    },
  ]);

  // Fetch data
  const headTerms = useSelector((state) => state.firestore.ordered.headTerms);
  const headTermsIDs =
    headTerms &&
    headTerms.map((val) => {
      return val.head_term_id;
    });
  console.log(headTermsIDs);
  useFirestoreConnect([
    {
      type: "child_changed",
      collection: "definitions",
      where: [
        "head_term_id",
        "in",
        headTermsIDs && headTermsIDs.length > 0 ? headTermsIDs : ["1"],
      ],
    },
  ]);

  const words = useSelector((state) => state.firestore.ordered.definitions);

  return (
    <Row>
    <Col span={3}></Col>
     <Col span={18}>
      <Tabs
        onChange={(key) => setActiveKey(key)}
        defaultActiveKey="1"
        type="card"
        tabBarGutter="4px"
      >
        {[...Array(26).keys()].map((i) => (
          <TabPane
            tab={`${String.fromCharCode(i + 65)}`}
            key={String.fromCharCode(i + 65)}
          >
            
            <LetterHead letter={String.fromCharCode(i + 65)} />
            <Row>{words && words.map((val, i) => <Word data={val} />)}</Row>
          </TabPane>
        ))}
      </Tabs>
      </Col>
      <Col span={3}></Col>
      </Row>
 
  );
}

export default WordHome;
