// import React from "react";
// import { Typography, Row, Col } from "antd";

// const { Title } = Typography;

// function LetterHead(props) {
//   const { letter } = props;
//   return (
//     <div className="letter_div">
//         <Title style={{ color: "white" }}>{letter}</Title>
//     </div>
//   );
// }

// export default LetterHead;

import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function LetterHead() {
  return (
    <div className="letter_div">
      <Title
      style={
      {
        color:"white",
        width:"100%",
        textShadow:"2px 2px #639bb4",
        backgroundImage: "linear-gradient(to right,  #7dbf94, #639bb4)"
      }}
      >A</Title>
    </div>
  );
}

export default LetterHead;
