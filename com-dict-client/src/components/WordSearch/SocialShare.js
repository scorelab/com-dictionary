import React from "react";
import { Button } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

import {
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

function SocialShare() {
  return (
    <span>
      <FacebookShareButton url={"shareUrl"} quote={"title"}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={"shareUrl"} quote={"title"}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <Button
        type="link"
        icon={
          <ShareAltOutlined
            style={{ fontSize: "24pt", color: "gray"}}
          />
        }
        size="large"
      ></Button>
    </span>
  );
}

export default SocialShare;
