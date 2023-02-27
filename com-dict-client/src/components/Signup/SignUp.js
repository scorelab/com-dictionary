import React from "react";
import {
  Form,
  Input,
  // Tooltip,
  // Select,
  Row,
  Col,
  Checkbox,
  Button,
  // AutoComplete,
} from "antd";
import { Typography } from "antd";
import signup from "../../images/pablo-sign-up.png";
// import { QuestionCircleOutlined } from "@ant-design/icons";
import { createNewUser } from "../../store/actions";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

// const { Option } = Select;
const { Title } = Typography;
// const AutoCompleteOption = AutoComplete.Option;

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

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const firebase = useFirebase();
  const history = useHistory();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    createNewUser(
      values.email,
      values.password,
      values.email
    )(firebase, history);
  };

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select
  //       style={{
  //         width: 70,
  //       }}
  //     >
  //       <Option value="86">+94</Option>
  //       <Option value="87">+86</Option>
  //     </Select>
  //   </Form.Item>
  // );
  // const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <Row>
      <Row>
        <Col span={1}></Col>
        <Col span={23}>
          <span style={{ textAlign: "center" }}>
            <Title level={1}>BECOME A PART OF OUR COMMUNITY TODAY!!!</Title>
          </span>
        </Col>
      </Row>
      <Row style={{ paddingTop: "3vmin" }}>
        <Col xl={1} lg={0}></Col>
        <Col xl={7} lg={8} md={0} sm={0} xs={0} style={{ textAlign: "center" }}>
          <Row align="middle">
            <img
              alt="signup"
              style={{ maxWidth: "120%", paddingTop: "5%" }}
              src={signup}
            />
          </Row>
        </Col>
        <Col xl={0} lg={1} md={1} sm={1} xs={1}></Col>
        <Row></Row>
        <Col xl={14} lg={12} md={22} sm={22} xs={22}>
          <Form
            autoComplete={false}
            {...formItemLayout}
            form={form}
            name="register"
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

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            {/* <Form.Item
              name="nickname"
              label={
                <span>
                  Nickname&nbsp;
                  <Tooltip title="What do you want others to call you?">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item> */}

            {/* <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item> */}

            <Row>
              <Col span={6}></Col>
              <Col span={18}>
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject("Should accept agreement"),
                    },
                  ]}
                  {...formItemLayout}
                >
                  <Checkbox>
                    I have read the <a href="#1">agreement</a>
                  </Checkbox>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={8}>
              <Col span={6}></Col>
              <Col span={18}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="register-form-button"
                  >
                    Register
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col xl={0} lg={0} md={1} sm={1} xs={1}></Col>
      </Row>
    </Row>
  );
};

export default RegistrationForm;
