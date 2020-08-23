import React, { useState } from "react";
import {
  Modal,
  // Avatar,
  Button,
  Card,
  Divider,
  Typography,
  Row,
  Col,
} from "antd";
import NormalLoginForm from "./loginForm";
import SocialLogin from "./socialLogin";
import login from "../../images/pablo-sign-in.png";

const { Text } = Typography;
// const { Meta } = Card;

function App(props) {
  const [state, setState] = useState({
    visible: false,
    confirmLoading: false,
  });
  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const handleOk = () => {
    setState({
      ...state,
      confirmLoading: true,
    });
    setTimeout(() => {
      setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setState({
      ...state,
      visible: false,
    });
  };

  const { visible, confirmLoading } = state;
  return (
    <div>
      <Button type="link" size="large" onClick={showModal}>
        <span className="icons8-customer"></span>
      </Button>
      <Modal
        width="80%"
        footer={null}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Row>
          <Col
            xl={8}
            lg={8}
            md={0}
            sm={0}
            xs={0}
            style={{ textAlign: "center" }}
          >
            <Row justify="space-around" align="middle">
              <img
                ALT="LOGIN"
                className="login_anime"
                style={{
                  maxWidth: "110%",
                  height: "auto",
                  paddingTop: "20vmin",
                }}
                src={login}
              />
            </Row>
          </Col>
          <Col xl={16} lg={16} md={24} sm={24} xs={24}>
            <Card
              title="WELCOME BACK!!!"
              style={{
                backgroundColor: "#FFFFFF ",
                border: 0,
                padding: "1vmin",
                width: "100%",
              }}
              headStyle={{
                backgroundColor: "#FFFFFF ",
                fontSize: "6vmin",
                color: "#black",
                border: 0,
                textAlign: "center",
              }}
              bodyStyle={{ backgroundColor: "#FFFFFF", border: 0 }}
            >
              <NormalLoginForm />

              <Divider> OR </Divider>

              <SocialLogin />
            </Card>

            <div style={{ textAlign: "center" }}>
              <Text strong>Don't have an account?</Text>
              <a href="/signup">Sign Up here</a>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default App;
