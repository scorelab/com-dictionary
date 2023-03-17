import React, { useState, useEffect } from "react";
import TitleBar from "../../components/Header";
import FooterPage from "../../components/Footer/FooterPage";
import {
  Row,
  Col,
  Typography,
  Divider,
  Layout,
  Menu,
  Input,
  Button,
  Space,
  Avatar,
} from "antd";
import {
  UserOutlined,
  UploadOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import SubscriptionCard from "../../components/Profile/SubscriptionCard";

const { Title } = Typography;
const { Search } = Input;
const { Header, Footer, Content } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Profile = () => {
  const [current, setCurrent] = useState("1");

  useEffect(() => {
    const current = localStorage.getItem("currentMenu");
    console.log("current", current);

    current && setCurrent(current);
  }, []);

  const items = [
    getItem("Favorites", "1"),
    getItem("Subscriptions", "2"),
    getItem("Settings", "3"),
    getItem("Help", "4"),
    getItem("Sign Out", "5"),
  ];

  const onClick = (e) => {
    localStorage.setItem("currentMenu", e.key);
    setCurrent(e.key);
  };

  const onSearch = (value) => console.log(value);

  const switchMenu = () => {
    switch (current) {
      case "1":
        return (
          <>
            <Title level={4}>Favorites</Title>
            <p>The place where you manage your Favorite words-list.</p>
            <p>No words added yet.</p>
            <Button
              style={{
                marginLeft: "5px",
                justifyItems: "center",
              }}
              type="primary"
              shape="round"
              icon={<PlusCircleOutlined />}
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            >
              Create List
            </Button>
          </>
        );
      case "2":
        return (
          <>
            <Title level={4}>Subscriptions</Title>
            <p>The place where you manage your Subscriptions.</p>
            <p>You are on free plan currently.</p>
            <Space direction="horizontal">
              <SubscriptionCard />
              <SubscriptionCard />
              <SubscriptionCard />
            </Space>
          </>
        );
      case "3":
        return (
          <>
            <Title level={3}>Profile</Title>
            <p>The place where you manage your settings.</p>
            <div
              style={{
                display: "flex",
                paddingBottom: "5px",
                justifyItems: "center",
              }}
            >
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                icon={<UserOutlined />}
              />

              <div
                style={{
                  paddingTop: "2%",
                  paddingLeft: "5px",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{
                    marginLeft: "5px",
                    justifyItems: "center",
                  }}
                  type="primary"
                  shape="round"
                  icon={<UploadOutlined />}
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                ></Button>
                <p>Upload Profile</p>
              </div>
            </div>

            <Row className="pb-3">
              <Col span={10} className="pr-10">
                <Title level={5}>First name</Title>
                <Input placeholder="First name" />
              </Col>
              <Col span={10} className="pr-10">
                <Title level={5}>Last name</Title>
                <Input placeholder="Last name" />
              </Col>
            </Row>
            <Row className="pb-3">
              <Col span={10} className="pr-10">
                <Title level={5}>Email</Title>
                <Input placeholder="Email" />
              </Col>
              <Col span={10} className="pr-10">
                <Title level={5}>Password</Title>
                <Input.Password placeholder="input password" />
              </Col>
            </Row>
            <Title level={4}>Account Management</Title>
            <p>
              You can delete your account at any time. However, please note that
              <br />
              all your data and saved words will be lost! This cannot be undone.
            </p>
            <Space wrap>
              <Button type="primary">Save</Button>
              <Button danger>Delete Account</Button>
            </Space>
          </>
        );
      case "4":
        return (
          <>
            <Title level={4}>How can we help you ?</Title>
            <p>Ask your question below.</p>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{
                width: 600,
                paddingBottom: 5,
              }}
            />
            <Space direction="vertical">
              <Typography>
                want to suggest a word or have comment on one of our examples?
              </Typography>
              <Button type="primary" shape="round">
                Fill this form
              </Button>
              <Typography>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </Typography>
            </Space>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <Layout>
      <Header className="title_bar body">
        <TitleBar />
      </Header>
      <Content className=" body  p-10">
        <Title level={4}> My Account</Title>
        <Row>
          <Col span={6}>
            <Menu
              onClick={onClick}
              style={{
                width: 256,
              }}
              mode="vertical"
              items={items}
            />
            <Divider type="vertical" />
          </Col>
          <Col span={18}>{switchMenu()}</Col>
        </Row>
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
};

export default Profile;
