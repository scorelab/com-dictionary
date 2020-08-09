import React, { useEffect, useState } from "react";
import { Row, Col, Typography } from "antd";
import { useFirestore } from "react-redux-firebase";
import WordSearch from "./WordSearch";
const { Title } = Typography;

export default function FullTextSearch({ params }) {
  const firestore = useFirestore();
  const [words, setWords] = useState(undefined);

  useEffect(() => {
    firestore
      .collection("definitions")
      .orderBy("createdAt")
      .where("head_term", "==", params.keyword)
      .where("other_language", "==", params.language)
      .limit(10)
      .onSnapshot(
        (querySnapshot) => {
          const defs = [];
          querySnapshot.docs.map((doc) => {
            defs.push(doc.data());
          });
          console.log(defs);
          setWords(defs);
        },
        (err) => {
          console.log(err);
        }
      );
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Title level={2}>
            Search results for "{params.keyword}" in "{params.language}"
          </Title>
        </Col>
      </Row>
      <Row align="middle" justify="center">
        {words && words.map((val, i) => <WordSearch key={i} data={val} />)}
      </Row>
    </>
  );
}
