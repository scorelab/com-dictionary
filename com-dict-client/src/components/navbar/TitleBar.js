import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import UserAccount from "./UserAccount";

const { SubMenu } = Menu;

function TitleBar() {
  return (
    <nav>
      <Link to="/">
        <div className="title"></div>
      </Link>
      <Menu mode="horizontal" className="navbar">
        <Menu.Item key="1">Browse</Menu.Item>
        <Menu.Item key="2">Categories</Menu.Item>
        <Menu.Item key="3">Vote</Menu.Item>
        <Menu.Item key="4">
          <Link to="/add">
            <PlusCircleOutlined style={{ color: "black", fontSize: "28px" }} />
          </Link>
        </Menu.Item>

        <SubMenu
          key="account"
          title={
            <span>
              <UserAccount />
            </span>
          }
        ></SubMenu>
      </Menu>
    </nav>
  );
}

export default TitleBar;
