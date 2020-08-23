import React from "react";
// import { Button } from "antd";
// import { ShareAltOutlined } from "@ant-design/icons";

import {
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
function SocialShare({ other_language, head_term }) {
  const siteUrl = `https://community-dictionary-dev.firebaseapp.com/search/${other_language}/${encodeURIComponent(
    head_term
  )}`;
  return (
    <span>
      <FacebookShareButton
        url={siteUrl}
        quote={`Meaning of ${head_term} in ${other_language}`}
      >
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={siteUrl}
        quote={`Meaning of ${head_term} in ${other_language}`}
      >
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      {/* <Button
        type="link"
        icon={
          <ShareAltOutlined
            style={{ fontSize: "32pt", color: "gray"}}
          />
        }
        size="large"
      ></Button> */}
    </span>
  );
}

export default SocialShare;
