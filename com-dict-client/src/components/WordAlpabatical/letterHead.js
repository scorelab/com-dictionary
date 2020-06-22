import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function LetterHead(props) {
  const { letter } = props;
  return (
    <div className="letter_div">
      <Title style={{ color: "white" }}>{letter}</Title>
    </div>
  );
}

export default LetterHead;
