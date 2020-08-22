import React from "react";
import { Modal, Button, Card, Divider, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import NormalLoginForm from "../Login/loginForm";
import SocialLogin from "../Login/socialLogin";

const { Text } = Typography;

class App extends React.Component {
  state = {
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <div>
        <Button
          type="link"
          size="large"
          icon={
            <UserOutlined
              style={{
                color: "black",
                fontSize: "28px",
                backgroundColor: "transparent",
              }}
            />
          }
          onClick={this.showModal}
        ></Button>
        <Modal
          style={{ width: "100%" }}
          footer={null}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Card
            title="Sign In"
            style={{
              backgroundColor: "#FFFFFF ",
              border: 0,
              padding: "1.5vmin",
            }}
            headStyle={{
              backgroundColor: "#E9E9E9",
              fontSize: "x-large",
              color: "#4FD5DE",
              border: 0,
              textAlign: "center",
            }}
            bodyStyle={{ backgroundColor: "#F7F8F8", border: 0 }}
          >
            <NormalLoginForm />

            <Divider> OR </Divider>

            <SocialLogin />
          </Card>

          <div style={{ textAlign: "center" }}>
            <Text strong>Don't have an account?</Text>
            <a href="/signup">Sign Up here</a>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
