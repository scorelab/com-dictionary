import React, { useState } from "react";
import { Card, Typography, Form, Input, Select, Button, Row, Col } from "antd";
import WordClass from "./WordClass";
import EditableTagGroup from "./RelatedWords";

import { useFirestore, useFirestoreConnect } from "react-redux-firebase";

import { addWord } from "../../store/actions";
import { useSelector } from "react-redux";

const { Text } = Typography;
var optionText;

function WordForm() {
  const firestore = useFirestore();
  const [language, setLanguage] = useState("English");
  const [headTerm, setHeadTerm] = useState("");
  const [otherLanguageTerm, setOtherLanguageTerm] = useState("");
  const [wordClass, setWordClass] = useState([]);
  const [meaning, setMeaning] = useState("");
  const [example, setExample] = useState("");
  const [category, setCategory] = useState("");
  const [relatedWords, setRelatedWords] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useFirestoreConnect([
    { collection: "languages" },
    { collection: "categories" },
    { collection: "headTerms" },
  ]);
  const onSubmit = (values) => {
    // const definition = values;
    // console.log(definition);
    const data = {
      other_language: language,
      head_term: headTerm,
      other_language_term: otherLanguageTerm,
      categories: category,
      other_language_def: meaning,
      word_classes: wordClass,
      example: example,
      related_words: relatedWords,
      likes: likes,
      dislikes: dislikes,
      userId: user,
    };
    console.log(data);
    return addWord(data)(firestore);
  };

  const languages = useSelector((state) => state.firestore.ordered.languages);
  console.log(languages);

  const categories = useSelector((state) => state.firestore.ordered.categories);
  console.log(categories);

  const headTerms = useSelector((state) => state.firestore.ordered.headTerms);
  console.log(headTerms);

  const user = useSelector((state) => state.firebase.auth.uid);

  return (
    <div>
      <Card
        bordered
        title="Add New Word"
        style={{
          backgroundColor: "#FFFFFF ",
          border: 0,
          width: "80%",
          marginLeft: "10%",
          marginRight: "10%",
        }}
        headStyle={{
          backgroundColor: "#FFFFFF",
          fontSize: "x-large",
          color: "black",
          border: 0,
          textAlign: "center",
        }}
        bodyStyle={{ backgroundColor: "#FFFFFF", border: 0 }}
      >
        <Text style={{ fontSize: "18px" }}>
          All the definitions and transaltions on Community Dictionary were
          written by people just like you. Now's your chance to add your own!
        </Text>
        <Form onFinish={onSubmit} style={{ paddingTop: "4vmin" }}>
          <Form.Item
            label="Select the language"
            rules={[{ required: true, message: "" }]}
          >
            <Select
              showSearch
              defaultValue={language}
              onChange={(val) => setLanguage(val)}
            >
              {languages &&
                languages.map((lng, i) => (
                  <Select.Option key={i} value={lng.language}>
                    {lng.language}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Head term"
            rules={[{ required: true, message: "" }]}
          >
            <Select
              showSearch
              placeholder="New word in English"
              onChange={(val) => setHeadTerm(val)}
            >
              {headTerms &&
                headTerms.map((ht, i) => (
                  <Select.Option key={i} value={ht.head_term}>
                    {ht.head_term}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="other_language_term"
            rules={[{ required: true, message: "" }]}
          >
            <Input
              onChange={(val) => setOtherLanguageTerm(val.target.value)}
              placeholder="Word in <selected langauge>"
            />
          </Form.Item>

          <Form.Item
            // rules={[{ required: true, message: "" }]}
            name="classes"
            label="Select the word class"
          >
            <WordClass onChange={(val) => setWordClass(val)} />
          </Form.Item>

          <Form.Item
            name="other_laguage_def"
            rules={[{ required: true, message: "" }]}
          >
            <Input
              onChange={(val) => setMeaning(val.target.value)}
              placeholder="Definition in <selected langauge>"
            />
          </Form.Item>

          <Form.Item name="example" rules={[{ required: true, message: "" }]}>
            <Input
              onChange={(val) => setExample(val.target.value)}
              placeholder="Example on using the word in a sentence"
            />
          </Form.Item>

          <Form.Item name="category">
            <Select
              showSearch
              placeholder="Select the category"
              onChange={(val) => setCategory(val)}
            >
              {categories &&
                categories.map((ct, i) => (
                  <Select.Option value={ct.category}>
                    {ct.category}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item name="related_words" label="Add related words (if any)">
            <EditableTagGroup onChange={(val) => console.log(val)} />
          </Form.Item>

          <Form.Item name="likes">
            <Input value={0} hidden={true} />
          </Form.Item>
          <Form.Item name="dilikes">
            <Input value={0} hidden={true} />
          </Form.Item>
          <Form.Item name="user_id">
            <Input value={user} hidden={true} />
          </Form.Item>

          <Form.Item>
            <Row>
              <Col xl={6} ls={6} md={3} sm={0} xs={0}></Col>
              <Col xl={12} lg={12} md={18} sm={24} xs={24}>
                <Button
                  type="primary"
                  // size="large"
                  htmlType="submit"
                  block
                  // className="submit_btn"
                >
                  Add Word
                </Button>
              </Col>
              <Col xl={6} ls={6} md={3} sm={0} xs={0}></Col>
            </Row>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default WordForm;
