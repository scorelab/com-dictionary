import React, { useEffect, useState } from "react";
import { Row, Col, Typography } from "antd";
import { useFirestore } from "react-redux-firebase";
import WordSearch from "./WordSearch";
import { updateWord } from "../../store/actions";
const { Title } = Typography;

export default function FullTextSearch({ params }) {
  const firestore = useFirestore();
  const [words, setWords] = useState(undefined);

  useEffect(() => {
    firestore
      .collection("definitions")
      .orderBy("likes", "desc")
      .where("head_term", "==", params.keyword)
      .where("other_language", "==", params.language)
      .limit(10)
      .get()
      .then((querySnapshot) => {
        const defs = querySnapshot.docs.map((doc) => {
          let tempObj = {};
          tempObj = doc.data();
          tempObj["id"] = doc.id;
          return tempObj;
        });
        console.log(defs);
        if (defs.length > 0) {
          const topDef = defs[0];
          const newTrendingFactor = parseInt(topDef.trending_factor) + 1;
          updateWord(topDef.id, { trending_factor: newTrendingFactor })(
            firestore
          );
        }
        setWords(defs);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [params]);
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
