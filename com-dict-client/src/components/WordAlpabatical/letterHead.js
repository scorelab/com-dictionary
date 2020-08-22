import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function LetterHead(props) {
  const { letter } = props;
  return (
    <div className="letter_div">
      <Title
        style={{
          color: "white",
          textShadow: "2px 2px #639bb4",
          // backgroundColor:"#639bb4",
          backgroundImage: "linear-gradient(to right,  #7dbf94, #639bb4)",
        }}
      >
        {letter}
      </Title>
    </div>
  );
}

export default LetterHead;
