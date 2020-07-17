import React from "react";
import { Card, Typography, Form, Input, Select, Button, Row, Col} from "antd";
import WordClass from "../WordClass";
import EditableTagGroup from "../RelatedWords";

import { useFirestore, useFirestoreConnect } from "react-redux-firebase";

import { addWord } from "../../store/actions";

const { Text } = Typography;
var optionText;

function WordForm() {
  const firestore = useFirestore();
  useFirestoreConnect([{ collection: "definitions" }]);
  const onSubmit = (values) => {
    const definition = values;
    return addWord(definition)(firestore);
  };

  const onChange = (value) => {
    optionText = value;
    console.log(optionText);
  };

  const onSearch = (val) => {
    console.log("search:", val);
  };

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
        <Form onFinish={onSubmit} style={{ paddingTop: "4vmin"}}>
          <Form.Item label="Select the language">
            <Select
              showSearch
              defaultValue="english"
              onChange={onChange}
              onSearch={onSearch}
            >
              <Select.Option value="English">English</Select.Option>
              <Select.Option value="Spanish">Spanish</Select.Option>
              <Select.Option value="French">French</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="head_term" rules={[{ required: true, message: "" }]}>
            <Input placeholder="Head term - New word in English" />
          </Form.Item>

          <Form.Item
            name="other_language_term"
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="Word in <selected langauge>" />
          </Form.Item>

          <Form.Item label="Select the word class">
            <WordClass />
          </Form.Item>

          <Form.Item
            name="other_laguage_def"
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="Definition in <selected langauge>" />
          </Form.Item>

          <Form.Item name="example" rules={[{ required: true, message: "" }]}>
            <Input placeholder="Example on using the word in a sentence" />
          </Form.Item>

          <Form.Item>
            <Select
              showSearch
              placeholder="Select the category"
              // onChange={onChange}
              onSearch={onSearch}
            >
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="sports">Sports</Select.Option>
              <Select.Option value="politic">Politics</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Add related words">
            <EditableTagGroup />
          </Form.Item>

          <Form.Item>
            <Row>
              <Col xl={6} ls={6} md={3} sm={0} xs={0}>
              </Col>
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
              <Col xl={6} ls={6} md={3} sm={0} xs={0}>
              </Col>
            </Row>
          </Form.Item>
          </Form>
      </Card>
    </div>
  );
}

export default WordForm;
