import React, { useState } from "react";
import { Comment, Avatar, Form, Button, List, Input, Row, Col } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

function reply_editor(props)
{

const state = {
    comments: [],
    submitting: false,
    value: '',
  };

  const handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: '',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  const handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

//   render() {
    const { comments, submitting, value } = state;

    return (
      <Row>
          <Col span={3}></Col>
          <Col span={21}>
          {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src='https://img.icons8.com/bubbles/500/000000/user.png'
              alt="VinuriB"
            />
          }
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
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

export default reply_editor;