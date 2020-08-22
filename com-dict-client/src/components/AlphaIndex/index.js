import React from "react";
import { Tabs, Row, Col } from "antd";


const { TabPane } = Tabs;

function AlphaIndex() {
  return (
    <Row>
    <Col span={3}></Col>
     <Col span={18}>
      <Tabs
        defaultActiveKey="1"
        tabBarGutter="4px"
        type="card"
      >
        {[...Array(26).keys()].map((i) => (
          <TabPane
            tab={`${String.fromCharCode(i + 65)}`}
            key={String.fromCharCode(i + 65)}
          >
            {/* Content of tab {String.fromCharCode(i + 65)} */}
          </TabPane>
        ))}
      </Tabs>
      </Col>
      <Col span={3}></Col>
      </Row>
  );
}

export default AlphaIndex;
