import React from "react";
import { Typography, Button, Row, Col } from "antd";
import {
  FacebookFilled,
  TwitterOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
// import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { signInWithGoogle, signInWithProviderID } from "../../store/actions";
import { useHistory } from "react-router-dom";
const { Text } = Typography;

function SocialLogin() {
  const firebase = useFirebase();
  const history = useHistory;
  // const auth = useSelector((state) => state.firebase.auth);

  const loginWithGoogle = async () => {
    await signInWithGoogle()(firebase, history);
  };

  const loginWithProviderID = async (provider) => {
    await signInWithProviderID(provider)(firebase, history);
  };
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Text strong>Login using your social media account</Text>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
          style={{ textAlign: "center" }}
        >
          <Button
            className="social_btn"
            style={{ backgroundColor: "#0284E1", width: "100%" }}
            icon={<FacebookFilled />}
            // size="large"
            onClick={() => loginWithProviderID("facebook")}
          >
            Facebook
          </Button>
        </Col>
        <Col
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
          style={{ textAlign: "center" }}
        >
          <Button
            className="social_btn"
            style={{ backgroundColor: "#64CFF6", width: "100%" }}
            icon={<TwitterOutlined />}
            // size="large"
            onClick={() => loginWithProviderID("twitter")}
          >
            Twitter
          </Button>
        </Col>
        <Col
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
          style={{ textAlign: "center" }}
        >
          <Button
            className="social_btn"
            style={{ backgroundColor: "#F4414B", width: "100%" }}
            icon={<GoogleOutlined />}
            onClick={loginWithGoogle}
            // size="large"
          >
            Google
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default SocialLogin;
