import React, { useState } from "react";
import { Comment, Avatar, Form, Button, Input, Row, Col } from "antd";
import moment from "moment";
import { addComment } from "../../store/actions";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

function ReplyEditor({ data }) {
  const [value, setValue] = useState("");
  const firestore = useFirestore();
  const handleSubmit = () => {
    if (!value) {
      return;
    }
    let tempComment = {
      comment: value,
      createdAt: moment().format(),
      definition_id: data.id,
      uid: user.uid,
      uname: user.displayName,
      uphoto: user.photoURL,
    };
    addComment(tempComment)(firestore);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const user = useSelector((state) => state.firebase.auth);
  return (
    <Row>
      <Col span={3}></Col>
      <Col span={21}>
        <Comment
          avatar={<Avatar src={user.photoURL} alt={user.displayName} />}
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              value={value}
            />
          }
        />
      </Col>
    </Row>
  );
}

// }

// ReactDOM.render(<App />, mountNode);

export default ReplyEditor;
