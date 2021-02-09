import React from "react";
import { Form, Input, Row, Col, Button } from "antd";
import { Typography } from "antd";
import passwordrest from "../../images/pablo-rest-password.png";
import { passwordRest } from "../../store/actions";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
const { Title } = Typography;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
    md: {
      span: 8,
    },
    lg: {
      span: 6,
    },
    xl: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
    md: {
      span: 16,
    },
    lg: {
      span: 18,
    },
  },
};

const PasswordRestForm = () => {
  const [form] = Form.useForm();
  const firebase = useFirebase();
  const history = useHistory();
  const onFinish = (values) => {
    try {
      const { email } = values;
      console.log("Received values of form: ", values);
      passwordRest(email)(firebase, history);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Row>
      <Col span={23}>
        <span style={{ textAlign: "center" }}>
          <Title level={1}>Reset Your Password</Title>
        </span>
      </Col>

      <Row style={{ paddingTop: "3vmin" }}>
        <Col xl={1} lg={0}></Col>
        <Col xl={7} lg={8} md={0} sm={0} xs={0} style={{ textAlign: "center" }}>
          <Row align="middle">
            <img
              alt="signup"
              style={{ maxWidth: "120%", paddingTop: "5%" }}
              src={passwordrest}
            />
          </Row>
        </Col>

        <Col xl={14} lg={12} md={22} sm={22} xs={22}>
          <Col span={30} align="middle">
            <span style={{ textAlign: "center", fontSize: 20 }}>
              No worries! Just enter your email and we'll send a password reset
              link
            </span>
          </Col>

          <Form
            autoComplete={false}
            {...formItemLayout}
            form={form}
            name="passwordrest"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Row gutter={8}>
              <Col span={6}></Col>
              <Col span={18}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="passwordrest-form-button"
                  >
                    Send Recovery Email
                  </Button>
                </Form.Item>
                <div style={{ textAlign: "center" }}>
                  Dont you have account?<a href="/signup">Sign Up here</a>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>

        <Col xl={0} lg={0} md={1} sm={1} xs={1}></Col>
      </Row>
    </Row>
  );
};

export default PasswordRestForm;
