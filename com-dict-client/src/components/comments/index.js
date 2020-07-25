import React from "react";
import {
  Typography,
  // Card,
  // Row,
  // Col,
  // Divider,
  // Button,
} from "antd";
import Word from "../WordHome/word";
const { Title } = Typography;

function comment_section() {
  return (
    <>
      <Word />
      <Title>Add comment section, add new comment button</Title>
    </>
  );
}

export default comment_section;
