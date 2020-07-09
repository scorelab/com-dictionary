import React from "react";
import { Button } from "antd";
import {
  FacebookFilled,
  TwitterCircleFilled,
  ShareAltOutlined,
} from "@ant-design/icons";

import {
  FacebookShareCount,
  OKShareCount,
  PinterestShareCount,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  RedditIcon,
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
