import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { signIn } from "../../store/actions";

const NormalLoginForm = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const onSubmit = (values) => {
    console.log("Received values of form: ", values);
    signIn(values)(firebase, history);
  };

  return (
    <Form
      autoComplete={false}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email Address!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a href="#1" className="login-form-forgot">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
