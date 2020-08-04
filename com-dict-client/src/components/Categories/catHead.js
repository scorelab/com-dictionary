import React from "react";
import { Row, Col} from 'antd';
import { Typography } from "antd";


const { Title } = Typography;

function CatHead() {
  return (
    <Row>
    <Col span={24}>
    <div className="cat_title">
      <Title level={1} style={{ color: "white" }}>Sports</Title>
    </div>
    </Col>
    </Row>
  );
}

export default CatHead;
